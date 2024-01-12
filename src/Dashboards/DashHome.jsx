import React from "react";
import "../Styles/DashHome.css";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import { MyContext } from "../context/Context";
import { FaUsers, FaVideo, FaMoneyCheckAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

const DashHome = () => {
  const { fetchUsersData = [] } = MyContext();
  const { uploadedVideos = [] } = MyContext();

  const userGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "User Growth",
        data: [100, 150, 200, 250, 300],
        fill: false,
        borderColor: "#fee60c",
      },
    ],
  };

  const videoGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Video Growth",
        data: [50, 75, 100, 125, 150],
        fill: false,
        borderColor: "#191943",
      },
    ],
  };

  const incomeExpenseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Income",
        data: [2000, 2500, 3000, 3500, 4000],
        backgroundColor: "#191943",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: [1500, 2000, 1800, 2200, 2500],
        backgroundColor: "#fee60c",
        // borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  const ratingsData = {
    labels: ["Features", "Usability", "Content", "Performance"],
    datasets: [
      {
        label: "Ratings",
        data: [4, 5, 3.5, 4.2],
        backgroundColor: ["lightGray", "#fee60c", "#191943", "white"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const statArray = [
    {
      id: 1,
      size: fetchUsersData?.length,
      label: "Users",
      icon: (
        <div>
          <FaUsers id="stat-icon" />
        </div>
      ),
    },
    {
      id: 2,
      size: uploadedVideos?.length,
      label: "Videos",
      icon: (
        <div>
          <FaVideo id="stat-icon" />
        </div>
      ),
    },
    {
      id: 3,
      size: `1000 Rfw`,
      label: "Income",
      icon: (
        <div>
          <GiMoneyStack id="stat-icon" />
        </div>
      ),
    },
    {
      id: 4,
      size: `300 Rfw`,
      label: "Expenses",
      icon: (
        <div>
          <FaMoneyCheckAlt id="stat-icon" />
        </div>
      ),
    },
  ];
  const StatCard = ({ size, label, icon }) => {
    return (
      <div className="summary-card">
        <div className="summary-content">
          <div>
            <h1>{size}</h1>
            <div>{label}</div>
          </div>
          <div>{icon}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="dashHome-cont">
      <div className="summary1">
        {statArray.map((item, index) => {
          return <StatCard kay={index} {...item} />;
        })}

        {/* <div className="userscount">
          <h1>{fetchUsersData?.length}</h1>
          <p>Users</p>
        </div>
        <div className="videoscount">
          <h1>{uploadedVideos?.length}</h1>
          <p>Videos</p>
        </div>
        <div className="incomesummary">
          <h1>$6000</h1>
          <p>Rwf</p>
        </div>
        <div className="expensessummary">
          <h1>$2500</h1>
          <p>Rwf</p>
        </div> */}
      </div>
      <div className="graphs">
        {/* <div className="usersss">
          <Line
            key="userGrowthChart"
            data={userGrowthData}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="videossss">
          <Line
            key="videoGrowthChart"
            data={videoGrowthData}
            style={{ width: "100%", height: "100%" }}
          />
        </div> */}
        <div className="income">
          <Bar
          className="barr"
            key="incomeExpenseChart"
            data={incomeExpenseData}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashHome;
