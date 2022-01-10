import React from "react";
import Option from "./option";

export default function Question({
  question,
  questionIndex,
  setQuestions,
  questions,
}) {
  const selectOptionHandler = (optionId) => {
    if (questions[questionIndex].answered === false) {
      setQuestions((prev) => {
        let newQuestions = [...prev];
        newQuestions[questionIndex] = {
          ...newQuestions[questionIndex],
          selectedOption: optionId,
        };
        console.log(newQuestions);
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
        {question.question.text}
      </p>
      <p className="font-semibold text-primary text-lg my-3">Choose answer</p>
      {question.question.options.map((option, index) => (
        <Option
          text={option.text}
          key={index}
          click={() => selectOptionHandler(option.id)}
          checked={questions[questionIndex].selectedOption === option.id}
        />
      ))}
    </div>
  );
}
