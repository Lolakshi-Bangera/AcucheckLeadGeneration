import React from "react";
import { IconType } from "react-icons";

type InputFieldProps = {
  label?: string;
  type?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: IconType;
  maxLength?: number;
};

export default function InputField({
  label,
  type = "text",
  name,
  required = false,
  placeholder,
  value = "",
  onChange,
  error,
  icon: Icon,
  maxLength,
}: InputFieldProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (name === "phone") {
      inputValue = inputValue.replace(/\D/g, ""); 
      if (inputValue.length > 10) inputValue = inputValue.slice(0, 10);
    }

    if (maxLength && inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength); 
    }

    onChange?.({
      ...e,
      target: { ...e.target, value: inputValue },
    });
  };

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <span className="absolute inset-y-0 left-3 flex items-center text-blue-500">
            <Icon size={16} />
          </span>
        )}

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleInputChange}
          maxLength={maxLength}
          className={`w-full rounded-md border ${
            error ? "border-red-500" : "border-[#D8DBFB]"
          } bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            Icon ? "pl-10" : ""
          }`}
        />
      </div>

      {error && <span className="text-xs text-red-600 mt-1">{error}</span>}
    </div>
  );
}
