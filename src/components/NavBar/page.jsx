import Link from "next/link";
import React from "react";
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

const NavBar = () => {
  return (
    <div className="flex bg-slate-100 p-4 items-center justify-between container mx-auto">
      <h1 className="text-3xl font-semibold">Next Hero</h1>
      <ul className="flex items-center">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2" key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
