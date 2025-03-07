// // src/components/EditTaskModal/EditTaskModal.tsx
// "use client";

// // src/components/EditTaskModal/EditTaskModal.tsx
// import React, { useState } from "react";
// import { Task } from "@/utils/types";

// interface EditTaskModalProps {
//   task: Task;
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (taskId: string, updatedTask: Task) => void; // Updated signature
// }

// export function EditTaskModal({ task, isOpen, onClose, onSave }: EditTaskModalProps) {
//   const [title, setTitle] = useState(task.title);
//   const [description, setDescription] = useState(task.description);
//   const [dueDate, setDueDate] = useState(task.dueDate);
//   const [priority, setPriority] = useState<"Low" | "Normal" | "High">(task.priority);
//   const [assignees, setAssignees] = useState<string[]>(task.assignees);
//   const [newAssignee, setNewAssignee] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const updatedTask: Task = {
//       ...task,
//       title,
//       description,
//       dueDate,
//       priority,
//       assignees,
//     };
//     onSave(task.id, updatedTask); // Pass both taskId and updatedTask
//     onClose();
//   };

//   const handleAddAssignee = () => {
//     if (newAssignee.trim()) {
//       setAssignees([...assignees, newAssignee.trim()]);
//       setNewAssignee("");
//     }
//   };

//   const handleRemoveAssignee = (index: number) => {
//     setAssignees(assignees.filter((_, i) => i !== index));
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//       <div className="bg-white dark:bg-gray-dark dark:shadow-card p-6 rounded-lg w-full max-w-md">
//         <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />
//           <textarea
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />
//           <input
//             type="date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />
//           <div className="mb-2">
//             <label className="block text-sm font-medium mb-1">Priority</label>
//             <select
//               value={priority}
//               onChange={(e) => setPriority(e.target.value as "Low" | "Normal" | "High")}
//               className="w-full p-2 border rounded"
//             >
//               <option value="Low">Low</option>
//               <option value="Normal">Normal</option>
//               <option value="High">High</option>
//             </select>
//           </div>
//           <div className="mb-2">
//             <label className="block text-sm font-medium mb-1">Assignees</label>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 placeholder="Add assignee"
//                 value={newAssignee}
//                 onChange={(e) => setNewAssignee(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//               <button
//                 type="button"
//                 onClick={handleAddAssignee}
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Add
//               </button>
//             </div>
//             <div className="mt-2 flex flex-wrap gap-2">
//               {assignees.map((assignee, index) => (
//                 <span
//                   key={index}
//                   className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1"
//                 >
//                   {assignee}
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveAssignee(index)}
//                     className="text-xs hover:text-red-300"
//                   >
//                     ×
//                   </button>
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-end gap-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// src/components/EditTaskModal/EditTaskModal.tsx
import React, { useState } from "react";
import { Task } from "@/utils/types";
import { Modal } from "@/components/Modal/Modal";

// interface EditTaskModalProps {
//   task: Task;
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (taskId: string, updatedTask: Task) => void;
//   setCheckbox1: () => void;
//   setCheckbox2: () => void;
// }

export function EditTaskModal({ task, isOpen, onClose, onSave, setCheckbox1, setCheckbox2, checkbox1, checkbox2 }: any) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [priority, setPriority] = useState<"Low" | "Normal" | "High">(task.priority);
  const [assignees, setAssignees] = useState<string[]>(task.assignees);
  const [newAssignee, setNewAssignee] = useState("");
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedTask: Task = {
      ...task,
      title,
      description,
      dueDate,
      priority,
      assignees,
    };
    onSave(task.id, updatedTask);
    onClose();
  };

  const handleAddAssignee = () => {
    if (newAssignee.trim()) {
      setAssignees([...assignees, newAssignee.trim()]);
      setNewAssignee("");
    }
  };

  const handleRemoveAssignee = (index: number) => {
    setAssignees(assignees.filter((_, i) => i !== index));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Task">
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
              <span
                key={index}
                className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1"
              >
                {assignee}
                <button
                  type="button"
                  onClick={() => handleRemoveAssignee(index)}
                  className="text-xs hover:text-red-300"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="mt-2">
            <label className="block text-sm font-medium mb-1">Criteria</label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="checkbox1"
                  checked={checkbox1}
                  onChange={(e) => setCheckbox1(e.target.checked)}
                  className="h-4 w-4"
                />
                <label htmlFor="checkbox1" className="text-sm">Acceptance Criteria</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="checkbox2"
                  checked={checkbox2}
                  onChange={(e) => setCheckbox2(e.target.checked)}
                  className="h-4 w-4"
                />
                <label htmlFor="checkbox2" className="text-sm">Sustainability Criteria</label>
              </div>
            </div>
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
            Save Changes
          </button>
        </div>
      </form>
    </Modal>
  );
}