// "use client";

import React, { createContext, useState, ReactNode } from "react";
import { Task, Column } from "@/utils/types";
import { getBacklogItems, updateBacklogItemStatus } from "@/lib/backlog_item_firestore";
import { BacklogItemStatus } from "@/lib/interfaces";

interface TaskContextType {
  columns: Column[];
  addTask: (columnId: string, task: Task) => void;
  editTask: (taskId: string, updatedTask: Task) => void;
  deleteTask: (taskId: string) => void;
  moveTask: (taskId: string, sourceColumnId: string, destinationColumnId: string) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);
const data: any = await getBacklogItems();
console.log(data);

const toDoTasks: Task[] = data
.filter((task: any) => task.status === BacklogItemStatus.Todo) 
    .map((task: any) => ({
        id: task.id,
        title: task.backlog_title,
        description: task.userstory_description,
        dueDate: new Date(task.due_date.seconds * 1000).toISOString(),
        assignees: [],
        priority: task.priority === "Low" ? "Low" : task.priority === "High" ? "High" : "Normal",
        subtasks: [],
        attachments: [],
        status: task.status
    }));

const progressTasks: Task[] = data
.filter((task: any) => task.status === BacklogItemStatus.InProgress) 
    .map((task: any) => ({
        id: task.id,
        title: task.backlog_title,
        description: task.userstory_description,
        dueDate: new Date(task.due_date.seconds * 1000).toISOString(),
        assignees: [],
        priority: task.priority === "Low" ? "Low" : task.priority === "High" ? "High" : "Normal",
        subtasks: [],
        attachments: [],
        status: task.status
    }));

const reviewTasks: Task[] = data
.filter((task: any) => task.status === BacklogItemStatus.InReview) 
    .map((task: any) => ({
        id: task.id,
        title: task.backlog_title,
        description: task.userstory_description,
        dueDate: new Date(task.due_date.seconds * 1000).toISOString(),
        assignees: [],
        priority: task.priority === "Low" ? "Low" : task.priority === "High" ? "High" : "Normal",
        subtasks: [],
        attachments: [],
        status: task.status
    }));

const doneTasks: Task[] = data
.filter((task: any) => task.status === BacklogItemStatus.Done) 
    .map((task: any) => ({
        id: task.id,
        title: task.backlog_title,
        description: task.userstory_description,
        dueDate: new Date(task.due_date.seconds * 1000).toISOString(),
        assignees: [],
        priority: task.priority === "Low" ? "Low" : task.priority === "High" ? "High" : "Normal",
        subtasks: [],
        attachments: [],
        status: task.status
    }));

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [columns, setColumns] = useState<Column[]>([
    { id: "1", title: "To Do", tasks: toDoTasks },
    { id: "2", title: "In Progress", tasks: progressTasks },
    { id: "3", title: "In Review", tasks: reviewTasks },
    { id: "4", title: "Completed", tasks: doneTasks },
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
          if (destinationColumn.title === "To Do")
            task.status = BacklogItemStatus.Todo;
          else if (destinationColumn.title === "In Progress")
            task.status = BacklogItemStatus.InProgress;
          else if (destinationColumn.title === "In Review")
            task.status = BacklogItemStatus.InReview;
          else task.status = BacklogItemStatus.Done;

          updateBacklogItemStatus(task.id, task.status);
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