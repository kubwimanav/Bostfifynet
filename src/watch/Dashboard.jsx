import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../watch/Dashbord.css";
import { MyContext } from "../context/Context";
import ActivationModal from "./ActivationModal";

function Dashboard() {
  const { loggedUser } = MyContext();
  const [isActivationModalOpen, setIsActivationModalOpen] = useState(false);

  const openActivationModal = () => {
    setIsActivationModalOpen(true);
  };
  const closeActivationModal = () => {
    setIsActivationModalOpen(false);
  };
  return (
    <div className="dashboardss">
      {!loggedUser ? (
        <></>
      ) : (
        loggedUser?.user?.accountStatus !== "activated" && (
          <div
            className="activationreminder"
            style={{
              backgroundColor: "#191943",
              color: "rgba(255, 255, 255)",
            }}
          >
            Please activate your account. To start earning money
            <button
              style={{
                border: "none",
                backgroundColor: "#fee60c",
                marginLeft: "0.5rem",
              }}
              onClick={openActivationModal}
            >
              <Link
                style={{
                  backgroundColor: "#fff",
                  padding: "0.6rem",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                Activate Now{" "}
              </Link>
            </button>
          </div>
        )
      )}

      {isActivationModalOpen && (
        <ActivationModal onClose={closeActivationModal} />
      )}

      <div>
        <Header />
      </div>
      <div className="sidebar-outlettt">
        <Sidebar />
        <div className="outlettt">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
