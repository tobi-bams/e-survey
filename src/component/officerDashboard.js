import React from "react";
import OfficerQuestion from "./officerQuestion";

const Questions = [
  {
    question:
      " Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, aspart of a protest against a bus company that refused to employ black and Asian drivers in which UK city?",
    options: ["London", "Edinburgh", "Liverpool", "Canary Wharf"],
    selectedOption: null,
    answered: false,
  },
  {
    question:
      " Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, aspart of a protest against a bus company that refused to employ black and Asian drivers in which UK city?",
    options: ["London", "Edinburgh", "Liverpool", "Canary Wharf"],
    selectedOption: null,
    answered: false,
  },
  {
    question:
      " Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, aspart of a protest against a bus company that refused to employ black and Asian drivers in which UK city?",
    options: ["London", "Edinburgh", "Liverpool", "Canary Wharf"],
    selectedOption: null,
    answered: false,
  },
  {
    question:
      " Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, aspart of a protest against a bus company that refused to employ black and Asian drivers in which UK city?",
    options: ["London", "Edinburgh", "Liverpool", "Canary Wharf"],
    selectedOption: null,
    answered: false,
  },
  {
    question:
      " Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, aspart of a protest against a bus company that refused to employ black and Asian drivers in which UK city?",
    options: ["London", "Edinburgh", "Liverpool", "Canary Wharf"],
    selectedOption: null,
    answered: false,
  },
];
export default function OfficerDashboard() {
  return (
    <div className="mb-12 mt-6">
      <h1 className="text-app-text text-3xl font-bold">All Survey Questions</h1>
      <p className="text-app-text text-xl mt-2">
        Below are all survey Questions
      </p>
      <div>
        {Questions.map((question, index) => (
          <OfficerQuestion key={index} question={question} />
        ))}
      </div>
    </div>
  );
}
