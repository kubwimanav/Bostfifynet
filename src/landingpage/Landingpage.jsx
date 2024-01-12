import { Outlet } from "react-router-dom"
import './Landing.css'
import Headeer from "./Headeer"
import Footer from "./Footer"
function Landingpage(){
    return(
        <div className="landing">
                <Headeer/>
            <div className="landing-outlet">
            <Outlet />
        </div>
            <Footer/> 
  </div>
    )
}
export default Landingpage