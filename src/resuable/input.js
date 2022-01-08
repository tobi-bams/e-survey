import React from "react";

export default function Input({ label, onChange, type = "text", placeholder }) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-app-text font-medium text-base mb-1">
        {label}
      </label>
      <input
        type={"text"}
        placeholder={placeholder}
        className="py-4 pl-6 shadow rounded-3xl bg-white font-medium text-sm text-primary outline-none"
      />
    </div>
  );
}
