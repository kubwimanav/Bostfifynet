import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "./Video.css";
import { MyContext } from "../context/Context";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";

export const CardSkeleton = () => {
  return (
    <p>
      <Skeleton height={300} />
    </p>
  );
};

const Video = ({ videoId }) => {
  const API_KEY = "AIzaSyBZyBQ1vYyLTYyVXZfiIHiQdPjH9Dpyaxo";
  const [videoInfo, setVideoInfo] = useState(null);
  const [skeletonLoader, setSkeletonLoader] = useState(false);



  const { data: videoInf, isLoading } = useQuery({
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
          className="youtube-dive"
          style={{
            opacity: skeletonLoader ? "1" : "0",
          }}
        >
          <YouTube videoId={videoId} opts={opts} />
          <Link
            to={`/dashboard/Videocardss/${videoInf?.id}`}
            className="view-title"
          >
            <p id="det">
              {videoInf?.snippet.localized.title || (
                <Skeleton height={55} width={100} />
              )}
            </p>
          </Link>
          <div style={{ display: "flex" }}>
            <p id="det">
              <MdOutlineRemoveRedEye />
              {videoInf?.statistics.viewCount}
            </p>
            <p id="det">
              <AiOutlineLike /> {videoInf?.statistics.likeCount}
            </p>
            <p id="det">
              <FaRegComment /> {videoInf?.statistics.commentCount}
            </p>
          </div>

          <p id="det" style={{ marginLeft: "5%" }}>
            Channel: {videoInf?.snippet.channelTitle}
          </p>
        </div>
      )}
    </>
  );
};

const Videocardss = () => {
  const { uploadedVideos, videoLoading } = MyContext();
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
    <div className="videeos">
      {videoIdss?.map((videoId, index) => (
        <Video key={index} videoId={videoId} />
      ))}
    </div>
  );
};

export default Videocardss;
