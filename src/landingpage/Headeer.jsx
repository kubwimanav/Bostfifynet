import "./Headeer.css";
import { Link } from "react-router-dom";
function Headeer() {
  return (
    <div className="headeer ">
      <div className="headeer-logo">
        <div className="watch-logo">
          <h1 className="logo">
            <p style={{color:'white'}}>BT</p> <p style={{ color: "#fee60c" }}>Net</p>{" "}
          </h1>
        </div>
      </div>

      <div className="header-buttonn">
        <Link to="/contactus">
          <button className="heade-button"> Contacts</button>
        </Link>
        <Link to="/Login">
          <button className="heade-button"> Login</button>
        </Link>
      </div>
    </div>
  );
}
export default Headeer;
