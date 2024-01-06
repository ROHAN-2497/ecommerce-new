import Link from "next/link";
import React from "react";
const navLinks = [
  {
    path: "/dashboard",
    title: "DashBoard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage product",
  },
  {
    path: "/",
    title: "Home",
  },
];
const SideBar = () => {
  return (
    <aside className="mr-10">
      <h1 className="text-3xl font-semibold">DashBoard</h1>
      <ul className="">
        {navLinks.map(({ path, title }) => (
          <li key={path}>
          <Link href={path}>{title}</Link>
        </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
