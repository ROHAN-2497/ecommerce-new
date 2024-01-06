import NavBar from "@/components/NavBar/page";
import Link from "next/link";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div>
     <NavBar />
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default WithLayout;
