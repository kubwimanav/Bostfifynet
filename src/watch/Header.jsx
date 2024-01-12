import "../watch/Header.css";
import { useState } from "react";
import { MyContext } from "../context/Context";
import { IoMenu } from "react-icons/io5";
import Balance from "./Balance";

function Header() {
  const { loggedUser } = MyContext();
  const [modal, setModal] = useState(false);

  const [user, setUser] = useState({
    firstName: `${loggedUser?.user.FullName}`,
    lastName: `${loggedUser?.user.FullName}`,
    email: `${loggedUser?.user.Email}`,
    TelNumber: `${loggedUser?.user.TelNumber}`,
    accountStatus: `${loggedUser?.user.accountStatus}`,
    role: `${loggedUser?.user.role}`,
    PaymentMethod: `${loggedUser?.user.PaymentMethod}`,
    Gender: ` ${loggedUser?.user.Gender}`,
    image: ` ${loggedUser?.user.image}`,
    Country: `${loggedUser?.user.Country}`,
  });

  const { Singleusertracking = {} } = MyContext();

  const amount = Singleusertracking?.Your_tracks?.[0]?.Amount;

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="header-textt">
      <div className="headerpart1">
        <div className="logohead">
          <h1>
            {" "}
            BT <span style={{ color: "#fee60c" }}>Net</span>
          </h1>
          <IoMenu className="menu-icon" />
        </div>
      </div>

      <div className="header-text2">
        <h1 style={{ color: "#191943" }}>Balance:{amount}Rwf</h1>
        <button className="withdrawBtn" onClick={openModal}>
          Withdraw
        </button>
        <img src={loggedUser?.user.image} className="pic" />
      </div>
      {modal && (
        <div className="modal-overlay">
          <Balance closeModal={closeModal} />
        </div>
      )}
    </div>
  );
}

export default Header;
