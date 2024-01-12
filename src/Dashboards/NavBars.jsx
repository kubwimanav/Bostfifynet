import React, { useState } from "react";
import "../Styles/SuperDashboard.css";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { SiGooglemessages } from "react-icons/si";
import { CiLogout } from "react-icons/ci";
import { MyContext } from "../context/Context";

const NavBars = () => {
  const { loggedUser } = MyContext();

  const [isTransactionDropdownOpen, setTransactionDropdownOpen] =
    useState(false);
  const [isEarningsDropdownOpen, setEarningsDropdownOpen] = useState(false);

  const handleTransactionDropdownToggle = () => {
    setTransactionDropdownOpen(!isTransactionDropdownOpen);
    setEarningsDropdownOpen(false);
  };

  const handleEarningsDropdownToggle = () => {
    setEarningsDropdownOpen(!isEarningsDropdownOpen);
    setTransactionDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userdata");
    location.reload(navigate("/"));
  };
  const upLinks = [
    {
      icon: <IoMdHome className="icon-color" style={{ color: "#191943" }} />,
      path: "/superdashboard",
      name: "Dashboard",
    },
    {
      icon: <FaUsers style={{ color: "#191943" }} />,
      path: "users",
      name: "Users",
    },
    {
      icon: <IoLogoYoutube style={{ color: "#191943" }} />,
      path: "videos",
      name: "Videos",
    },
    {
      icon: <GrTransaction style={{ color: "#191943" }} />,
      path: "/transactions",
      name: "Transactions",
      isDropdown: true,
    },
    {
      icon: <FaMoneyCheckDollar style={{ color: "#191943" }} />,
      path: "/earnings",
      name: "Earnings",
      isDropdown: true,
    },
    {
      icon: <SiGooglemessages style={{ color: "#191943" }} />,
      path: "queries",
      name: "contact",
    },
  ];

  const dropdownCategories = [
    {
      pathh: "transactions/youtuber",
      name: "YouTuber",
    },
    {
      pathh: "transactions/viewer",
      name: "Viewer",
    },
  ];

  const dropdownEarningsCategories = [
    {
      path1: "earnings/cashin",
      name1: "Cash In",
    },
    {
      path1: "earnings/cashout",
      name1: "Cash Out",
    },
  ];

  const downLinks = [
    {
      icon: <CgProfile style={{ color: "#191943" }} />,
      path: "profile",
      name: "Profile",
    },
    {
      icon: <CiLogout style={{ color: "#191943" }} />,
      path: "/",
      name: "Logout",
    },
  ];

  return (
    <div className="super-container">
      <div className="topNav">
        <h1 className="logo">
          BT <p style={{ color: "#fee60c" }}>Net</p>{" "}
        </h1>
        <IoMenu
          className="menu-icon"
          style={{ marginLeft: "3rem", fontSize: "4rem", color: "#191943" }}
        />

        <div className="notification">
          <div className="pic">
            <img
              src={loggedUser?.user.image}
              alt=""
              style={{
                width: "90%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="sideNav">
        <div className="uplinks">
          {upLinks.map((link, index) => (
            <React.Fragment key={index}>
              {link.isDropdown ? (
                <div
                  className="navLink"
                  onClick={
                    link.path === "/transactions"
                      ? handleTransactionDropdownToggle
                      : handleEarningsDropdownToggle
                  }
                >
                  {link.icon}
                  <p className="linkName">{link.name}</p>
                  {(link.path === "/transactions" &&
                    isTransactionDropdownOpen) ||
                  (link.path === "/earnings" && isEarningsDropdownOpen) ? (
                    <div
                      className="dropdown"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        margin: "1rem 6rem",
                        fontSize: ".8rem",
                        textDecoration: "none",
                      }}
                    >
                      {link.path === "/transactions" &&
                        dropdownCategories.map((category, idx) => (
                          <NavLink
                            to={category.pathh}
                            className="dropdownLink"
                            key={idx}
                          >
                            {category.name}
                          </NavLink>
                        ))}
                      {link.path === "/earnings" &&
                        dropdownEarningsCategories.map((category1, indx) => (
                          <NavLink
                            to={category1.path1}
                            className="dropdownLink"
                            key={indx}
                          >
                            {category1.name1}
                          </NavLink>
                        ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <NavLink to={link.path} className="navLink">
                  {link.icon}
                  <p className="linkName">{link.name}</p>
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="downlinks">
          {downLinks.map((link1, index) => (
            <NavLink to={link1.path} className="navLink1" key={index}>
              {link1.icon}
              <p className="linkName">{link1.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBars;
