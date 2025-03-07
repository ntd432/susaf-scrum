"use client";

import { useState } from "react";
import { LeafIcon } from "@/assets/icons";
import { BacklogEditModal } from "@/components/Modals/backlog-edit-modal";

type PropsType = {
    data : [
        {
            backlog_title?: string;
            backlog_description?: string;
            priority?: string;
        }
    ]
}


export function ProductBacklogTable({ data }: PropsType) {
    const [selectedWorkItem, setSelectedWorkItem] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    
    function handleClick(listItem: number, workItem: any) {
        setSelectedWorkItem(workItem); 
        setIsModalOpen(true);
    }
    
    function toggleHighlight(index: number) {
        setSelectedItems((prev) =>
            prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
        );
    }

    return ( 
        <>
            <ul>
                {data.map((workItem, key) => {
                    const isSelected = selectedItems.includes(key);
                    return (
                        <li
                            key={key}
                            className={`cursor-pointer transition-colors ${
                                isSelected ? "bg-green-100 hover:bg-green-200 dark:bg-green-700 dark:hover:bg-green-600" : 
                                "hover:bg-gray-200 dark:hover:bg-dark-2"
                            }`}
                            onClick={() => handleClick(key, workItem)}
                        >
                            <div className="flex items-center justify-between gap-4 px-7.5 py-3">
                                <div>
                                    <h3 className="font-medium text-dark dark:text-white">
                                        {workItem.backlog_title}
                                    </h3>
                                    <span>{workItem.backlog_description}</span>
                                </div>

                                {/* Leaf icon to toggle sustainability highlight */}
                                <button
                                    className="p-1 transition-transform hover:scale-110"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleHighlight(key);
                                    }}
                                >
                                    <LeafIcon
                                        width="20"
                                        height="20"
                                        className={`transition-colors ${
                                            isSelected ? "text-green-700 dark:text-green-300" : "text-gray-500 hover:text-green-500"
                                        }`}
                                    />
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {/* Render modal only when an item is clicked */}
            {isModalOpen && (
                <BacklogEditModal 
                    workItem={selectedWorkItem} 
                    onClose={() => setIsModalOpen(false)} 
                />
            )}
        </>
    );
}