import React, { useState, useEffect } from "react";
import "../Styles/DashContact.css";
import { MyContext } from "../context/Context";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Notiflix from "notiflix";

const DashContact = () => {
  const { Messages } = MyContext();
  let i = 0;

  const [pagenumber, setPagenumber] = useState(0);
  const videopage = 6;
  const pagevisited = pagenumber * videopage;
  const displaycontact = Messages?.slice(pagevisited, pagevisited + videopage);

  const changepage = ({ selected }) => {
    setPagenumber(selected);
  };

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const handleConfirmDelete = async (id) => {
    try {
      Notiflix.Confirm.show(
        "Confirm delete tour",
        "Do you agree with me?",
        "Yes",
        "No",
        async () => {
          const res = await axios.delete(
            `https://boostifytube-network-api.onrender.com/api/v1/user/deleteOneContact/${id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
          window.location.reload();
        },
        () => {
          Notify.success("If you say so...");
        },
        {}
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteClick = (user) => {
    setTourToDelete(user);
    handleConfirmDelete();
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  return (
    <section className="table__body">
      {/* <input type="text" placeholder="Search" className="searchh" /> */}
      <h3 style={{ color: "#191943" }}>Received Messages</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Names</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displaycontact?.map((message, index) => (
            <tr>
              <td>{(i += 1)}</td>
              <td>{message.Name}</td>
              <td>{message.Email}</td>
              <td>{message.Message}</td>
              <td className="contact-button1">
                <button className="contBtns" style={{ color: "white" }}>
                  Reply
                </button>
                <button
                  style={{ color: "#191943", backgroundColor: "#fee60c" }}
                  className="contBtns"
                  onClick={() => handleConfirmDelete(message._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {showDeleteConfirm && (
            <div className="popup">
              <p>Are you sure you want to delete {userToDelete._id}?</p>
              <button onClick={handleDeleteClick}>OK</button>
              <button onClick={handleCancelDelete}>Cancel</button>
            </div>
          )}
        </tbody>
      </table>
      <ReactPaginate
        className="pages1"
        pageCount={Math.ceil(Messages?.length / videopage)}
        prevAriaLabel={"Prev"}
        nextLabel={"Next"}
        onPageChange={changepage}
        containerClassName="pagination"
        previousLinkClassName="prevBtn"
        nextLinkClassName="next"
        disabledClassName="disabled"
        activeClassName="paginationactve"
      ></ReactPaginate>
    </section>
  );
};

export default DashContact;
