import { cn } from "@/lib/utils";
import { useId } from "react";

interface PropsType {
  label: string;
  name?: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  active?: boolean;
  className?: string;
  icon?: React.ReactNode;
  defaultValue?: string;
  value?: string;  // Controlled input
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Function to handle changes
}

export function TextAreaGroup({
  label,
  name,
  placeholder,
  required,
  disabled,
  active,
  className,
  icon,
  defaultValue,
  value,
  onChange,
}: PropsType) {
  const id = useId();

  return (
    <div className={cn(className)}>
    <label
      htmlFor={id}
      className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
    >
      {label}
    </label>
    <div className="relative mt-3">
    <textarea
      id={id}
      name={name} 
      rows={6}
      placeholder={placeholder}
      value={value} 
      defaultValue={defaultValue}
      onChange={onChange} 
      className={cn(
        "w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary dark:disabled:bg-dark",
        icon && "py-5 pl-13 pr-5",
      )}
      required={required}
      disabled={disabled}
      data-active={active}
    />
      {icon}
    </div>
  </div>
  )
}
