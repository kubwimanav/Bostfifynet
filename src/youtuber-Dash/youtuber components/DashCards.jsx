import React from "react";
import "../youtStyles/FirstPage.css";
import { FaDelicious, FaShoppingCart, FaEye } from "react-icons/fa";
function DashCards({ num, icon, title }) {
  return (
    <>
      <div className="dash-card">
        <div className="num-icon">
          <h1>{num}</h1>
          <i>{icon}</i>
        </div>
        <div className="dash-card-discription">
          <h4>{title}</h4>
        </div>
      </div>
    </>
  );
}

export default DashCards;
