"use client";

import { BacklogModal } from "@/app/forms/form-layout/_components/backlog-modal";
import { useState } from "react";

export function BacklogModalWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const exampleBacklogItem = {
    title: "Optimize Energy Usage",
    description: "Reduce server energy consumption by 10%.",
    status: "To Do",
    priority: "High",
    acceptanceCriteria: "Server energy usage must decrease by 10%.",
    sustainabilityCriteria: "Reduce carbon footprint by 5 tons.",
  };

  return (
    <>
      {/* Button to open the modal */}
      <button
        className="rounded-lg bg-primary px-6 py-2 text-white hover:bg-opacity-90"
        onClick={() => setIsModalOpen(true)}
      >
        Open Backlog Modal
      </button>

      {/* Backlog Modal */}
      <BacklogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        backlogItem={exampleBacklogItem} 
      />
    </>
  );
}