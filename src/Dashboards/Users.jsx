import React, { useState } from "react";
import "../Styles/Users.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MyContext } from "../context/Context";
import ReactPaginate from "react-paginate";
import Notiflix, { Notify } from "notiflix";
import axios from "axios";

const Users = () => {
  let token = localStorage.getItem("token");
  const { fetchUsersData = [] } = MyContext();
  // console.log("users", fetchUsersData);

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
            `https://boostifytube-network-api.onrender.com/api/v1/user/deleteOneUser/${id}`,
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

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };
  const [pagenumber, setPagenumber] = useState(0);
  const videopage = 7;
  const pagevisited = pagenumber * videopage;
  const displayuser = fetchUsersData.slice(
    pagevisited,
    pagevisited + videopage
  );

  const changepage = ({ selected }) => {
    setPagenumber(selected);
  };

  return (
    <>
      <section className="table__body">
        <h2>Registered users</h2>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Names</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayuser.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user?.FullName}</td>
                <td>{user?.role}</td>
                <td className="actionss">
                  <FaEdit />
                  <RiDeleteBin6Line
                    onClick={() => handleConfirmDelete(user._id)}
                  />
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
      </section>
      <br />
      <ReactPaginate
        className="pages"
        pageCount={Math.ceil(fetchUsersData?.length / videopage)}
        prevAriaLabel={"Prev"}
        nextLabel={"Next"}
        onPageChange={changepage}
        containerClassName="pagination"
        previousLinkClassName="prevBtn"
        nextLinkClassName="next"
        disabledClassName="disabled"
        activeClassName="paginationactve"
      ></ReactPaginate>
    </>
  );
};

export default Users;
