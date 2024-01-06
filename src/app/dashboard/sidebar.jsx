import Link from "next/link";
import React from "react";
const navLinks = [
  {
    Path: "/dashboard",
    title: "DashBoard",
  },
  {
    Path: "/dashboard/addproduct",
    title: "Add product",
  },
  {
    Path: "/dashboard/manageproduct",
    title: "Manage product",
  },
];
const SideBar = () => {
  return (
    <aside>
      <h1>DashBoard</h1>
      <ul>
        {
            navLinks.map(({path, title}) => <li key={path}>
                <Link href={path}>{title}</Link>
            </li>)
        }
      </ul>
    </aside>
  );
};

export default SideBar;
