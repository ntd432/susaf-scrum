import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

interface BacklogItem {
  title: string;
  description: string;
  status: string;
  priority: string;
  acceptanceCriteria: string;
  sustainabilityCriteria: string;
}

interface BacklogModalProps {
  isOpen: boolean;
  onClose: () => void;
  backlogItem?: BacklogItem;
  onSubmit?: (data: any) => void; 
}

export function BacklogModal({ isOpen, onClose, backlogItem, onSubmit }: BacklogModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit?.(data);
    onClose(); 
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg rounded-lg bg-white shadow-lg overflow-hidden">
            <div className="max-h-[80vh] overflow-y-auto"> {/* Make content scrollable */}
              <ShowcaseSection title={backlogItem ? "Edit Backlog Item" : "Add Backlog Item"}>
                <form onSubmit={handleSubmit}>
                  {/* Title */}
                  <InputGroup
                    className="mb-4"
                    type="text"
                    name="title"
                    label="Title"
                    placeholder="Enter backlog item title"
                    defaultValue={backlogItem?.title || ""}
                  />

                  {/* Description */}
                  <TextAreaGroup
                    className="mb-4"
                    label="Description"
                    placeholder="Describe the task..."
                    defaultValue={backlogItem?.description || ""}
                  />

                  {/* Status */}
                  <InputGroup
                    className="mb-4"
                    type="text"
                    name="status"
                    label="Status"
                    placeholder="To Do / In Progress / Done"
                    defaultValue={backlogItem?.status || ""}
                  />

                  {/* Priority */}
                  <InputGroup
                    className="mb-4"
                    type="text"
                    name="priority"
                    label="Priority"
                    placeholder="Low / Medium / High"
                    defaultValue={backlogItem?.priority || ""}
                  />

                  {/* Acceptance Criteria */}
                  <TextAreaGroup
                    className="mb-4"
                    label="Acceptance Criteria"
                    placeholder="Define the acceptance criteria..."
                    defaultValue={backlogItem?.acceptanceCriteria || ""}
                  />

                  {/* Sustainability Criteria */}
                  <TextAreaGroup
                    className="mb-4"
                    label="Sustainability Criteria"
                    placeholder="Define sustainability goals..."
                    defaultValue={backlogItem?.sustainabilityCriteria || ""}
                  />

                  {/* Buttons */}
                  <div className="flex justify-end gap-3 p-4 bg-gray-50 sticky bottom-0">
                    <button
                      className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-100"
                      type="button"
                      onClick={onClose}
                    >
                      Cancel
                    </button>

                    <button
                      className="rounded-lg bg-primary px-6 py-2 text-white hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </ShowcaseSection>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}