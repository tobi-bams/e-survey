import React from "react";
import Radio from "../assets/radio.svg";
import Check from "../assets/check.svg";

export default function Option({ checked, text, click }) {
  return (
    <div
      className="flex items-center mt-3 cursor-pointer min-w-min"
      onClick={click}
    >
      <div className="flex items-center justify-center relative w-6 h-6 mr-4">
        <img src={Radio} alt="Radio Icon" />
        {checked ? (
          <img src={Check} className="absolute" alt="Check Icon" />
        ) : (
          ""
        )}
      </div>
      <p className="text-primary text-lg">{text}</p>
    </div>
  );
}
