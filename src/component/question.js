import React from "react";
import Option from "./option";

export default function Question({
  question,
  questionIndex,
  setQuestions,
  questions,
}) {
  const selectOptionHandler = (index) => {
    if (questions[questionIndex].answered === false) {
      setQuestions((prev) => {
        let newQuestions = [...prev];
        newQuestions[questionIndex] = {
          ...newQuestions[questionIndex],
          selectedOption: index,
        };
        return newQuestions;
      });
    }
  };
  return (
    <div className="mt-3 mb-8">
      <p className="font-bold text-2xl text-primary">
        Question {questionIndex + 1}
      </p>
      <p className="text-primary text-lg mt-2 pr-28 md:pr-0 text-justify">
        {question.question}
      </p>
      <p className="font-semibold text-primary text-lg my-3">Choose answer</p>
      {question.options.map((option, index) => (
        <Option
          text={option}
          key={index}
          click={() => selectOptionHandler(index)}
          checked={questions[questionIndex].selectedOption === index}
        />
      ))}
    </div>
  );
}
