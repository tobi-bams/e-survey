import React from "react";
import Radio from "../assets/radio.svg";

export default function OfficerOption({ text, vote }) {
  return (
    <div className="flex items-center  justify-between mt-3">
      <div className="flex items-center mr-12">
        <div className="flex items-center justify-center relative w-6 h-6 mr-4 md:mr-2">
          <img src={Radio} alt="Radio Icon" />
        </div>
        <p className="text-primary text-lg md:text-sm">{text}</p>
      </div>
      <p className="text-primary text-lg font-bold md:text-sm">{vote} Votes</p>
    </div>
  );
}
