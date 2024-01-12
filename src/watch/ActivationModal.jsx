import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IoMdCloseCircleOutline } from "react-icons/io";
import momo from "../../public/images/momo.jpeg";
import { MyContext } from "../context/Context";

const ActivationModal = ({ onClose }) => {
  const [activeMethod, setActiveMethod] = useState("mobileMoney");
  const { activationMutation } = MyContext();

  const [activatingNUmber, setactivatingNUmber] = useState({
    Number: "",
  });

  const handleChange = (e) => {
    setactivatingNUmber({
      ...activatingNUmber,
      [e.target.name]: e.target.value,
    });
  };
  const handleactivation = async (e) => {
    e.preventDefault();

    const { Number } = activatingNUmber;
    console.log(activatingNUmber);
    activationMutation.mutate({
      Number,
    });
  };

  const handleMethodChange = (method) => {
    setActiveMethod(method);
  };
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  // const onSubmit = async (data) => {
  // const accessToken = localStorage.getItem("token");
  // console.log(data);
  // try {
  //   const response = await axios.post(
  //     "https://boostifytube-network-api.onrender.com/api/v1/payment/feeForAccount",
  //     data,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   if (response.status === 200) {
  //     Notify.success("payment send succefully");
  //   } else {
  //     const errorData = response.data;
  //   }
  // } catch (error) {
  //   console.error("Error:", error);
  //   Notify.failure("An error occurred while uploading the video");
  // }
  // };

  return (
    <div
      className="overlay"
      style={{
        width: "100%",
        marginLeft: "17.5%",
        height: "90%",
        marginTop: "7.5rem",
      }}
    >
      <PaymentContainer>
        <CloseButton onClick={onClose}>
          <IoMdCloseCircleOutline
            style={{ fontSize: "2rem", color: "#191943" }}
          />
        </CloseButton>
        <div className="header2">
          <PaymentMethods
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "#191943" }}>Pay with Mobile Money</h1>
            <img
              src={momo}
              alt=""
              style={{ width: "10%", marginLeft: "1rem" }}
            />
          </PaymentMethods>
        </div>
        <PaymentFormContainer>
          {activeMethod === "mobileMoney" && (
            <MobileMoneyForm>
              <div className="paymentForm">
                <div className="FormDiv">
                  <p style={{ color: "#191943" }}>
                    To activate your account and enable its functionalities, a
                    payment of 2000 Rwf is required. This ensures that your
                    account is fully operational and ready for use.
                  </p>
                </div>
                <div className="FormDiv">
                  <form onSubmit={handleactivation}>
                    <label style={{ color: "#191943" }}>
                      Mobile Money Number:
                    </label>
                    <input
                      type="number"
                      id="cardNumber"
                      name="Number"
                      placeholder="Phone number"
                      onChange={handleChange}
                      value={activatingNUmber.Number}
                    />
                    {/* <input
                      type="number"
                      id="cardNumber"
                      name="Amount"
                      placeholder="Amount"
                      onChange={handleChange}
                      value={activatingNUmber.Amount}
                    /> */}
                    <div className="form-button">
                      <button type="submit">Pay with Mobile Money</button>
                      <button>clear</button>
                    </div>
                  </form>
                </div>
              </div>
            </MobileMoneyForm>
          )}
        </PaymentFormContainer>
      </PaymentContainer>
    </div>
  );
};
const PaymentContainer = styled.div`
  margin: 3rem 0rem 3rem 7rem;
  box-shadow: 0px 2px 2px 2px #ccc;
  padding: 0rem 2rem;
  width: 60%;
  background-color: #ffffff;

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
    background-color: #1919343;
    width: 50%;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
  .form-button button:hover {
    background-color: #191943;
    color: #fgf;
    cursor: pointer;
    width: 50%;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
`;
const CloseButton = styled.button`
  margin-left: 90%;
  padding: 0.5rem 1rem;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
`;

const PaymentMethods = styled.div`
  display: flex;
`;

const MethodButton = styled.button`
  background-color: "red";
  color: "#fff";
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
    height: 0px;
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

export default ActivationModal;
