import React from "react";
import { MdExitToApp } from "react-icons/md";

function LogoutBtn() {
  return (
    <button className="mt-auto text-start flex items-center gap-2 text-indigo-900/80">
      <span className="text-3xl">
        <MdExitToApp />
      </span>
      Logout
    </button>
  );
}

export default LogoutBtn;
