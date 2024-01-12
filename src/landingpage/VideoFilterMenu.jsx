import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { MyContext } from "../context/Context";
import axios from "axios";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import styled from "styled-components";
import'../Styles/Videofilter.css'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useQuery } from "@tanstack/react-query";

export const CardSkeleton = () => {
  return (
    // <SkeletonTheme baseColor="red" highlightColor="red">
    <p>
      <Skeleton height={300} />
    </p>
    // </SkeletonTheme>
  );
};
const VideoCard = ({ videoId, category }) => {
  const API_KEY = "AIzaSyBZyBQ1vYyLTYyVXZfiIHiQdPjH9Dpyaxo"; // Replace with your actual API key
  const [skeletonLoader, setSkeletonLoader] = useState(false);
  const { data: videoData1, isLoading } = useQuery({
    queryKey: ["videos", videoId],
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
    height: "170",
    width: "270",
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
          className="youtuber-singdle-video-cardss"
            style={{
            opacity: skeletonLoader ? "1" : "0",
          }}
        >
          <div className="youtuber-single-videocard" >
            <YouTube videoId={videoId} opts={opts} />
            <p id="detail-title">
              {videoData1.snippet.localized.title.slice(0, 50)}
            </p>
            <div style={{display:"flex",gap:'10'}}>
              <p id="detail">
                <MdOutlineRemoveRedEye /> {videoData1.statistics.viewCount}
              </p>
              <p id="detail">
                <AiOutlineLike /> {videoData1.statistics.likeCount}
              </p>
              <p id="detail">
                {" "}
                <FaRegComment /> {videoData1.statistics.commentCount}
              </p>
            </div>

            <p id="detail">Channel: {videoData1.snippet.channelTitle}</p>
          </div>
        </div>
      )}
    </>
  );
};

const VideoFilterMenu = () => {
  const { VideoDiscription, videoIdPerOwner, allVideoID } = MyContext();
  console.log("video filter ffff", videoIdPerOwner);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterVideos = (category) => {
    setSelectedCategory(category);
  };

  const videoData = [
    { id: 1, title: "Video 1", category: "Trends" },
    { id: 2, title: "Video 2", category: "Popular" },
    { id: 3, title: "Video 3", category: "Music" },
    { id: 4, title: "Video 4", category: "Movies" },
    // Add more dummy data as needed
  ];

  const filteredVideos =
    selectedCategory === "All"
      ? videoData
      : videoData.filter((video) => video.category === selectedCategory);

  return (
    <div className="VideoFilterContainer">
      <h2 style={{ color: "black" }}>Highlight</h2>
      <div className="filtermenu">
        <button
          className="filterhome-button"
          onClick={() => filterVideos("All")}
        >
          All
        </button>
        <button
          className="filterhome-button"
          onClick={() => filterVideos("Trends")}
        >
          Trends
        </button>
        <button
          className="filterhome-button"
          onClick={() => filterVideos("Popular")}
        >
          Popular
        </button>
        <button
          className="filterhome-button"
          onClick={() => filterVideos("Music")}
        >
          Music
        </button>
        <button
          className="filterhome-button"
          onClick={() => filterVideos("Movies")}
        >
          Movies
        </button>
      </div>

      <div className="videofilterhomess">
        {allVideoID.slice(13, 21).map((videoId, index) => (
          <VideoCard
            key={index}
            videoId={videoId}
            category={selectedCategory}
            // style={{width:"200px"}}
          />
        ))}
      </div>
    </div>
  );
};


export default VideoFilterMenu;
