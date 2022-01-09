import React, { useState } from "react";
import Question from "./question";

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

export default function UserDashboard() {
  const [questions, setQuestions] = useState(Questions);
  const handleSubmit = () => {
    console.log(questions);
  };
  return (
    <div>
      <h1 className="text-app-text text-3xl font-bold">Survey Questions</h1>
      <p className="text-app-text text-xl mt-2">
        Please Answer the questions below
      </p>
      <div>
        {questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            questionIndex={index}
            setQuestions={setQuestions}
            questions={questions}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-12 mb-12">
        <button
          className="bg-primary text-white text-lg py-4 px-8 rounded-lg"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}