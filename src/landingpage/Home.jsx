import React from "react";
import "../Styles/home.css";
import pic from "../../public/images/homepiccc.png";
import VideoSection from "./VideoSection";
import VideoCardss from "./VideoCardss";
import Recommend from "./Recommend";
import Services from "./Services";
import VideoFilterMenu from "./VideoFilterMenu";
import PaymentForm from "../youtuber-Dash/youtuber components/PaymentForm";
const Home = () => {
  return (
    <>
      <div className="home-continer">

        {/* <div className="home-picturee">
          <img src={pic} alt="" id="home-pictureeId" />
        </div> */}

     
        <div className="home-description">
          <h2 id="title1">Boost Your YouTube Channel, Earn Rewards!</h2>
          <p id="desc1">
            Welcome to ORGIN GROUP LTD, the perfect place where content creators
            and viewers can benefit from each other. Are you a YouTuber looking
            to boost your video views? Or maybe you enjoy watching videos and
            would like to earn rewards while doing so? Look no further - you
            have come to the right place!
          </p>
          <button className="get">Get Starterd</button>
        </div>
      </div>
      <Services />
      <VideoSection />
      <VideoFilterMenu />
   

      {/* <VideoCardss /> */}
    </>
  );
};

export default Home;
