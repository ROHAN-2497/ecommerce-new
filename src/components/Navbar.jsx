import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "DashBoard",
  },
];

const Navbar = () => {
  return (
    <div className="flex bg-slate-100 p-4 items-center justify-between container mx-auto">
      <h1 className="text-3xl font-semibold">Next Hero</h1>
      <ul className="flex items-center">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2" key={path}>
            <NavLinks
              exact={path == "/"}
              activeClassName="text-blue-500"
              href={path}
            >
              {title}
            </NavLinks>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
