import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "../Styles/Videos.css";
import { MyContext } from "../context/Context";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "@tanstack/react-query";
export const CardSkelet = () => {
  return (
    
    <p>
      <Skeleton height={300} />
    </p>
   
  );
};
const VideoCard = ({ videoId }) => {
  const [skeletonLoader, setSkeletonLoader] = useState(false);
  const API_KEY = "AIzaSyBg7kgkqxO1QlKbVBAryoR47fywtpYd-5w";

  const { data: videoInfo, isLoading } = useQuery({

    queryKey: ["videos",videoId],

    queryFn: async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      );
      return response.data.items[0];
    },
  });
    useEffect(() => {
      setTimeout(() => {
        setSkeletonLoader(true);
      }, 7000);
      setSkeletonLoader(false);
    }, [isLoading]);


  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };


  return (
    <>
      {isLoading ? (
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              marginLeft: "100",
              gap: "0.5rem",
            }}
          >
            <Skeleton width={310} height={200} />.
            <div className="youtube-dive">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="video-details"
          style={{
            opacity: skeletonLoader ? "1" : "0",
          }}
        >
          <div className="video-details" style={{ width: "30%" }}>
            <div className="video-item2">
              <YouTube videoId={videoId} opts={opts} />

              <Link
                to={`/superdashboard/videos/${videoInfo.id}`}
                className="view-title"
              >
                <p id="det">{videoInfo.snippet.localized.title}</p>
              </Link>
              <div style={{ display: "flex" }}>
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
              <p id="det">{videoInfo.snippet.channelTitle}</p>
            </div>
          </div>
        </div>

      )}
    </>
  );
};


const Videos = () => {
  const { uploadedVideos } = MyContext();
  const videoLinks = uploadedVideos
    .map((video) => video?.linkOfVideo)
    .filter(Boolean);

  const getYouTubeVideoId = (url) => {
    const regex =
      /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoIdss = videoLinks
    .map((link) => getYouTubeVideoId(link))
    .filter(Boolean);

  return (
    <div className="video-cards-container1">
      {videoIdss.map((videoId, index) => (
        <VideoCard key={index} videoId={videoId} className="vidCard" />
      ))}
    </div>
  );
};

export default Videos;
