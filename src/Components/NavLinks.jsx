import React from "react";
import { NavLink } from "react-router";
import { MdOutlineSpaceDashboard } from "react-icons/md";

// navlinks data
const navLinksData = [
  { id: 1, name: "overview", path: "/", icon: <MdOutlineSpaceDashboard /> },
];

function NavLinks() {
  return (
    <nav>
      <ul>
        {navLinksData.map((item) => {
          const { id, name, path, icon } = item;

          return (
            <NavLink key={id} to={path}>
              <li className="flex items-center gap-2 text-indigo-900/95">
                <span className="text-2xl">{icon}</span>
                <p className="text-md capitalize">{name}</p>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavLinks;
