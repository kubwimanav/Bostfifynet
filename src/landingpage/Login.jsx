import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import imag from "../images/login-picture.png";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const Login = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://boostifytube-network-api.onrender.com/api/v1/auth/login",
        formData
      );

      Notify.success("login sucessfully");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userdata", JSON.stringify(res.data));

      if (res.data.userInfo.role == "admin") {
        navigate("/superdashboard");
      } else if (res.data.userInfo.role == "Viewer") {
        navigate("/dashboard");
      } else {
        navigate("/youtuberDash");
      }
    } catch (error) {
      console.log(error.response);
      Notify.failure(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <div className="login-img">
        <img src={imag} />
      </div>

      <div className="login-container">
        <b>Login here</b>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-email">
            <label>Email:</label>
            <input
              type="Email"
              name="Email"
              required
              value={formData.Email}
              onChange={handleChange}
              className="login-input"
            />
            <label>Password:</label>
            <input
              type="Password"
              name="Password"
              required
              value={formData.Password}
              onChange={handleChange}
              className="login-input"
            />
          </div>

          <button type="submit" className="login-buttonnn">
            Login
          </button>
        </form>
        <p className="login-signup">
          New to the site?
          <a href="signup" className="login-link">
            signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
