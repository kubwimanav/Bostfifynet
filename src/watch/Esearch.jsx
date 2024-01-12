import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineVideoSettings } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import '../watch/Sidebar.css'
import { Link } from "react-router-dom";
import './Esearch.css'
function Esearch({openModal}){
    return(
        <div className=" esearch" onClick={openModal}>
            <div className="sidebar1">
                <Link to='home' className="sidebar-text">
            <AiOutlineHome className="sidebar-icon"/>
                  <p>
                  Home
                  </p>
                    
                </Link>
                <Link to='video' className="sidebar-text">
                <MdOutlineVideoSettings className="sidebar-icon" />
               
                <p> Videos</p>
                </Link>
                <Link to='balance' className="sidebar-text">
                <GiMoneyStack className="sidebar-icon" />
            <p>  Balance</p>
                </Link>
                <Link className="sidebar-text">
                <BsCurrencyDollar className="sidebar-icon" />
            
            <p>Earnings</p>
                </Link>
            </div>
            <div className="setting-sidebar">

                <Link className="sidebar-text">
            <AiOutlineHome className="sidebar-icon"/>
            <p>Profile </p>
                </Link>
                <Link to='setting' className="sidebar-text">
                <IoSettingsOutline  className="sidebar-icon"/>
           <p> Setting</p>
                </Link>
            </div>
        </div>
    )
}

export default Esearch