import React from "react";
import { MyContext } from "../../context/Context";
import YouTube from "react-youtube";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../youtStyles/FirstPage.css";

const VideoCard = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "AIzaSyCLyB5T0faW7qGwhnq07DJCeSA4I5RXJ_M";

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        setVideoInfo(response.data.items[0]);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoInfo();
  }, [videoId, API_KEY]);

  if (loading) {
    return (
      <div className="video-details" style={{ width: "30%" }}>
        <Skeleton height={200} width={300} />
        <Skeleton count={60} />
      </div>
    );
  }

  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="video-details" style={{ width: "30%" }}>
      <div className="video-item2">
        <YouTube videoId={videoId} opts={opts} />

        <Link
          to={`/superdashboard/videos/${videoInfo.id}`}
          className="view-title"
        >
          <p id="det">{videoInfo.snippet.localized.title}</p>
        </Link>
        <div className="details1">
          <p id="det">{videoInfo.snippet.channelTitle}</p>
          <p id="det">
            <MdOutlineRemoveRedEye />
            {videoInfo.statistics.viewCount}
          </p>
          <p id="det">
            <AiOutlineLike />
            {videoInfo.statistics.likeCount}
          </p>
          <p id="det">
            <FaRegComment /> {videoInfo.statistics.commentCount}
          </p>
        </div>
      </div>
    </div>
  );
};

function MyUploadedVideo() {
  const { videoIdPerOwner } = MyContext();
  console.log("my uploded vivi", videoIdPerOwner);
  return (
    <>
      <div className="initialDashPage">
        <div>
          <h1 style={{ color: "#191943" }}>My Uploaded Videos</h1>
        </div>

        <div className="videeos1">
          {videoIdPerOwner.map((videoId, index) => (
            <VideoCard
              key={index}
              videoId={videoId}
              className="outuber-single-video-card"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MyUploadedVideo;
