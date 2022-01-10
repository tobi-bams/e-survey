import React, { useState } from "react";
import LoginBG from "../assets/login-bg.png";
import Input from "../resuable/input";
import Button from "../resuable/button";
import { LOGIN } from "../services/authentication";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  inputValidatorChecker,
  inputValidatorErrorState,
  emailValidatorChecker,
  emailValidatorError,
} from "../helper/index";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });

  const onChangeHandler = (e, field, errorField) => {
    setData((prev) => {
      return { ...prev, [field]: e.target.value, [errorField]: "" };
    });
  };
  const navigator = useNavigate();
  const loginHandler = () => {
    if (
      emailValidatorChecker(data.email) &&
      inputValidatorChecker(data.password)
    ) {
      const callback = (response) => {
        if (response.status) {
          Swal.fire({
            icon: "success",
            title: `${response.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
          window.localStorage.setItem("user-data", JSON.stringify(response));
          navigator("/dashboard");
        }
      };
      const onError = (error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: `${error.data.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
      };

      LOGIN(data, callback, onError);
    } else {
      emailValidatorError(data.email, setData);
      inputValidatorErrorState(
        data.password,
        setData,
        "passwordError",
        "Password is required"
      );
    }
  };
  return (
    <div className="flex items-center h-screen">
      <div
        className="bg-cover fixed md:hidden"
        style={{
          backgroundImage: `url(${LoginBG})`,
          minHeight: "100vh",
          minWidth: "40%",
          backgroundColor: "red",
        }}
      >
        <div
          className=" absolute h-full z-10"
          style={{ background: "rgba(134, 146, 166, 0.5)", width: "100%" }}
        ></div>
      </div>
      <div className="flex flex-col signup px-20 mt-12 md:mx-0 md:px-8 sm:px-4 md:mt-20 w-3/5 md:w-full justify-center md:ml-0">
        <h1 className="text-black font-bold text-3xl md:text-2xl">
          Login to your Account
        </h1>
        <span className="text-primary text-lg">
          with your registered Email Address
        </span>
        <div className="mt-12">
          <div>
            <Input
              label={"Email Address"}
              placeholder={"Enter Email Address"}
              value={data.email}
              onChange={(e) => onChangeHandler(e, "email", "emailError")}
              error={data.emailError}
            />
          </div>
          <div className="mt-6">
            <Input
              label={"Password"}
              placeholder={"Enter Password"}
              type="password"
              value={data.password}
              onChange={(e) => onChangeHandler(e, "password", "passwordError")}
              error={data.passwordError}
            />
          </div>
          <div className="mt-6">
            <Button text={"Login"} click={() => loginHandler()} />
          </div>
        </div>
      </div>
    </div>
  );
}
