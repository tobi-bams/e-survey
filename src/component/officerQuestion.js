import React from "react";
import OfficerOption from "./officerOption";

export default function OfficerQuestion({ question }) {
  return (
    <div className="pr-28 mt-8 shadow-lg p-8 rounded-lg mr-8">
      <div className="flex items-center justify-between">
        <p className="font-bold text-2xl text-primary">Question</p>
        <p className="font-bold text-2xl text-primary">100 Responses</p>
      </div>
      <p className="text-primary text-lg mt-2 pr-28 md:pr-0 text-justify">
        {question.question}
      </p>
      <p className="font-semibold text-primary text-lg my-3">All options</p>
      <div>
        {question.options.map((option, index) => (
          <OfficerOption text={option} key={index} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="bg-primary text-white text-base py-3 px-8 rounded-lg mr-8">
          Edit
        </button>
        <button className="bg-red-300 text-white text-base py-3 px-8 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
}
