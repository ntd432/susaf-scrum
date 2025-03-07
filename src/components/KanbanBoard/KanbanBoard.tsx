 "use client";

import React, { useContext, useState } from "react";
import { TaskContext } from "@/context/TaskContext";
import { Column } from "@/components/Column/Column";
import { AddTaskModal } from "../TaskCard/AddTaskModal";
import { EditTaskModal } from "../TaskCard/EditTaskModal";
import { Task } from "@/utils/types";

export function KanbanBoard() {
  const { columns, addTask, editTask, deleteTask, moveTask } = useContext(TaskContext)!;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [targetColumnId, setTargetColumnId] = useState<string>("");

  // Handle drag start
  const handleDragStart = (e: React.DragEvent, taskId: string, columnId: string) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("columnId", columnId);
  };

  // Handle drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allow dropping
  };

  // Handle drop
  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const sourceColumnId = e.dataTransfer.getData("columnId");

    if (sourceColumnId !== targetColumnId) {
      moveTask(taskId, sourceColumnId, targetColumnId);
    }
  };

  const handleAddTaskClick = (columnId: string) => {
    setTargetColumnId(columnId);
    setIsAddModalOpen(true);
  };

  return (
    <div className="flex gap-2 p-0">
      {columns.map((column) => (
        <div
          key={column.id}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, column.id)}
          className="w-72 bg-gray-50 dark:bg-gray-600 dark:shadow-card p-4 rounded-lg"
        >
          <Column
            column={column}
            onAddTask={() => handleAddTaskClick(column.id)}
            onEditTask={(task) => setEditingTask(task)}
            onDeleteTask={(taskId) => {
              const confirmDelete = window.confirm("Are you sure you want to delete this task?");
              if (confirmDelete) {
                deleteTask(taskId);
              }
            }}
            onDragStart={handleDragStart}
          />
        </div>
      ))}
      <AddTaskModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddTask={(task) => addTask(targetColumnId, task)}
      />
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          isOpen={!!editingTask}
          onClose={() => setEditingTask(null)}
          onSave={editTask}
        />
      )}
    </div>
  );
}