import React from "react";
import "../youtStyles/SideBarStyle.css";
import {FaWallet,FaRegClock,FaSignOutAlt, FaHome, FaVideo,FaUser, FaCloudUploadAlt} from "react-icons/fa";
import {NavLink } from "react-router-dom";

function SideBar() {
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };
  return (
    <>
      <div className="youtuber-sideBar" id="">
    
        <div className="sideBarLinks">
          <ul>
            <li>
              <a href="#">
                <NavLink to="/youtuberDash/">
                  <FaHome />
                  Home
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#">
                <NavLink to="/youtuberDash/upload">
                  <FaCloudUploadAlt />
                  Upload
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#">
                <NavLink to="/youtuberDash/my-videos">
                  <FaVideo />
                  My Uploads
                </NavLink>
              </a>{" "}
            </li>
            <li>
              <a href="#">
                <NavLink to="/youtuberDash/payment">
                  <FaWallet />
                  Payment
                </NavLink>
              </a>{" "}
            </li>
            <li>
              <a href="#">
                <NavLink to="/youtuberDash/history">
                  <FaRegClock />
                  History
                </NavLink>
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="sidebarBottomLinks">
          <ul>
            <li>
              <a href="#">
                <NavLink to={"/youtuberDash/youtuber-profile"}>
                  <FaUser />
                  Profile
                </NavLink>
              </a>
            </li>
            
            <li>
              <a onClick={handleLogout}>
                <NavLink to={"/"}>
                  <FaSignOutAlt />
                  Logout
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
