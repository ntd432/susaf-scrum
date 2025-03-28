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
    backlog_title: string;
    backlog_description: string;
    priority: string;
    userstory_description: string;
    story_points: string;
    sustainability_point: string;
    acceptance_criteria: string;
    sustainability_criteria: string;
    status: BacklogItemStatus;
    type: BacklogItemType;
    due_date: Timestamp;
}

export interface User {
    id: string;
    name: string;
    role: string;
}

export enum BacklogItemStatus {
    Todo = "TODO",
    InProgress = "IN_PROGRESS",
    Done = "DONE",
    InReview = "IN_REVIEW"
}

export enum BacklogItemType {
    Task = "TASK",
    Bug = "BUG",
    Story = "STORY",
    Epic = "EPIC"
}

export enum BacklogItemPriority {
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}

export interface RetrospectiveChecklist{
    id: string,
    sprint: string,
    sprintGoals: false,
    userStoriesDefined: false,
    collaboration: false,
    blockers: "",
    cleanCode: false,
    technicalDebt: false,
    documentation: false,
    efficiency: false,
    cloudUsage: false,
    accessibility: false,
    agileCeremonies: false,
    slowdown: "",
    improvements: "",
    motivation: false,
    workLifeBalance: false,
    workEnvironment: "",
    reflection: "",
    actionPlan: "",
  }