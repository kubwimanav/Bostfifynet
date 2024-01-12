import React from "react";
import "../youtStyles/FirstPage.css";
import DashCards from "./DashCards";
import { FaEye, FaBell } from "react-icons/fa";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import YouTube from "react-youtube";
import { MyContext } from "../../context/Context";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import YoutuberChats from "./YoutuberChats";

const VideoCard = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);
  const API_KEY = "AIzaSyCLyB5T0faW7qGwhnq07DJCeSA4I5RXJ_M";

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        setVideoData(response.data.items[0]);
        // console.log(" rere..", response.data.items[0].snippet.channelTitle);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, [videoId, API_KEY]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="youtuber-singdle-video-cardss">
      <div className="youtuber-single-video-card">
        <YouTube videoId={videoId} opts={opts} />
        <p id="detail-title">
          {videoData.snippet.localized.title.slice(0, 50)}
        </p>
        <p id="detail">Views: {videoData.statistics.viewCount}</p>
        <p id="detail">Likes: {videoData.statistics.likeCount}</p>
        <p id="detail">Comments: {videoData.statistics.commentCount}</p>
        <p id="detail">Channel: {videoData.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

function FirstPage() {
  const { videoIdPerOwner } = MyContext();

  return (
    <div className="initialDashPage">
      <div>
        <h1 style={{ color: "#191943" }}>Welcome to Your Dashboard</h1>
      </div>
      <div className="dash-highlight">
        <DashCards
          num={"70K"}
          icon={<FaEye id="iconyt" />}
          title={"Viewer"}
          style="backgroundColor:black"
        />

        <DashCards
          num={"10K"}
          icon={
            <FaBell id="iconyt" />
          }
          title={"Sub"}
        />
        <DashCards
          num={"710K"}
          icon={
            <MdOutlineThumbUpAlt
              id="iconyt"
            />
          }
          title={"Likes"}
        />
        <DashCards
          num={"30K"}
          icon={<FiMessageCircle  id="iconyt" />}
          title={"Comment"}
        />
      </div>
      <YoutuberChats />
    </div>
  );
}

export default FirstPage;
