import React, { useState, useEffect } from "react";
import Question from "./question";
import { GET_USER_QUESTION, SUBMIT_USER_QUESTION } from "../services/questions";
import Swal from "sweetalert2";
import Button from "../resuable/button";

export default function UserDashboard() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestions();
  }, []);
  const [isLoading, setIsLoading] = useState();
  const getQuestions = () => {
    const callback = (response) => {
      setQuestions(response.data);
    };
    const onError = (err) => {
      console.log(err);
    };

    GET_USER_QUESTION(callback, onError);
  };

  const allAnsered = () => {
    let determiner = true;
    questions.forEach((question) => {
      if (question.selectedOption === null && question.answered === false) {
        determiner = false;
        Swal.fire({
          icon: "error",
          title: `Please answer all questions`,
          showConfirmButton: false,
          timer: 1500,
        });
        return determiner;
      }
    });
    return determiner;
  };

  const handleSubmit = () => {
    if (allAnsered()) {
      setIsLoading(true);
      const callback = (response) => {
        console.log(response);
        if (response.status) {
          setIsLoading(false);
          Swal.fire({
            icon: "success",
            title: `${response.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      };
      const onError = (err) => {
        console.log(err);
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: `${err.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      };
      SUBMIT_USER_QUESTION({ response: questions }, callback, onError);
    }
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
      <div className="flex justify-center items-center mt-12 mb-12 w-48 mx-auto">
        <Button
          className="bg-primary text-white text-lg py-4 px-8 rounded-lg"
          click={() => handleSubmit()}
          text={"Submit"}
          loading={isLoading}
        />
      </div>
    </div>
  );
}
