import { Timestamp } from "firebase/firestore";

export interface Project {
    id: string;
  name: string;
  sprints: Array<string>;
}

export interface Sprint {
    id: string;
    order: number;
    backlog_item_id: Array<string>;
    start_date: Timestamp;
    end_date: Timestamp;
}

export interface BacklogItem {
    id: string;
    definition_of_done: string;
    description: string;
    evaluation: string;
    priority: string;
    status: string;
    sustainability_point: number;
    sustainability_satisfied: boolean;
    sustainability_tag: Array<string>;
    title: string;
    type: string;
    order: number;
    due_date: Timestamp;
    assignee: string;
}

export interface User {
    id: string;
    name: string;
    role: string;
}