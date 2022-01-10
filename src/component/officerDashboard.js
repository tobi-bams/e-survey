import React, { useEffect, useState } from "react";
import { GET_ADMIN_QUESTION } from "../services/questions";
import OfficerQuestion from "./officerQuestion";

export default function OfficerDashboard() {
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

  return (
    <div className="mb-12 mt-6">
      <h1 className="text-app-text text-3xl font-bold md:text-lg">
        All Survey Questions
      </h1>
      <p className="text-app-text text-xl mt-2 md:text-lg">
        Below are all survey Questions
      </p>
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
