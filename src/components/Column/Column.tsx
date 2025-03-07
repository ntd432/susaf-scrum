import React from "react";
import { TaskCard } from "@/components/TaskCard/TaskCard";
import { Task } from "@/utils/types";

interface ColumnProps {
  column: {
    id: string;
    title: string;
    tasks: Task[];
  };
  onAddTask: () => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onDragStart: (e: React.DragEvent, taskId: string, columnId: string) => void;
}

export function Column({ column, onAddTask, onEditTask, onDeleteTask, onDragStart }: ColumnProps) {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-600 dark:shadow-card p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">{column.title}</h2>
        <button
          onClick={onAddTask}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          +
        </button>
      </div>
      {column.tasks.map((task) => (
        <div
          key={task.id}
          draggable
          onDragStart={(e) => onDragStart(e, task.id, column.id)}
          className="mb-4"
        >
          <TaskCard
            task={task}
            onEdit={() => onEditTask(task)}
            onDelete={() => onDeleteTask(task.id)}
          />
        </div>
      ))}
    </div>
  );
}