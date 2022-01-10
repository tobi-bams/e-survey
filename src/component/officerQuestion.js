import React from "react";
import OfficerOption from "./officerOption";

export default function OfficerQuestion({ question, questionIndex }) {
  console.log(question.options);
  return (
    <div className="pr-28 mt-8 shadow-lg p-8 rounded-lg mr-8 md:mr-0 md:pr-6 md:p-6">
      <div className="flex items-center justify-between">
        <p className="font-bold text-2xl text-primary md:text-base">
          Question {questionIndex + 1}
        </p>
        <p className="font-bold text-2xl text-primary md:text-base">
          {question.response} Responses
        </p>
      </div>
      <p className="text-primary text-lg mt-2 pr-28 md:pr-0 text-justify md:text-base">
        {question.question}
      </p>
      <p className="font-semibold text-primary text-lg my-3">All options</p>
      <div>
        {question.options.map((option) => (
          <OfficerOption
            text={option.option}
            key={option.id}
            vote={option.votes}
          />
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
