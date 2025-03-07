"use client";

import { useState } from "react";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";

type BacklogEditModalProps = {
    workItem: {
        backlog_title?: string;
        backlog_description?: string;
        priority?: string;
    };
    onClose: () => void;
};

export function BacklogEditModal({ workItem, onClose }: BacklogEditModalProps) {
    const [formData, setFormData] = useState({ ...workItem });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Updated Work Item:", formData);
        onClose();
    }

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-0 flex justify-center items-center">
            <div className="fixed bg-white dark:bg-dark-2 p-6 rounded-lg shadow-lg w-150">
                <h2 className="text-xl font-semibold mb-4">Edit Backlog Item</h2>
                <form onSubmit={handleSubmit}>
                    <InputGroup
                        label="Title"
                        name="backlog_title"
                        type="text"
                        placeholder="Enter title"
                        value={formData.backlog_title || ""}
                        handleChange={handleChange}
                    />
                    <TextAreaGroup
                        label="Description"
                        placeholder="Enter description"
                        defaultValue={formData.backlog_description || ""}
                    />
                    <InputGroup
                        label="Priority"
                        name="priority"
                        type="text"
                        placeholder="Enter priority"
                        value={formData.priority || ""}
                        handleChange={handleChange}
                    />

                    <div className="flex justify-end gap-3 mt-4">
                        <button type="button" className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Save
                        </button>
                        <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">
                            Delete
                        </button>
                        <button type="button" className="bg-green-500 text-white px-4 py-2 rounded">
                            Add to Sprint
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
