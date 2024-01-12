import React, { useState } from "react";
import "../Styles/YoutuberTransactions.css";
const ViewerTransactions = () => {
  // Placeholder data
  const transactionsData = [
    // ... (Viewer transactions data)
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
      <h2 style={{ color: "#191943" }}>Viewer Transactions</h2>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7/12/2023</td>
            <td>100000</td>
            <td>Pending</td>
            <td>viewer</td>
          </tr>
          <tr>
            <td>7/12/2023</td>
            <td>100000</td>
            <td>Pending</td>
            <td>viewer</td>
          </tr>
          <tr>
            <td>7/12/2023</td>
            <td>100000</td>
            <td>Pending</td>
            <td>viewer</td>
          </tr>
          <tr>
            <td>7/12/2023</td>
            <td>100000</td>
            <td>Pending</td>
            <td>viewer</td>
          </tr>
          <tr>
            <td>7/12/2023</td>
            <td>100000</td>
            <td>Pending</td>
            <td>viewer</td>
          </tr>
          <tr>
            <td>7/12/2023</td>
            <td>100000</td>
            <td>Pending</td>
            <td>viewer</td>
          </tr>
          <tr>
            <td>7/12/2023</td>
            <td>100000</td>
            <td>Pending</td>
            <td>viewer</td>
          </tr>
          <tr>
            <td>7/12/2023</td>
            <td>100000</td>
            <td>Pending</td>
            <td>viewer</td>
          </tr>
          <tr>
            <td>7/12/2023</td>
            <td>100000</td>
            <td>Pending</td>
            <td>viewer</td>
          </tr>
          <tr>
            <td>7/12/2023</td>
            <td>100000</td>
            <td>Pending</td>
            <td>viewer</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ViewerTransactions;
