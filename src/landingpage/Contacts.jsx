import React, { useState } from "react";
import "../Styles/Contacts.css";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import axios from "axios";
import { Notify } from "notiflix";

const Contacts = () => {

  const [formData, setFormData] = useState({
    Name:"",
    Email: "",
    Message: "", 
   
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ console.log(formData)
      await axios.post ('https://boostifytube-network-api.onrender.com/api/v1/user/contact',formData);
      Notify.success('Message sent sucessfully')
    } 

    catch (error){
      
      Notify.failure(error.message)
      console.log(error.response);
       }
       
      
        };


  return (
    <div className="contact-cont">
      <div className="content-cont">
        <div className="socialM">
          <h2 className="cont-title">Let's get in Touch with You!</h2>
            <p className="loc">
              <MdLocationPin className="soc1" />
              Kigali KN403
            </p>
            <p className="loc">
              <FaPhoneAlt className="soc1" />
              +250787615313
            </p>
            <p className="loc">
              <MdOutlineEmail className="soc1" />
              origingroup@gmail299.com
            </p>
            <div className="iconss">
              <FaSquareXTwitter className="soc" />
              <FaInstagram className="soc" />
              <FaTiktok className="soc" />
            </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>

          <form method="post" onSubmit={handleSubmit} className="form-contact">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="Name"
                id="Name"
                name="Name"
                className="contact-input"
                value={formData.Name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="Email"
                id="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="Message"
                name="Message"
                rows="4"
                value={formData.Message}
                onChange={handleChange}
                required
                className="textarea-input "
              ></textarea>
            </div>
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
