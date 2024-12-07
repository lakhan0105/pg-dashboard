import React from "react";
import { AdminCard, LogoutBtn, NavLinks } from "./index";

function Sidebar() {
  return (
    <aside className="fixed w-[320px] h-full bg-gray-50">
      <div className="p-10 pb-5 flex flex-col h-full justify-center">
        <AdminCard />
        <NavLinks />

        <LogoutBtn />
      </div>
    </aside>
  );
}

export default Sidebar;
