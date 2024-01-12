import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "../youtStyles/menuBarStyle.css";
import { IoMenu } from "react-icons/io5";
import { MyContext } from "../../context/Context";

function MenuBar() {
  const { loggedUser } = MyContext();
  const profileName = loggedUser?.user?.FullName.slice(0, 15);

  return (
    <>
      <div className="topContainer">
        <div className="logg">
          <h1 style={{ fontSize: "3rem" }}>BT</h1>
          <h1 style={{ fontSize: "3rem" }}>
            <p style={{ color: "#fee60c" }}>Net</p>
          </h1>

          <IoMenu
            className="menu-icon"
            style={{ marginLeft: "3rem", fontSize: "4rem" }}
          />
        </div>
        <div className="profileContainer">
          <div className="profileImage">
            <img src="isaac.jpg" alt="" />
          </div>
          <p className="profileName">{profileName}</p>
          <i className="menuChevron" id="menuChevron">
            <FaChevronDown />
          </i>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
