import React, { useState, useEffect } from "react";
import { Task } from "@/utils/types";
import { Modal } from "@/components/Modal/Modal";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: Task) => void;
}

export function AddTaskModal({ isOpen, onClose, onAddTask }: AddTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<"Low" | "Normal" | "High">("Low");
  const [assignees, setAssignees] = useState<string[]>([]);
  const [newAssignee, setNewAssignee] = useState("");

  // Reset the form when the modal is opened
  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Low");
      setAssignees([]);
      setNewAssignee("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Math.random().toString(36).substring(7),
      title,
      description,
      dueDate,
      assignees,
      priority,
      subtasks: [],
      attachments: [],
      status: "To Do", // Default status for new tasks
    };
    onAddTask(newTask);
    onClose();
  };

  const handleAddAssignee = () => {
    if (newAssignee.trim()) {
      setAssignees([...assignees, newAssignee.trim()]);
      setNewAssignee("");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Task">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as "Low" | "Normal" | "High")}
            className="w-full p-2 border rounded"
          >
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Assignees</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add assignee"
              value={newAssignee}
              onChange={(e) => setNewAssignee(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={handleAddAssignee}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {assignees.map((assignee, index) => (
              <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                {assignee}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Task
          </button>
        </div>
      </form>
    </Modal>
  );
}