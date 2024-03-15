import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import clsx from "clsx";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  type?: string;
  additionalInputClassNames?: string;
  additionalLabelClassNames?: string;
  errorText?: string;
  value: any;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  tooltipText?: string;
}

export function TextField({
  label,
  id,
  errorText,
  additionalInputClassNames,
  additionalLabelClassNames,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  tooltipText,
  ...rest
}: TextFieldProps) {
  const [isTooltip, setIsTooltip] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const inputDynamicClassNames = clsx(additionalInputClassNames, {
    "h-12 w-full border-[1px] rounded-md rounded-tr-none pl-3 pr-6 placeholder-gray-600 focus:border-2 focus:outline-none hover:border-gray-600 focus:border-primary border-gray-200":
      true,
  });

  const labelDynamicClassNames = clsx(
    additionalLabelClassNames,
    "absolute top-5 left-3 text-md flex items-center  h-[10px] hover:cursor-text",
    "transform transition-all group-focus-within:text-xs group-focus-within:-translate-y-[24px] group-focus-within:-translate-x-[4px] group-focus-within:py-0.5 group-focus-within:px-1 group-focus-within:bg-white group-focus-within:!text-primary group-focus-within:dark:bg-gray-900 group-focus-within:dark:text-white",
    {
      "-translate-y-[24px] bg-white px-1 text-xs -translate-x-[4px]": value,
    },
  );

  return (
    <div className="relative">
      {label && (
        <label htmlFor={name} className={labelDynamicClassNames}>
          {label}
        </label>
      )}
      <div
        className="group flex flex-col item-center"
        onMouseEnter={() => setIsTooltip(true)}
        onMouseLeave={() => setIsTooltip(false)}
      >
        <input
          type={type}
          className={inputDynamicClassNames}
          name={name}
          onChange={handleInputChange}
          value={value}
          id={name}
          placeholder={placeholder}
          {...rest}
        />

        {errorText && (
          <span className="text-typography-error break-normal hyphens-manual text-xs pt-1 w-full ml-1">
            {errorText}
          </span>
        )}
      </div>

      {tooltipText && isTooltip && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[72px] bg-gray-700 text-white text-[10px] rounded shadow-md z-10 text-center w-max px-2 py-1.5">
          {tooltipText}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-gray-700" />
        </div>
      )}
    </div>
  );
}
