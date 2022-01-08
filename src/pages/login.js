import React from "react";
import LoginBG from "../assets/login-bg.png";
import Input from "../resuable/input";
import Button from "../resuable/button";

export default function Login() {
  return (
    <div className="flex items-center">
      <div
        className="bg-cover relative md:hidden"
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
      <div className="flex flex-col mx-44 md:mx-0 md:px-8 sm:px-4 md:mt-20 w-3/5 md:w-full justify-center">
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
            />
          </div>
          <div className="mt-6">
            <Input label={"Password"} placeholder={"Enter Password"} />
          </div>
          <div className="mt-6">
            <Button text={"Login"} />
          </div>
        </div>
      </div>
    </div>
  );
}
