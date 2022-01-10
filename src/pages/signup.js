import React, { useState } from "react";
import LoginBG from "../assets/login-bg.png";
import Input from "../resuable/input";
import Button from "../resuable/button";
import {
  inputValidatorChecker,
  inputValidatorErrorState,
  emailValidatorChecker,
  emailValidatorError,
} from "../helper/index";
import { SIGNUP } from "../services/authentication";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [data, setData] = useState({
    email: "",
    emailError: "",
    name: "",
    nameError: "",
    dob: "",
    dobError: "",
    address: "",
    addressError: "",
    password: "",
    passwordError: "",
    sni: "",
    sniError: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onChangeHandler = (e, field, fieldError) => {
    setData((prev) => {
      return { ...prev, [field]: e.target.value, [fieldError]: "" };
    });
  };

  const navigator = useNavigate();

  const handleSubmit = () => {
    if (
      emailValidatorChecker(data.email) &&
      inputValidatorChecker(data.name) &&
      inputValidatorChecker(data.address) &&
      inputValidatorChecker(data.dob) &&
      inputValidatorChecker(data.password) &&
      inputValidatorChecker(data.sni) &&
      data.sni.length === 16
    ) {
      setIsLoading(true);
      const callback = (response) => {
        if (response.status) {
          setIsLoading(false);
          Swal.fire({
            icon: "success",
            title: `${response.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigator("/login");
        }
      };
      const onError = (error) => {
        console.log(error);
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: `${error.data.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
      };
      SIGNUP(data, callback, onError);
    } else {
      emailValidatorError(data.email, setData);
      inputValidatorErrorState(
        data.name,
        setData,
        "nameError",
        "Fullname is Required"
      );
      inputValidatorErrorState(
        data.address,
        setData,
        "addressError",
        "Home Address is required"
      );
      inputValidatorErrorState(
        data.dob,
        setData,
        "dobError",
        "Date of Birth is required"
      );
      inputValidatorErrorState(
        data.password,
        setData,
        "passwordError",
        "Password is required"
      );
      if (data.sni.length !== 16) {
        setData((prev) => ({ ...prev, sniError: "SNI must be 16 digit" }));
      } else {
        inputValidatorErrorState(
          data.sni,
          setData,
          "sniError",
          "SNI number is Required"
        );
      }
    }
  };
  return (
    <div className="flex items-center">
      <div
        className="bg-cover md:hidden fixed top-0"
        style={{
          backgroundImage: `url(${LoginBG})`,
          height: "100vh",
          minWidth: "40%",
        }}
      >
        <div
          className=" absolute h-full z-10"
          style={{ background: "rgba(134, 146, 166, 0.5)", width: "100%" }}
        ></div>
      </div>
      <div className="flex flex-col signup px-20 mt-12 md:mx-0 md:px-8 sm:px-4 md:mt-20 w-3/5 md:w-full justify-center md:ml-0">
        <h1 className="text-black font-bold text-3xl md:text-2xl">
          Create your Account
        </h1>
        <span className="text-primary text-lg">For this survey</span>
        <div className="mt-12">
          <div>
            <Input
              label={"Email Address"}
              placeholder={"Enter Email Address"}
              value={data.email}
              error={data.emailError}
              onChange={(e) => {
                onChangeHandler(e, "email", "emailError");
              }}
            />
          </div>
          <div className="mt-6">
            <Input
              label={"Full Name"}
              placeholder={"Enter Full Name"}
              type="text"
              value={data.name}
              error={data.nameError}
              onChange={(e) => {
                onChangeHandler(e, "name", "nameError");
              }}
            />
          </div>
          <div className="mt-6">
            <Input
              label={"Date of Birth"}
              placeholder={"Select Date of Birth"}
              type="date"
              value={data.dob}
              error={data.dobError}
              onChange={(e) => {
                onChangeHandler(e, "dob", "dobError");
              }}
            />
          </div>
          <div className="mt-6">
            <Input
              label={"Home Address"}
              placeholder={"Enter Home Address"}
              type="tezt"
              value={data.address}
              error={data.addressError}
              onChange={(e) => {
                onChangeHandler(e, "address", "addressError");
              }}
            />
          </div>
          <div className="mt-6">
            <Input
              label={"SNI Number"}
              placeholder={"Enter SNI NUmber"}
              type="text"
              value={data.sni}
              error={data.sniError}
              onChange={(e) => {
                onChangeHandler(e, "sni", "sniError");
              }}
            />
          </div>
          <div className="mt-6">
            <Input
              label={"Password"}
              placeholder={"Enter Password"}
              type="password"
              value={data.password}
              error={data.passwordError}
              onChange={(e) => {
                onChangeHandler(e, "password", "passwordError");
              }}
            />
          </div>
          <div className="mt-6 mb-10">
            <Button
              text={"Sign Up"}
              click={() => handleSubmit()}
              loading={isLoading}
            />
          </div>
          <p className="text-primary text-center mb-8">
            Already have an account?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => navigator("/login")}
            >
              login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
