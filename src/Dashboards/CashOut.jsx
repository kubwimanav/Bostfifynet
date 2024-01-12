// Cashout.jsx
import React from "react";
import "../Styles/Cashin.css";

const Cashout = () => {
  const data = [
    {
      index: 1,
      name: "Alice Johnson",
      userCategory: "Viewer",
      paymentCategory: "views",
      amount: 1200,
    },
    {
      index: 2,
      name: "Bob Williams",
      userCategory: "viewer",
      paymentCategory: "views",
      amount: 1800,
    },
  ];

  const totalAmount = data.reduce((total, item) => total + item.amount, 0);

  return (
    <section className="table__body">
      <h2>Cash Out</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>User Category</th>
            <th>Payment Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.index}>
              <td>{item.index}</td>
              <td>{item.name}</td>
              <td>{item.userCategory}</td>
              <td>{item.paymentCategory}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={{ textAlign: "right" }}>
              Total:
            </td>
            <td>{totalAmount}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default Cashout;
