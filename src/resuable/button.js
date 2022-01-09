import React from "react";

export default function Button({ text, click }) {
  return (
    <button
      className="bg-primary text-white rounded-3xl font-medium text-lg w-full py-4"
      onClick={click}
    >
      {text}
    </button>
  );
}
