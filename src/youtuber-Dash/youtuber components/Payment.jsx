import { BsCreditCard } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import {CiMoneyBill} from "react-icons/ci"
import "../youtStyles/paymentStyle.css"
import { useForm } from "react-hook-form";
import axios from "axios";

import { Report } from "notiflix";


import { Notify } from "notiflix/build/notiflix-notify-aio";

import creditCard from "../img/creditCard.jpg"
import visaCard from "../img/visaCard.jpeg";

// PaymentForm.js

import React, { useState } from 'react';
// import './PaymentForm.css';

const Payment = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = async (data) => {
    const accessToken = localStorage.getItem("token");


    try {
      // Send a POST request to the server endpoint
      const response = await axios.post(
        "https://boostifytube-network-api.onrender.com/api/v1/payment/feeForAccount",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Handle the response
      if (response.status === 200) {

        // alert("payment send succefully");
        // Optionally reset the form or perform other actions
          Report.success(
            "Notiflix Success",
            '"Payment For Video Uploading has done succefully  "',
            "Okay"
          );

      } else {
        const errorData = response.data; // Assuming your API returns error information
        Notify.failure(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      Notify.failure("An error occurred while uploading the video");
    }
  };


  return (
    <>
      <div className="payment-section">
        <form
          className="payment-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ width: "500px" }}
        >
          <div className="card-input">
            <div className="card-info">
              <span>
                <img
                  src={creditCard}
                  alt=""
                  style={{ width: 70, height: 50 }}
                />

                <h3> Details</h3>
              </span>
              <label htmlFor="cardNumber">Phone Number</label>
              <input
                type="text"
                id="cardNumber"
                name="Number"
                {...register("Number", {
                  required: {
                    value: true,
                    message: "Phone Number is very Required",
                  },
                })}
                placeholder="phone number"
              />
          
            </div>
            <div className="payment-info">
              <span>
                <img src={visaCard} alt="" style={{ width: 50, height: 40 }} />

                <h3>Amount Details</h3>
              </span>
              <label htmlFor="cvc">Amount</label>
              <input
                type="text"
                id="cvc"
                name="Amount"
                {...register("Amount", {
                  required: {
                    value: true,
                    message: "Amount Money is very Required",
                  },
                })}
                placeholder="Enter Amount"
              />

      
            </div>
          </div>
          <div className="form-button" id="form-button">
            <button type="submit" className="uploadbutton">
              Submit Payment
            </button>
            <button type="clear" className="uploadbutton">
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
