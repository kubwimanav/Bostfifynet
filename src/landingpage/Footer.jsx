import { BsTwitterX } from "react-icons/bs";
import { FaInstagram ,FaFacebookF ,FaTiktok} from "react-icons/fa";
import'./Footer.css'
function Footer(){
    return (
      <div className="footer">
        <div className="footer-div">
          <div className="footer-class">
            <b style={{ color: "white" }}>Mission</b>
            <div className="footer-contact">
              <p>
                Explore unlimited After Effects
                <br />
                templates Elevate your videos <br />
                with high-quality, easy-to-use
                <br />
                After Effects templates.{" "}
              </p>
            </div>
          </div>
          <div className="footer-class">
            <b style={{ color: "white" }}>Contact us</b>
            <div className="footer-contact">
              <p>orgingroup299@gmail.com</p>
              <p>+250789466837</p>
              <p>Kigali, Rwanda</p>
              <p>KN 404 st.</p>
            </div>
          </div>
          <div className="footer-class">
            <b style={{ color: "white" }}>Quick links</b>
            <div className="footer-contact">
              <p>Login</p>
              <p>Signup</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className="footer-class">
            <b style={{ color: "white" }}>Privacy</b>
            <div className="footer-contact">
              <p>Terms & Policies</p>
              <p>Partners</p>
              <p>Clients</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className="footer-sub-icon">
            <div className="footer-subscribe">
              <input type="text" placeholder="Enter your email" />
              <button className="footer-button">Subscribe</button>
            </div>
            <div className="footer-icon">
              <BsTwitterX />
              <FaTiktok />
              <FaInstagram />
              <FaFacebookF />
            </div>
          </div>
        </div>
        <p className="copy-right">
          Orgin Group  © 2024 All rights reserved
        </p>
      </div>
    );
} export default Footer