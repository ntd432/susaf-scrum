'use client';
import React from "react";
import { useState } from "react";
import { TaskProvider } from "@/context/TaskContext";
import { KanbanBoard } from "@/components/KanbanBoard/KanbanBoard";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import {generateSprintGoal} from "@/utils/api";


export default function SprintPage() {
  const [apiData, setApiData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateGoal = async () => {
    setIsLoading(true);
    const result = await generateSprintGoal()
    setApiData(result);
    setIsLoading(false);  
  };

  
  return (
    <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Sprint" />
        <button
        onClick={handleGenerateGoal}
        className="mb-4 rounded-lg bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
      >
        Generate Sustainability Sprint Goal
      </button>
      {isLoading && (
          <div className="flex justify-center mb-5.5">
            <div className="loader">Loading...</div>
          </div>
        )}

        {apiData && (
          <textarea
            className="w-full p-2 border rounded"
            rows={5}
            readOnly
            value={JSON.stringify(apiData, null, 2)}
          />
        )}
        <div className="m-5"></div>
        <TaskProvider>
            <div className="overflow-auto">
                <KanbanBoard />
            </div>
        </TaskProvider>
    </div>
  );
}
