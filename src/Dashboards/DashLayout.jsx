import React from "react";
import NavBars from "./NavBars";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <div>
      <NavBars />
      <div
        className="contentt"
        style={{ marginLeft: "15.5%", marginTop: "-35rem" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
