import React, { useContext } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { useMyContext } from "../Context/ContextProvider";

function RootLayout() {
  return (
    <>
      <Outlet />
      <Sidebar />
    </>
  );
}

export default RootLayout;
