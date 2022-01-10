import React, { useEffect, useState } from "react";
import { GET_ADMIN_QUESTION } from "../services/questions";
import OfficerQuestion from "./officerQuestion";
import Button from "../resuable/button";
import Swal from "sweetalert2";

export default function OfficerDashboard({ setAdminCurrentStep }) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getAdminQuestion();
  }, []);
  console.log(questions);
  const getAdminQuestion = () => {
    const callback = (response) => {
      setQuestions(response.data);
      console.log(response.data);
    };
    const onError = (err) => {
      console.log(err);
    };
    GET_ADMIN_QUESTION(callback, onError);
  };

  const addQuestionHandler = () => {
    setAdminCurrentStep((prev) => ({ ...prev, step: 2 }));
  };
  return (
    <div className="mb-12 mt-6">
      <div className="flex items-center justify-between md:flex-col">
        <div>
          <h1 className="text-app-text text-3xl font-bold md:text-lg">
            All Survey Questions
          </h1>
          <p className="text-app-text text-xl mt-2 md:text-lg">
            Below are all survey Questions
          </p>
        </div>
        <div className={"w-48 mr-10 pt-5"}>
          <Button text={"Add Question"} click={() => addQuestionHandler()} />
        </div>
      </div>

      <div>
        {questions.map((question, index) => (
          <OfficerQuestion
            key={index}
            question={question}
            questionIndex={index}
          />
        ))}
      </div>
    </div>
  );
}
