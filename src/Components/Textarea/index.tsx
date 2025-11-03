import React from "react";
import { IconType } from "react-icons";

type TextAreaProps = {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  icon?: IconType; // <-- New icon prop
};

export function TextArea({
  label,
  name,
  required = false,
  placeholder,
  rows = 4,
  value,
  onChange,
  error,
  icon: Icon, // <-- Accept icon prop
}: TextAreaProps) {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        {Icon && (
          <span className="absolute top-3 left-3 flex items-center text-blue-500">
            <Icon size={16} />
          </span>
        )}
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={rows}
          value={value || ""}
          onChange={onChange}
          className={`w-full rounded-md border ${
            error ? "border-red-500" : "border-[#D8DBFB]"
          } bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
            Icon ? "pl-10" : ""
          }`}
        />
      </div>

      {error && (
        <span className="text-xs text-red-600 mt-1">{error}</span>
      )}
    </div>
  );
}
