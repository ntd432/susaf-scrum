import {getBacklogItems, createBacklogItem} from "@/lib/backlog_item_firestore"
import { BacklogItem, BacklogItemStatus, BacklogItemType } from "@/lib/interfaces";
import { Timestamp } from "firebase/firestore";
import Together from "together-ai";
const together = new Together({ apiKey: "73a679a115a49a0e04a4f169d8d94584a46a57c149d7491354a5d3413cfdd927"});

export const fetchBacklogData = async (token: string) => {
    const response = await fetch(`https://api.susaf.se4gd.eu/api/v1/effects/${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    const filteredData = filterData(data);
    const result = await generateCompletion(filteredData) 
    console.log("result", result);
    const refinedLLMdata = refineTheLLMData(result);
    return refinedLLMdata;
  };

  export const saveBacklogData = async (result: any) => {
    for (const itemData of result) {
            const item: Omit<BacklogItem, 'id'> = {
              backlog_title: itemData.backlog_title,
              backlog_description: itemData.backlog_description,
              priority: itemData.priority,
              userstory_description: itemData.user_stories.userstory_description,
              story_points: itemData.user_stories.story_points,
              sustainability_point: itemData.user_stories.sustainability_points,
              acceptance_criteria: itemData.user_stories.acceptance_criteria,
              sustainability_criteria: itemData.user_stories.sustainability_criteria,
              status: BacklogItemStatus.Todo,
              type: BacklogItemType.Task,
              due_date: Timestamp.fromDate(new Date())
            };
            console.log(await createBacklogItem(item));
          }
    
          console.log();
  }

  const filterData = (data: any) => {
    return {
      project_name: data.project_name,
      project_description: data.project_description,
      effects: data.effects.map((effect: any) => ({
        name: effect.name,
        question: effect.question,
        effects: effect.effects.map((subEffect: any) => ({
          description: subEffect.description,
          is_positive: subEffect.is_positive,
          likelihood: subEffect.likelihood,
          impact_level: subEffect.impact_level,
          order_of_impact: subEffect.order_of_impact,
          dimension_name: subEffect.dimension_name,
        })),
      })),
    };
  };

  const generateCompletion = async (filteredData: any) => {
    const prompt = `
      Generate a sustainability-focused product backlog and corresponding user stories for the project 'Hackathon SSM Web Tool', an agile project management tool that integrates sustainability principles from SusAF. Each backlog item should focus on enhancing inclusive decision-making, diverse stakeholder engagement, and sustainability-driven planning while maintaining Agile best practices.

      The backlog should reflect the Social Dimension of SuSAF and emphasize features that foster a sense of belonging, equity, and sustainable impact. Each backlog item should be paired with a clear user story written in the format:

      As a [role], I want to [action], so that [benefit].

      Ensure that each feature aligns with SuSAF’s principles of sustainability, inclusion, and impact. The final backlog should prioritize features based on immediate impact and feasibility while maintaining Agile methodologies.

      Give Me output in Json format:
     [
      {
      backlog_title: "",
      backlog_description: "",
      priority: "",
      user_stories: {
        userstory_description: ""
        story_points: ""
        sustainability_points: ""
        acceptance_criteria: ""
        sustainability_criteria: ""
        }
      }
]

      Data: ${JSON.stringify(filteredData)}
    `;

    try {
      const res = await together.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          }
        ],
        model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
        temperature: 0.7,
        top_p: 0.7,
        top_k: 50,
        repetition_penalty: 1,
        stop: ["<|eot_id|>", "<|eom_id|>"],
        stream: true
      });

      let result = '';
      for await (const token of res) {
        result += token.choices[0]?.delta?.content || '';
      }
      
      return result;

    } catch (error) {
      console.error('Error generating completion:', error);
    }
  };

  const refineTheLLMData = (result: any) => {
    const match = result.match(/\[([\s\S]*?)\]/);
    
          if (match && match[0]) {
              const jsonString = match[0].trim(); // Extract JSON and remove extra spaces
              try {
                  const jsonObject = JSON.parse(jsonString); // Convert to JS object
                  console.log(jsonObject);
                  return jsonObject;
              } catch (error) {
                  console.error("Invalid JSON format:", error);
              }
          } 
          else {
              console.log("No JSON found in the text.");
          }
  }

  const filterUserStories = (backlogItems: BacklogItem[]) => {
    return backlogItems.map(item => ({
      userstory_description: item.userstory_description,
      story_points: item.story_points,
      sustainability_points: item.sustainability_point,
      acceptance_criteria: item.acceptance_criteria,
      sustainability_criteria: item.sustainability_criteria,
    }));
  };


  const generateSprit = async (userStories: any) => {
    const prompt = `
      This is my user story: 
     ${JSON.stringify(userStories)}
     From the these user story I need sprint goals. Ensures sustainability stories are included by suggesting sprint goals that align with sustainability objectives.. Give a short sprint goal that must align with my user story and ensures sustainability. I want to get the output in json.
      [
      "Sprint goal"
      ] 
    `;

    try {
      const res = await together.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          }
        ],
        model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
        temperature: 0.7,
        top_p: 0.7,
        top_k: 50,
        repetition_penalty: 1,
        stop: ["<|eot_id|>", "<|eom_id|>"],
        stream: true
      });

      let result = '';
      for await (const token of res) {
        result += token.choices[0]?.delta?.content || '';
      }
      
      return result;

    } catch (error) {
      console.error('Error generating completion:', error);
    }
  };

  export const generateSprintGoal = async () => {
    const backlogItems = await getBacklogItems()
    const userStories = filterUserStories(backlogItems);
    const result = await generateSprit(userStories);
    const refinedLLMdata = refineTheLLMData(result);
    return refinedLLMdata;
  }