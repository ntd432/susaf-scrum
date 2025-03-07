"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/FormElements/checkbox";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { RetrospectiveChecklist } from "@/lib/interfaces";
import {
  getRetrospectiveChecklists,
  createRetrospectiveChecklist,
  updateRetrospectiveChecklist,
} from "@/lib/retrospective_checklist_firestore"; // Import Firebase functions

export function SelfAssessmentChecklist() {
  const [formData, setFormData] = useState<RetrospectiveChecklist>({} as RetrospectiveChecklist);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firebase
  useEffect(() => {
    async function fetchData() {
      const checklists = await getRetrospectiveChecklists();
      if (checklists.length > 0) {
        console.log(checklists[0])
        setFormData(checklists[0]); // Use the first checklist (you can modify this logic)
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    console.log(`value: ${name}`);
    setFormData((prev) => ({
      ...prev!,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData) return;

    try {
      if (formData.id) {
        console.log(formData);
        await updateRetrospectiveChecklist(formData);
        alert("Checklist updated successfully!");
      } else {
        const newId = await createRetrospectiveChecklist(formData);
        setFormData((prev) => ({ ...prev!, id: newId }));
        alert("Checklist submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting checklist:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <ShowcaseSection title="Self-assessment checklist" className="!p-6.5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Sprint Execution & Teamwork */}
        <div className="flex flex-col gap-4 border-b border-gray-300 pb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Sprint Execution & Teamwork</h3>
          <Checkbox name="sprintGoals" label="Did we accomplish all sprint goals?" withIcon="check" checked={formData?.sprintGoals}  onChange={handleChange} />
          <Checkbox name="userStoriesDefined" label="Were user stories well-defined and estimated correctly?" withIcon="check" checked={formData?.userStoriesDefined} onChange={handleChange} />
          <Checkbox name="collaboration" label="Did we collaborate effectively as a team?" withIcon="check" checked={formData?.collaboration} onChange={handleChange} />
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Were there any major blockers, and how did we handle them?</label>
            <InputGroup label="" type="" name="blockers" placeholder="Type here" value={formData?.blockers} handleChange={handleChange} />            
          </div>   
        </div>

        {/* Technical Sustainability */}
        <div className="flex flex-col gap-4 border-b border-gray-300 pb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Technical Sustainability</h3>
          <Checkbox name="cleanCode" label="Did we follow best practices for clean and maintainable code?" withIcon="check" checked={formData?.cleanCode} onChange={handleChange} />
          <Checkbox name="technicalDebt" label="Did we create or resolve any technical debt?" withIcon="check" checked={formData?.technicalDebt} onChange={handleChange} />
          <Checkbox name="documentation" label="Did we document important decisions and processes properly?" withIcon="check" checked={formData?.documentation} onChange={handleChange} />
        </div>

        {/* Work Process & Continuous Improvement */}
        <div className="flex flex-col gap-4 border-b border-gray-300 pb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Work Process & Continuous Improvement</h3>
          <Checkbox name="agileCeremonies" label="Did we use Agile ceremonies effectively?" withIcon="check" checked={formData?.agileCeremonies} onChange={handleChange} />
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">What slowed us down the most?</label>
            <InputGroup label="" type="" name="slowdown" placeholder="Type here" value={formData?.slowdown} handleChange={handleChange} />
          </div>          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">What should we do differently in the next sprint?</label>
            <InputGroup label="" type="" name="improvements" placeholder="Type here" value={formData?.improvements} handleChange={handleChange} />
          </div>
          
        </div>

        {/* Team Well-being & Work Culture */}
        <div className="flex flex-col gap-4 border-b border-gray-300 pb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Team Well-being & Work Culture</h3>
          <Checkbox name="motivation" label="Did we feel motivated and engaged throughout the sprint?" withIcon="check" checked={formData?.motivation} onChange={handleChange} />
          <Checkbox name="workLifeBalance" label="Did we respect work-life balance?" withIcon="check" checked={formData?.workLifeBalance} onChange={handleChange} />
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">How can we improve our working environment?</label>
            <InputGroup label="" type="" name="workEnvironment" placeholder="Type here" value={formData?.workEnvironment} handleChange={handleChange} />
          </div>   
        </div>

        {/* Final Reflection */}
        <div className="flex flex-col gap-4 border-b border-gray-300 pb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Final Reflection</h3>
          <TextAreaGroup name="reflection" label='' placeholder="Type your thoughts" value={formData?.reflection} onChange={handleChange} />
        </div>

        {/* Action Plan */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Action Plan for Next Sprint</h3>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Identify key action items for improvement:</p>
          <ul className="list-disc pl-5 text-sm font-medium text-gray-700 dark:text-gray-300">
            <li>Identify 3 key action items for improvement.</li>
            <li>Assign ownership to team members for specific improvements.</li>
            <li>Set measurable goals to track progress in the next sprint.</li>
          </ul>
          <TextAreaGroup name = "actionPlan" label="" placeholder="Type your action plan" value={formData?.actionPlan} onChange={handleChange} />

        {/* Submit Button */}
        <button type="submit" className="mt-6 w-full rounded-lg bg-primary py-3 font-medium text-white hover:bg-opacity-90 transition">
          {formData?.id ? "Update Checklist" : "Submit Checklist"}
        </button>
      </form>
    </ShowcaseSection>
  );
}
