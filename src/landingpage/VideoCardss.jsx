import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "../Styles/videoCardss.css";
import { MyContext } from "../context/Context";
import axios from "axios";


  const VideoCard = ({ videoId}) => {
  const [videoData, setVideoData] = useState(null);
  const API_KEY = "AIzaSyBZyBQ1vYyLTYyVXZfiIHiQdPjH9Dpyaxo"; // Replace with your actual API key

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        setVideoData(response.data.items[0]);
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
    <div className="video-details">
      <div className="video-item">
        <YouTube videoId={videoId} opts={opts} />
        <p id="det">{videoData.snippet.localized.title}</p>
        <p id="det">Views: {videoData.statistics.viewCount}</p>
        <p id="det">Likes: {videoData.statistics.likeCount}</p>
        <p id="det">Comments: {videoData.statistics.commentCount}</p>
        <p id="det">Channel: {videoData.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

const VideoCardss = () => {
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
    <div className="video-cards-container">
      {videoIdss.slice(0, 6).map((videoId, index) => (
        <VideoCard key={index} videoId={videoId} title={`Video ${index + 1}`} />
      ))}
    </div>
  );
};

export default VideoCardss;
