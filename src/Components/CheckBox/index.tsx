type CheckboxOption = {
  label: string;
  value: string;
};

type CheckboxGroupProps = {
  label: string;
  name: string;
  options: CheckboxOption[];
  required?: boolean;
  value?: string[]; 
  onChange?: (selected: string[]) => void;
  error?: string; 
};

export function CheckboxGroup({
  label,
  name,
  options,
  required = false,
  value = [],
  onChange,
  error, 
}: CheckboxGroupProps) {
  const handleCheckboxChange = (checked: boolean, val: string) => {
    let updated = [...value];
    if (checked) {
      updated.push(val);
    } else {
      updated = updated.filter((v) => v !== val);
    }
    onChange?.(updated);
  };

  return (
    <div className="flex flex-col w-full">
      <span className="text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </span>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={name}
              value={opt.value}
              checked={value.includes(opt.value)}
              onChange={(e) =>
                handleCheckboxChange(e.target.checked, opt.value)
              }
              className={`h-4 w-4 shrink-0 text-blue-500 border-gray-300 rounded focus:ring-blue-400 ${
                error ? "border-red-500" : ""
              }`}
            />
            <span className="text-sm text-gray-700 leading-normal flex-1">
              {opt.label}
            </span>
          </label>
        ))}
      </div>
      {error && <span className="text-xs text-red-600 mt-1">{error}</span>}
    </div>
  );
}
