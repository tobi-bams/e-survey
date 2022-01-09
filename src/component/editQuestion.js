import React, { useState } from "react";
import Input from "../resuable/input";
import Button from "../resuable/button";

export default function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const numberOfOptionHandler = (e) => {
    if (e.target.value.length !== 0) {
      let optionNumbers = parseInt(e.target.value);
      let newOptionArray = [];
      for (let i = 0; i < optionNumbers; i++) {
        newOptionArray.push("");
      }
      setOptions(newOptionArray);
    } else {
      setOptions([]);
    }
  };

  const optionOnChangeHandler = (e, index) => {
    setOptions((prev) => {
      let newOptionArray = [...prev];
      newOptionArray[index] = e.target.value;
      return newOptionArray;
    });
  };

  const createQuestionHandler = () => {
    console.log(options);
  };
  return (
    <div className="mt-4 border rounded shadow-md p-8 mr-8 md:mr-0 md:p-2 md:mt-0">
      <h1 className="text-app-text text-3xl font-bold md:text-lg">
        Add New Survey Question
      </h1>
      <p className="text-app-text text-xl mt-2 md:text-base">
        Fill in the Question and it options
      </p>
      <div className="flex flex-col">
        <label className="font-semibold text-2xl mt-4 text-primary mb-2 md:text-base md:mt-4">
          Question
        </label>
        <textarea
          className="border rounded p-3 w-full outline-none text-primary"
          rows={5}
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
      </div>
      <div className="mt-8">
        {options.map((option, index) => (
          <div className="mt-3" key={index}>
            <Input
              type="text"
              label={`Option ${index + 1}`}
              onChange={(e) => optionOnChangeHandler(e, index)}
              value={option}
            />
          </div>
        ))}
      </div>
      <div className="my-8 w-48 mx-auto flex justify-center items-center">
        <Button
          text={"Create Question"}
          click={() => createQuestionHandler()}
        />
      </div>
    </div>
  );
}
