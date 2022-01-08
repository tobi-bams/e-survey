import React from "react";
import DashboardIcon from "../assets/dashboard.svg";
import LogoutIcon from "../assets/logout.svg";

export default function SideBar() {
  return (
    <div className="sidebar fixed h-screen">
      <h2 className="font-bold text-2xl text-app-text pt-8 text-center">
        E-Survey Shangari-La
      </h2>
      <div className="flex flex-col justify-between px-10 mt-12">
        <div className="flex items-center w-full rounded-lg bg-primary py-4 cursor-pointer">
          <img src={DashboardIcon} alt="Dashboard Icon" className="mx-6" />
          <button className="text-white font-semibold text-xl">
            Dashboard
          </button>
        </div>
        <div className="flex items-center w-full rounded-lg py-4 cursor-pointer mt-4">
          <img src={LogoutIcon} alt="Dashboard Icon" className="mx-6" />
          <button className="font-semibold text-xl text-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
