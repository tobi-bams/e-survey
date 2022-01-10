import React, { useState, useEffect } from "react";
import SideBar from "../component/sidebar";
import ProfileImage from "../assets/profile.png";
import UserDashboard from "../component/userDashboard";
import OfficerDashboard from "../component/officerDashboard";
import AddQuestion from "../component/addQuestion";
import EditQuestion from "../component/editQuestion";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({ role: "", name: "" });
  const [adminCurrentStep, setAdminCurrentStep] = useState({ step: 1 });
  useEffect(() => {
    if (window.localStorage.getItem("user-data")) {
      let user = JSON.parse(window.localStorage.getItem("user-data")).user;
      setCurrentUser(user);
    } else {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <SideBar />
      <div className="dashboard flex flex-col">
        <div className="flex items-center ml-auto mt-4">
          <img src={ProfileImage} alt="Profile Icon" className="mr-2" />
          <p className="mr-6 text-primary text-base">{currentUser.name}</p>
        </div>
        <div className="w-full mr-4 mt-12 md:px-4">
          {currentUser.role === "user" && <UserDashboard />}
          {currentUser.role === "admin" && (
            <div>
              {adminCurrentStep.step === 1 && (
                <OfficerDashboard setAdminCurrentStep={setAdminCurrentStep} />
              )}
              {adminCurrentStep.step === 2 && (
                <AddQuestion setAdminCurrentStep={setAdminCurrentStep} />
              )}
              {adminCurrentStep.step === 3 && (
                <EditQuestion
                  setAdminCurrentStep={setAdminCurrentStep}
                  adminCurrentStep={adminCurrentStep}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
