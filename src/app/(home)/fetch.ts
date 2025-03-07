import {
  BacklogItemStatus
} from "@/lib/interfaces"; // Import Firebase functions
import { getBacklogItems } from "@/lib/backlog_item_firestore";

interface OverviewData {
  workItems: {
    value: number;
  };
  tasksCompleted: {
    value: number;
    percent: number;
  };
  sustainabilityPoints: {
    value: number;
    percent: number;
  };
  storyPoints: {
    value: number;
    percent: number;
  };
}

export async function getOverviewData(): Promise<OverviewData> {
  try {
    // Fetch data from Firestore (you may need to change the collection names based on your structure)
    const allBacklogItems = await getBacklogItems();

    // Calculate the values and percentages based on your logic
    const totalWorkItems = allBacklogItems.length;
    const doneItems = allBacklogItems.filter(item => item.status === BacklogItemStatus.Done);
    const toDoItems = allBacklogItems.filter(item => item.status === BacklogItemStatus.Todo);
    const totalTasksCompleted = doneItems.length;
    const totalSustainabilityPointsCompleted = doneItems.reduce((sum, item) => sum + Number(item.sustainability_point), 0);
    const totalSustainabilityPoints = toDoItems.reduce((sum, item) => sum + Number(item.sustainability_point), 0); // Or calculate from doc fields
    const totalStoryPoints = toDoItems.reduce((sum, item) => sum + Number(item.story_points), 0);; // Or calculate from doc fields
    const totalStoryPointsCompleted = doneItems.reduce((sum, item) => sum + Number(item.story_points), 0);; // Or calculate from doc fields

    // Percent calculation example (you may change it based on how you calculate these percentages)
    var workItemsPercent = totalWorkItems / 200; // Example, change the denominator
    var tasksCompletedPercent = Number((totalTasksCompleted / totalWorkItems).toFixed(4)); // Example, change the denominator
    var sustainabilityPointsPercent = Number((totalSustainabilityPointsCompleted / totalSustainabilityPoints).toFixed(4)); // Example, change the denominator
    var storyPointsPercent = Number((totalStoryPointsCompleted / totalStoryPoints).toFixed(4)); // Example, change the denominator

    // Return the data
    return {
      workItems: {
        value: totalWorkItems
      },
      tasksCompleted: {
        value: totalTasksCompleted,
        percent: tasksCompletedPercent,
      },
      sustainabilityPoints: {
        value: totalSustainabilityPointsCompleted,
        percent: sustainabilityPointsPercent,
      },
      storyPoints: {
        value: totalStoryPointsCompleted,
        percent: storyPointsPercent,
      },
    };
  } catch (error) {
    console.error("Error fetching overview data: ", error);
    return {
      workItems: { value: 0 },
      tasksCompleted: { value: 0, percent: 0 },
      sustainabilityPoints: { value: 0, percent: 0 },
      storyPoints: { value: 0, percent: 0 },
    };
  }
}

export async function getChatsData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      name: "Jacob Jones",
      profile: "/images/user/user-01.png",
      isActive: true,
      lastMessage: {
        content: "See you tomorrow at the meeting!",
        type: "text",
        timestamp: "2024-12-19T14:30:00Z",
        isRead: false,
      },
      unreadCount: 3,
    },
    {
      name: "Wilium Smith",
      profile: "/images/user/user-03.png",
      isActive: true,
      lastMessage: {
        content: "Thanks for the update",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
    {
      name: "Johurul Haque",
      profile: "/images/user/user-04.png",
      isActive: false,
      lastMessage: {
        content: "What's up?",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
    {
      name: "M. Chowdhury",
      profile: "/images/user/user-05.png",
      isActive: false,
      lastMessage: {
        content: "Where are you now?",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 2,
    },
    {
      name: "Akagami",
      profile: "/images/user/user-07.png",
      isActive: false,
      lastMessage: {
        content: "Hey, how are you?",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
  ];
}

export async function getBacklogData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      backlog_title: "Stakeholder Sustainability Collaboration Portal",
      backlog_description: "A feature enabling diverse stakeholders (internal teams, clients, community reps) to submit sustainability concerns and suggestions directly into project backlogs. Integrates voting systems and impact mapping aligned with SusAF's Social dimension.",
      priority: "High"
    },
    {
      backlog_title: "SusAF Report-to-Work-Item Converter",
      backlog_description: "AI-powered tool that automatically generates user stories and acceptance criteria from SusAF analysis reports, prioritizing social sustainability metrics like inclusivity indices and belonging impact scores.",
      priority: "High"
    },
    {
      backlog_title: "Inclusive Decision-Making Module",
      backlog_description: "Real-time collaboration workspace with bias-checking algorithms that surface underrepresented stakeholder perspectives during sprint planning. Includes accessibility overlays for neurodiverse teams.",
      priority: "High"
    },
    {
      backlog_title: "Sustainability Conflict Resolution Dashboard",
      backlog_description: "Visualization tool mapping competing stakeholder sustainability priorities from SusAF data, suggesting compromise strategies through impact-effort matrices focused on social cohesion.",
      priority: "Medium"
    },
    {
      backlog_title: "Accessibility-First UI Framework",
      backlog_description: "WCAG 2.2-compliant interface components library with built-in sustainability impact labels, ensuring equal participation from users with disabilities in Agile processes.",
      priority: "High"
    },
    {
      backlog_title: "Community Impact Tracker",
      backlog_description: "Burnup chart variant showing cumulative social sustainability outcomes, measuring team progress against SusAF-defined belonging and inclusion KPIs.",
      priority: "Medium"
    },
    {
      backlog_title: "Agile-Sustainability Hybrid Workflows",
      backlog_description: "Customizable sprint templates embedding SusAF checkpoints into standard Agile ceremonies, with automated reminders for social sustainability retrospectives.",
      priority: "High"
    },
    {
      backlog_title: "Stakeholder Sentiment Analysis Engine",
      backlog_description: "NLP-powered tool analyzing communication patterns in user feedback to detect emerging inclusivity issues, integrated with backlog refinement workflows.",
      priority: "Medium"
    },
    {
      backlog_title: "Sustainability Backlog Prioritization Matrix",
      backlog_description: "Dynamic scoring system weighting user stories based on SusAF social impact criteria and urgency factors, visualized through augmented reality planning boards.",
      priority: "High"
    },
    {
      backlog_title: "Inclusivity Retrospective Templates",
      backlog_description: "Pre-built reflection frameworks helping teams analyze how sprint outcomes affected stakeholder belonging, with AI-generated improvement experiments.",
      priority: "Medium"
    }
  ];
}

export async function getSprintData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      userstory_description: "As a product owner, I want the tool to extract key insights from SusAF reports so that I can generate relevant user stories automatically.",
      story_points: 5,
      sustainability_points: 4,
      acceptance_criteria: "The tool successfully extracts user story components (title, description, acceptance criteria) from a SusAF report.",
      sustainability_criteria: "The extracted user stories incorporate at least one social sustainability metric, such as inclusivity indices or belonging impact scores."
    },
    {
      userstory_description: "As a Scrum Master, I want the tool to suggest acceptance criteria based on sustainability impact scores so that teams can ensure alignment with sustainability goals.",
      story_points: 3,
      sustainability_points: 5,
      acceptance_criteria: "The tool generates acceptance criteria based on the impact scores present in the SusAF report.",
      sustainability_criteria: "The generated acceptance criteria reference specific sustainability metrics such as energy consumption, inclusivity, or ethical AI principles."
    },
    {
      userstory_description: "As a developer, I want the tool to allow manual refinement of generated user stories so that I can tailor them to specific project needs.",
      story_points: 2,
      sustainability_points: 3,
      acceptance_criteria: "Users can edit and refine automatically generated user stories before adding them to the backlog.",
      sustainability_criteria: "Edited stories maintain sustainability-focused recommendations unless explicitly removed."
    },
    {
      userstory_description: "As a team lead, I want the tool to prioritize user stories based on social sustainability impact so that we can focus on high-impact items first.",
      story_points: 4,
      sustainability_points: 5,
      acceptance_criteria: "User stories are ranked in the backlog based on their calculated sustainability impact.",
      sustainability_criteria: "Prioritization considers inclusivity indices and belonging impact scores when ranking backlog items."
    },
    {
      userstory_description: "As a business analyst, I want the tool to generate a summary report of how sustainability considerations have been incorporated into the backlog so that stakeholders can evaluate the project's impact.",
      story_points: 3,
      sustainability_points: 4,
      acceptance_criteria: "The system generates a report summarizing the number of sustainability-related user stories and their impact.",
      sustainability_criteria: "The report includes at least one key sustainability metric from the SusAF framework."
    }
  ]
}