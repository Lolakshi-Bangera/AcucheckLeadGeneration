import React from "react";
import { IconType } from "react-icons";
import { RiArrowDropDownFill } from "react-icons/ri";

type DropdownProps = {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  icon?: IconType;
};

export function Dropdown({
  label,
  name,
  options,
  required = false,
  placeholder = "Select an option",
  value,
  onChange,
  error,
  icon: Icon,
}: DropdownProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Label */}
      <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      {/* Wrapper */}
      <div className="relative">
        {/* Left Icon */}
        {Icon && (
          <span className="absolute inset-y-0 left-3 flex items-center text-blue-500 pointer-events-none">
            {/* 👆 Added pointer-events-none to prevent click-blocking */}
            <Icon size={16} />
          </span>
        )}

        {/* Select Field */}
        <select
          id={name}
          name={name}
          required={required}
          value={value || ""}
          onChange={onChange}
          className={`appearance-none w-full rounded-md border ${
            error ? "border-red-500" : "border-[#D8DBFB]"
          } bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            Icon ? "pl-10 pr-8" : "px-3 pr-8"
          } py-2`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom Dropdown Arrow */}
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-600">
          <RiArrowDropDownFill size={26} />
        </span>
      </div>

      {/* Error Message */}
      {error && <span className="text-xs text-red-600 mt-1">{error}</span>}
    </div>
  );
}
