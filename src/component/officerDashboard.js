import React, { useEffect, useState } from "react";
import { GET_ADMIN_QUESTION, DELETE_QUESTION } from "../services/questions";
import OfficerQuestion from "./officerQuestion";
import Button from "../resuable/button";
import Swal from "sweetalert2";

export default function OfficerDashboard({ setAdminCurrentStep }) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getAdminQuestion();
  }, []);

  const getAdminQuestion = () => {
    const callback = (response) => {
      setQuestions(response.data);
    };
    const onError = (err) => {
      console.log(err);
    };
    GET_ADMIN_QUESTION(callback, onError);
  };

  const addQuestionHandler = () => {
    setAdminCurrentStep((prev) => ({ ...prev, step: 2 }));
  };

  const onDeleteHandler = (id) => {
    const callback = (response) => {
      if (response.status) {
        getAdminQuestion();
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
      Swal.fire({
        icon: "error",
        title: `${err.data.message}`,
        showConfirmButton: false,
        timer: 2500,
      });
    };

    DELETE_QUESTION(id, callback, onError);
  };

  const deleteQuestionHandler = (id) => {
    Swal.fire({
      title: "Delete Question",
      text: "Are you sure, you want to delete question?",
      icon: "warning",
      confirmButtonColor: "#ec6056e2",
      confirmButtonText: "Yes",
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: "No",
      cancelButtonColor: "#316be9",
      closeOnConfirm: false,
      closeOnCancel: false,
      allowOutsideClick: true,
    }).then((result) => {
      if (result.dismiss !== "cancel") {
        onDeleteHandler(id);
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Question Not Deleted :)",
          icon: "info",
          showConfirmButton: false,
          showCancelButton: false,
          timerProgressBar: true,
          timer: 1000,
          allowOutsideClick: true,
        });
      }
    });
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
            setAdminCurrentStep={setAdminCurrentStep}
            onDelete={() => deleteQuestionHandler(question.id)}
          />
        ))}
      </div>
    </div>
  );
}
