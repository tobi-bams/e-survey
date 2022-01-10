import React, { useState } from "react";
import Input from "../resuable/input";
import Button from "../resuable/button";
import { inputValidatorChecker } from "../helper/index";
import Swal from "sweetalert2";
import { EDIT_QUESTION } from "../services/questions";

export default function AddQuestion({ setAdminCurrentStep, adminCurrentStep }) {
  const [question, setQuestion] = useState(adminCurrentStep.question);
  const [options, setOptions] = useState(adminCurrentStep.options);
  const [error, setError] = useState("");
  const optionOnChangeHandler = (e, index) => {
    setOptions((prev) => {
      let newOptionArray = [...prev];
      newOptionArray[index] = {
        ...newOptionArray[index],
        option: e.target.value,
      };
      return newOptionArray;
    });
  };

  const isallOptionFilled = () => {
    let determiner = true;
    if (options.length <= 1) {
      Swal.fire({
        icon: "error",
        title: `The Question must Have more than one option`,
        showConfirmButton: false,
        timer: 2500,
      });
      determiner = false;
      return determiner;
    }
    options.forEach((option) => {
      if (option.option === "") {
        Swal.fire({
          icon: "error",
          title: `All options must be filled`,
          showConfirmButton: false,
          timer: 2500,
        });
        determiner = false;
        return determiner;
      }
    });
    return determiner;
  };

  const onBackHandler = () => {
    setAdminCurrentStep((prev) => ({ ...prev, step: 1 }));
  };

  const createQuestionHandler = () => {
    if (inputValidatorChecker(question) && isallOptionFilled()) {
      console.log(options);
      const callback = (response) => {
        if (response.status) {
          Swal.fire({
            icon: "success",
            title: `${response.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        onBackHandler();
      };

      const onError = (err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: `${error.data.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
      };
      //   CREATE_QUESTION(
      //     { question: question, options: options },
      //     callback,
      //     onError
      //   );
      EDIT_QUESTION(
        {
          id: adminCurrentStep.id,
          question: question,
          options: options,
        },
        callback,
        onError
      );
    } else {
      if (!inputValidatorChecker(question)) {
        setError("Question is Required");
      }
    }
  };

  const questionOnchangeHandler = (e) => {
    setQuestion(e.target.value);
    setError("");
  };

  return (
    <div className="mt-4 border rounded shadow-md p-8 mr-8 md:mr-0 md:p-2 md:mt-0">
      <div className="w-32 mb-8">
        <Button text={"Back"} click={() => onBackHandler()} />
      </div>
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
          onChange={(e) => {
            questionOnchangeHandler(e);
          }}
        ></textarea>
        {error && (
          <span className="text-red-500 text-sm bg-red-200 p-4 rounded my-1">
            {error}
          </span>
        )}
      </div>
      <div className="mt-8">
        {options.map((option, index) => (
          <div className="mt-3" key={index}>
            <Input
              type="text"
              label={`Option ${index + 1}`}
              onChange={(e) => optionOnChangeHandler(e, index)}
              value={option.option}
            />
          </div>
        ))}
      </div>
      <div className="my-8 w-48 mx-auto flex justify-center items-center">
        <Button
          text={"Update Question"}
          click={() => createQuestionHandler()}
        />
      </div>
    </div>
  );
}
