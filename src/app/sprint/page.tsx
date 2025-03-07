import React from "react";
import { TaskProvider } from "@/context/TaskContext";
import { KanbanBoard } from "@/components/KanbanBoard/KanbanBoard";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function SprintPage() {
  return (
    <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Sprint" />
        <TaskProvider>
            <div className="overflow-auto">
                <KanbanBoard />
            </div>
        </TaskProvider>
    </div>
  );
}
