import React from "react";

export default function Input({
  label,
  onChange,
  type = "text",
  placeholder,
  value,
  error = null,
}) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-app-text font-medium text-base mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="py-4 pl-6 shadow-md rounded bg-white font-medium text-sm text-primary outline-none border pr-4"
        onChange={(e) => onChange(e)}
        value={value}
      />
      {error && (
        <span className="text-red-500 text-sm bg-red-200 p-4 rounded my-1">
          {error}
        </span>
      )}
    </div>
  );
}
