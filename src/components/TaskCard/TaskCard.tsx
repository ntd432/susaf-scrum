import React from "react";
import { Task } from "@/utils/types";
import { PencilSquareIcon, TrashIcon } from "@/assets/icons";

interface TaskCardProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}

export function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  return (
    <div className="bg-white dark:bg-gray-dark dark:shadow-card p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <span className={`text-sm font-semibold ${task.priority === "High" ? "text-red-500" : task.priority === "Normal" ? "text-yellow-500" : "text-green-500"}`}>
          {task.priority}
        </span>
        <div className="mt-2 flex gap-2">
            <button 
                onClick={onEdit} 
                className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center"
            >
                <PencilSquareIcon className="w-3 h-3" />
            </button>
            <button 
                onClick={onDelete} 
                className="p-1 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center"
            >
                <TrashIcon className="w-3 h-3" />
            </button>
       </div>
      </div>
      <h3 className="font-semibold text-lg">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <div className="mt-2">
        <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
        {/* <span className="ml-2 text-sm text-gray-500">Subtasks: {task.subtasks.filter((st) => st.completed).length}/{task.subtasks.length}</span> */}
      </div>
      <div className="mt-2 flex gap-2">
        {task.assignees.map((assignee, index) => (
          <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
            {assignee}
          </span>
        ))}
        <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
          +
        </button>
      </div>
    </div>
  );
}