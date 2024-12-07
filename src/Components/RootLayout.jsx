import React, { useContext } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

function RootLayout() {
  return (
    <>
      <Sidebar />

      <div className="ml-[320px] pt-16 pl-5">
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
