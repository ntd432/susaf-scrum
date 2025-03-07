"use client";

import { useState } from "react";
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
    
    function handleClick(listItem: number, workItem: any) {
        setSelectedWorkItem(workItem); 
        setIsModalOpen(true);
    }
    
    return ( 
        <>
            <ul>
                {data.map((workItem, key) => (
                <li key={key} onClick={() => handleClick(key+1, workItem)}>
                    <div className="flex items-center gap-4.5 px-7.5 py-3 outline-none hover:bg-gray-2 focus-visible:bg-gray-2 dark:hover:bg-dark-2 dark:focus-visible:bg-dark-2">
                        <div className="relative flex-grow">
                            <h3 className="font-medium text-dark dark:text-white">
                            {workItem.backlog_title}
                            </h3>
                            
                            <div className="flex flex-wrap items-center gap-2">
                            <span>
                                {workItem.backlog_description}
                            </span>
                            </div>
                        </div>
                    </div>
                </li>
                ))}
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