import React from "react";
import "chart.js/auto";
import "../youtStyles/Youtubercharts.css";
import { Bar } from "react-chartjs-2";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const YoutuberChats = () => {
  const incomeExpenseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Views ",
        data: [2000, 2500, 3000, 3500, 4000],
        backgroundColor: "#191943",
        borderWidth: 1,
      },
      {
        label: "Subscription",
        data: [1500, 2000, 1800, 2200, 2500],
        backgroundColor: "#fee60c",
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

  return (
    <div className="graphs">
      <div className="income">
        <h2 style={{ color: "#191943", marginTop: "-25rem" }}>
          Youtube Channle Growth
        </h2>
        <Bar
          key="incomeExpenseChart"
          data={incomeExpenseData}
          style={{ width: "80%", height: "80%" }}
        />
      </div>
    </div>
  );
};

export default YoutuberChats;
