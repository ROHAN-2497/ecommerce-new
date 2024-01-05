import React from "react";

const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <div>
        SideBar
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
