import React, { useState } from "react";
import "../Styles/YoutuberTransactions.css";

const YoutuberTransactions = () => {
  const transactionsData = [
    // ... (Youtuber transactions data)
  ];

  const [filters, setFilters] = useState({
    date: null,
    amount: null,
    status: null,
    userType: null,
  });

  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
  };

  return (
    <section className="table__body">
      <h2 style={{ color: "#191943" }}> Youtuber Transactions</h2>
      {/* Filters */}
      <div className="filters">
        {/* <label>Date:</label>
        <input
          type="date"
          value={filters.date || ""}
          onChange={(e) => handleFilterChange("date", e.target.value)}
        /> */}
        {/* Add other filters as needed */}
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>User Type</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {/* {transactionsData.map((transaction, index) => ( */}
          <tr>
            <td>12/12/1023</td>
            <td>5000</td>
            <td>Paid</td>
            <td>Youtuber</td>
          </tr>
          <tr>
            <td>12/12/1023</td>
            <td>5000</td>
            <td>Paid</td>
            <td>Youtuber</td>
          </tr>
          <tr>
            <td>12/12/1023</td>
            <td>5000</td>
            <td>Paid</td>
            <td>Youtuber</td>
          </tr>
          <tr>
            <td>12/12/1023</td>
            <td>5000</td>
            <td>Paid</td>
            <td>Youtuber</td>
          </tr>
          <tr>
            <td>12/12/1023</td>
            <td>5000</td>
            <td>Paid</td>
            <td>Youtuber</td>
          </tr>
          <tr>
            <td>12/12/1023</td>
            <td>5000</td>
            <td>Paid</td>
            <td>Youtuber</td>
          </tr>
          <tr>
            <td>12/12/1023</td>
            <td>5000</td>
            <td>Paid</td>
            <td>Youtuber</td>
          </tr>
          <tr>
            <td>12/12/1023</td>
            <td>5000</td>
            <td>Paid</td>
            <td>Youtuber</td>
          </tr>
          <tr>
            <td>12/12/1023</td>
            <td>5000</td>
            <td>Paid</td>
            <td>Youtuber</td>
          </tr>
          <tr>
            <td>12/12/1023</td>
            <td>5000</td>
            <td>Paid</td>
            <td>Youtuber</td>
          </tr>
        </tbody>
      </table>

    </section>
  );
};

export default YoutuberTransactions;
