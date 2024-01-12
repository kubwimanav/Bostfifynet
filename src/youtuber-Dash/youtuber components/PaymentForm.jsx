import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import momo from "../../assets/picture/assets/momo.jpeg"
import paypal from "../../assets/picture/assets/paypal.png"
import { Notify } from "notiflix/build/notiflix-notify-aio";
import visa from "../../assets/picture/assets/visaCard.png"
import { Report } from "notiflix";

import creditCard from "../img/creditCard.jpg";
import visaCard from "../img/visaCard.jpeg";
const PaymentForm = ({ isOpen, onClose }) => {
  
    // if (!isOpen) return null;
  const [activeMethod, setActiveMethod] = useState("mobileMoney");

  const handleMethodChange = (method) => {
    setActiveMethod(method);
  };
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = async (data) => {
    const accessToken = localStorage.getItem("token");
    console.log("payment form send", data);
    console.log("my token", accessToken);

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
        Report.success(
          "Transaction Success",
          '"Payment For Video Uploading has done succefully  "',
          "Okay"
        );
        console.log("my payment",response);
        // Optionally reset the form or perform other actions
      } else {
        const errorData = response.data; // Assuming your API returns error information
        // alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred in transation payment");

    }
  };

  return (
    <>
      <PaymentContainer>
          <h2 style={{ color: "#191945" ,marginBottom:"2rem",display:"flex",justifyContent:"start"}}>Video Upload Payment Form</h2>
        <PaymentMethods>
          <span>
            <img src={momo} alt="" />
            <MethodButton
              onClick={() => handleMethodChange("mobileMoney")}
              active={activeMethod === "mobileMoney"}
            >
              Mobile Money
            </MethodButton>
          </span>
          {/* <span>
            <img src={paypal} alt="" />
            <MethodButton
              onClick={() => handleMethodChange("paypal")}
              active={activeMethod === "paypal"}
            >
              PayPal
            </MethodButton>
          </span>
          <span>
            <img src={visa} alt="" />
            <MethodButton
              onClick={() => handleMethodChange("creditCard")}
              active={activeMethod === "creditCard"}
            >
              Credit Card
            </MethodButton>
          </span> */}
        </PaymentMethods>

        <PaymentFormContainer>
          {activeMethod === "mobileMoney" && (
            <MobileMoneyForm onSubmit={handleSubmit(onSubmit)}>
              {/* Mobile Money Form Fields */}
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="paymentForm">
                  <div className="FormDiv">
                    <label style={{ color: "#191943" }}>
                      Mobile Money Number:
                    </label>
                    {/* <input
                  type="text"
                  placeholder="Enter your mobile money number"
                /> */}

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
                  <div className="FormDiv">
                    <label style={{ color: "#191943" }}>Payment Amount:</label>
                    {/* <input type="text" placeholder="EnterAmount" /> */}

                    <label style={{ color: "#191943" }} htmlFor="">
                      <h3>MOMO Payment Amount of 250,000fr</h3>
                    </label>
                  </div>
                </div>
                <div className="form-button">
                  <button type="submit">Pay with Mobile Money</button>
                  <button type="reset">clear</button>
                  {/* <button onClick={onClose}>close</button> */}
                </div>
              </form>
            </MobileMoneyForm>
          )}

          {activeMethod === "paypal" && (
            <PaypalForm>
              <div className="paymentForm">
                <div className="FormDiv">
                  <label style={{ color: "#191943" }}>PayPal Email:</label>
                  <input type="text" placeholder="Enter your PayPal email" />
                  <label style={{ color: "#191943" }}>User Name:</label>
                  <input type="text" placeholder="Enter your PayPal email" />
                </div>
                <div className="FormDiv">
                  <label style={{ color: "#191943" }}>Amount:</label>
                  <input type="text" placeholder="Enter your PayPal email" />
                  <label style={{ color: "#191943" }}>Phone Number:</label>
                  <input type="text" placeholder="Enter your PayPal email" />
                </div>
              </div>
              <div className="form-button">
                <button>Pay with PayPal</button>
                <button>clear</button>
              </div>
            </PaypalForm>
          )}

          {activeMethod === "creditCard" && (
            <CreditCardForm>
              {/* Credit Card Form Fields */}
              <div className="paymentForm">
                <div className="FormDiv">
                  <label style={{ color: "#191943" }}>
                    Credit Card Number:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your credit card number"
                  />
                  <label style={{ color: "#191943" }}>Expiry Date:</label>
                  <input type="text" placeholder="MM/YYYY" />
                </div>
                <div className="FormDiv">
                  <label style={{ color: "#191943" }}>Amount</label>
                  <input type="text" placeholder="Enter your Amount" />
                  <label style={{ color: "#191943" }}>CVC:</label>
                  <input type="text" placeholder="CVC" />
                </div>
              </div>
              <div className="form-button">
                <button>Pay with Credit Card</button>

                <button>clear</button>
              </div>
            </CreditCardForm>
          )}
        </PaymentFormContainer>
      </PaymentContainer>
    </>
  );
};

const PaymentContainer = styled.div`
  // position: absolute;

  display: flex;
  flex-direction: column;
  // justify-content: start;
  background-color: #fafafa;

  max-width: 1800px;
  max-height: 1000px;
  margin: 1rem auto;
  // border: 1px solid red;
  // box-shadow: 0px 2px 2px 2px #ccc;
  padding: 2rem;
  // z-index: 10;

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 0.1px solid #ccc;
  }
  label {
    color: "#191943";
  }
  .paymentForm {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
  .FormDiv {
    display: flex;
    flex-direction: column;
    gap: 0.51rem;
    margin-bottom: 1rem;
    flex: 1;
  }
  .form-button button {
    background-color: var(--skin-color);
    width: 50%;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
  .form-button button:hover {
    background-color: #191945;
    color: #fff;
    cursor: pointer;
    width: 50%;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  span {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    flex-wrap: wrap;
    gap: 0.5rem;
    height: 40px;
    // border: 1px solid red;
  }
  span img
  {
    height:40px;
  }
`;

const MethodButton = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.active ? "#fee60c" : "#191943")};
  color: ${(props) => (props.active ? "#000" : "#fff")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
 
`;

const PaymentFormContainer = styled.div`
  overflow: hidden;
`;

const MobileMoneyForm = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  button {
    background-color: var(--skin-color);
    width: 50%;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
  .form-button button:hover {
    background-color: #191943;
    color: #fff;
    cursor: pointer;
    width: 50%;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
`;

const PaypalForm = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CreditCardForm = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default PaymentForm;
