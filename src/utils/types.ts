export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    assignees: string[];
    priority: "Low" | "Normal" | "High";
    subtasks: { id: string; title: string; completed: boolean }[];
    attachments: string[];
    status: "To Do" | "In Progress" | "In Review" | "Complete";
  }
  
  export interface Column {
    id: string;
    title: string;
    tasks: Task[];
  }