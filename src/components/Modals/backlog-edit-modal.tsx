"use client";

import { useState } from "react";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { updateBacklogItem, deleteBacklogItem } from "@/lib/backlog_item_firestore";
import { BacklogItem } from "@/lib/interfaces";

type BacklogEditModalProps = {
    workItem: BacklogItem;
    onClose: () => void;
    // onUpdate: () => void;
};

export function BacklogEditModal({ workItem, onClose }: BacklogEditModalProps) {
    const [formData, setFormData] = useState({ ...workItem });
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSaving(true);
        try {
            await updateBacklogItem(formData);
            console.log("Updated Work Item:", formData);
            // onUpdate();
            onClose();
        } catch (error) {
            console.error("Error updating backlog item:", error);
        } finally {
            setSaving(false);
        }
    }

    async function handleDelete() {
        if (!formData.id) return;
        setDeleting(true);
        try {
            await deleteBacklogItem(formData.id);
            console.log("Deleted Backlog Item:", formData.id);
            // onUpdate()
            onClose();
        } catch (error) {
            console.error("Error deleting backlog item:", error);
        } finally {
            setDeleting(false);
        }
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
                        name="backlog_description"
                        placeholder="Enter description"
                        defaultValue={formData.backlog_description || ""}
                        onChange={handleChange}
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
                        <button type="button" className="bg-gray-300 px-4 py-2 rounded" onClick={onClose} disabled={saving || deleting}>
                            Close
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={saving || deleting}>
                            {saving ? "Saving..." : "Save"}
                        </button>
                        <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDelete} disabled={saving || deleting}>
                            {deleting ? "Deleting..." : "Delete"}
                        </button>
                        <button type="button" className="bg-green-500 text-white px-4 py-2 rounded" disabled={saving || deleting}>
                            Add to Sprint
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
