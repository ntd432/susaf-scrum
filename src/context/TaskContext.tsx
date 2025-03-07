"use client";

import React, { createContext, useState, ReactNode } from "react";
import { Task, Column } from "@/utils/types";

interface TaskContextType {
  columns: Column[];
  addTask: (columnId: string, task: Task) => void;
  editTask: (taskId: string, updatedTask: Task) => void;
  deleteTask: (taskId: string) => void;
  moveTask: (taskId: string, sourceColumnId: string, destinationColumnId: string) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [columns, setColumns] = useState<Column[]>([
    { id: "1", title: "To Do", tasks: [] },
    { id: "2", title: "On Progress", tasks: [] },
    { id: "3", title: "Need Review", tasks: [] },
    { id: "4", title: "Complete", tasks: [] },
  ]);

  const addTask = (columnId: string, task: Task) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId ? { ...column, tasks: [...column.tasks, task] } : column
      )
    );
  };

  const editTask = (taskId: string, updatedTask: Task) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => ({
        ...column,
        tasks: column.tasks.map((task) => (task.id === taskId ? updatedTask : task)),
      }))
    );
  };

  const deleteTask = (taskId: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => ({
        ...column,
        tasks: column.tasks.filter((task) => task.id !== taskId),
      }))
    );
  };

  const moveTask = (taskId: string, sourceColumnId: string, destinationColumnId: string) => {
    setColumns((prevColumns) => {
      const sourceColumn = prevColumns.find((col) => col.id === sourceColumnId);
      const destinationColumn = prevColumns.find((col) => col.id === destinationColumnId);
      if (!sourceColumn || !destinationColumn) return prevColumns;

      const task = sourceColumn.tasks.find((t) => t.id === taskId);
      if (!task) return prevColumns;

      return prevColumns.map((col) => {
        if (col.id === sourceColumnId) {
          return { ...col, tasks: col.tasks.filter((t) => t.id !== taskId) };
        }
        if (col.id === destinationColumnId) {
          return { ...col, tasks: [...col.tasks, task] };
        }
        return col;
      });
    });
  };

  return (
    <TaskContext.Provider value={{ columns, addTask, editTask, deleteTask, moveTask }}>
      {children}
    </TaskContext.Provider>
  );
};