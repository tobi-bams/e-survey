import React from "react";
import SideBar from "../component/sidebar";
import ProfileImage from "../assets/profile.png";
import UserDashboard from "../component/userDashboard";
import OfficerDashboard from "../component/officerDashboard";
import AddQuestion from "../component/addQuestion";

export default function Dashboard() {
  return (
    <div>
      <SideBar />
      <div className="dashboard flex flex-col">
        <div className="flex items-center ml-auto mt-4">
          <img src={ProfileImage} alt="Profile Icon" className="mr-2" />
          <p className="mr-6 text-primary text-base">Oluwatobi</p>
        </div>
        <div className="w-full mr-4 mt-12 md:px-4">
          {/* <UserDashboard /> */}
          {/* <OfficerDashboard /> */}
          <AddQuestion />
        </div>
      </div>
    </div>
  );
}
