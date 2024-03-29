import Navbar from "@/components/Navbar";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default WithLayout;
