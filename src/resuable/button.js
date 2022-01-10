import React from "react";

export default function Button({ text, click, loading }) {
  return (
    <button
      className={`${
        loading ? "button" : ""
      }  bg-primary text-white rounded-3xl font-medium text-lg w-full py-4 relative `}
      onClick={click}
    >
      <span
        className={`${
          loading ? "invisible opacity-0" : ""
        } transition-all duration-75`}
      >
        {text}
      </span>
    </button>
  );
}
