import { BacklogItemStatus, BacklogItemPriority } from "@/lib/interfaces";
export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    assignees: string[];
    priority: "Low" | "Normal" | "High";
    subtasks: { id: string; title: string; completed: boolean }[];
    attachments: string[];
    status: BacklogItemStatus;
  }
  
  export interface Column {
    id: string;
    title: string;
    tasks: Task[];
  }