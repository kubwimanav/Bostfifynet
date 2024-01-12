import React from "react";
import "../Styles/Cashin.css";

const Cashin = () => {
  const data = [
    {
      index: 1,
      name: "John Doe",
      userCategory: "Viewer",
      paymentCategory: "activation fee",
      amount: 2000,
    },
    {
      index: 1,
      name: "John Doe",
      userCategory: "Viewer",
      paymentCategory: "membership",
      amount: 500,
    },
    {
      index: 2,
      name: "Jane Smith",
      userCategory: "YouTuber",
      paymentCategory: "views",
      amount: 15000,
    },
  ];

  const totalAmount = data.reduce((total, item) => total + item.amount, 0);

  return (
    <section className="table__body">
      <h2>Cash In</h2>
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

export default Cashin;
