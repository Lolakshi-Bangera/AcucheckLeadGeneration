"use client";
import React from "react";

type DateTimePickerProps = {
  label?: string;
  dateLabel?: string;
  timeLabel?: string;
  dateValue?: string;
  timeValue?: string;
  onDateChange?: (value: string) => void;
  onTimeChange?: (value: string) => void;
  required?: boolean;
  className?: string;
  dateIcon?: React.ReactNode;
  timeIcon?: React.ReactNode;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  label,
  dateLabel = "Select Date",
  timeLabel = "Select Time",
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
  required = false,
  className = "",
  dateIcon,
  timeIcon,
}) => {
  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      {label && (
        <label className="text-gray-800 font-semibold text-sm">{label}</label>
      )}

      <div className="flex flex-col md:flex-row gap-4">
        {/* Date Input */}
        <div className="flex flex-col w-full">
          <label className="text-gray-600 text-xs mb-1">{dateLabel}</label>
          <div className="relative flex items-center">
            {dateIcon && (
              <span className="absolute left-3 text-gray-500 ">{dateIcon}</span>
            )}
            <input
              type="date"
              required={required}
              value={dateValue}
              onChange={(e) => onDateChange?.(e.target.value)}
              className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 ${
                dateIcon ? "pl-10 cursor-pointer" : ""
              }`}
            />
          </div>
        </div>

        {/* Time Input */}
        <div className="flex flex-col w-full">
          <label className="text-gray-600 text-xs mb-1">{timeLabel}</label>
          <div className="relative flex items-center">
            {timeIcon && (
              <span className="absolute left-3 text-gray-500">{timeIcon}</span>
            )}
            <input
              type="time"
              required={required}
              value={timeValue}
              onChange={(e) => onTimeChange?.(e.target.value)}
              className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 ${
                timeIcon ? "pl-10" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;
