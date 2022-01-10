import React, { useState } from "react";
import Input from "../resuable/input";
import Button from "../resuable/button";
import { inputValidatorChecker } from "../helper/index";
import Swal from "sweetalert2";
import { CREATE_QUESTION } from "../services/questions";

export default function AddQuestion({ setAdminCurrentStep }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [error, setError] = useState("");
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

  const isallOptionFilled = () => {
    const determiner = true;
    if (options.length <= 1) {
      Swal.fire({
        icon: "error",
        title: `The Question must Have more than one option`,
        showConfirmButton: false,
        timer: 2500,
      });
      return false;
    }
    options.forEach((option) => {
      if (option === "") {
        Swal.fire({
          icon: "error",
          title: `All options must be filled`,
          showConfirmButton: false,
          timer: 2500,
        });
        return false;
      }
    });
    return determiner;
  };

  const onBackHandler = () => {
    setAdminCurrentStep((prev) => ({ ...prev, step: 1 }));
  };

  const createQuestionHandler = () => {
    if (inputValidatorChecker(question) && isallOptionFilled()) {
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
      CREATE_QUESTION(
        { question: question, options: options },
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
        <div className="flex items-center justify-between md:flex-col">
          <Input
            type="number"
            onChange={(e) => numberOfOptionHandler(e)}
            label={"How Many Options does this question have?"}
          />
        </div>
        {options.map((option, index) => (
          <div className="mt-3" key={index}>
            <Input
              type="text"
              label={`Option ${index + 1}`}
              onChange={(e) => optionOnChangeHandler(e, index)}
              value={options[index]}
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
