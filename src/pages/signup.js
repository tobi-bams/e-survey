import React from "react";
import LoginBG from "../assets/login-bg.png";
import Input from "../resuable/input";
import Button from "../resuable/button";

export default function SignUp() {
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
            />
          </div>
          <div className="mt-6">
            <Input
              label={"Full Name"}
              placeholder={"Enter Full Name"}
              type="text"
            />
          </div>
          <div className="mt-6">
            <Input
              label={"Date of Birth"}
              placeholder={"Select Date of Birth"}
              type="date"
            />
          </div>
          <div className="mt-6">
            <Input
              label={"Home Address"}
              placeholder={"Enter Home Address"}
              type="tezt"
            />
          </div>
          <div className="mt-6">
            <Input
              label={"SNI Number"}
              placeholder={"Enter SNI NUmber"}
              type="text"
            />
          </div>
          <div className="mt-6">
            <Input
              label={"Password"}
              placeholder={"Enter Password"}
              type="password"
            />
          </div>
          <div className="mt-6 mb-10">
            <Button text={"Sign Up"} />
          </div>
        </div>
      </div>
    </div>
  );
}
