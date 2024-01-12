import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/Context";
import "./Single-viewvideo.css";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

export const CardSkeleton = () => {
  return (
    <p>
      <Skeleton height={300} />
    </p>
  );
};

const VideoCard1 = ({ videoId }) => {
  const API_KEY = "AIzaSyBZyBQ1vYyLTYyVXZfiIHiQdPjH9Dpyaxo";
  const [videoInfo1, setVideoInfo1] = useState(null);

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
    setVideoInfo1(videoData1);
  }, [videoData1]);

  const opts2 = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="youtube-dive">
      <div className="video-it">
        <YouTube videoId={videoId} opts={opts2} />
        <Link to={`/dashboard/Videocardss/${videoId}`} className="view-title">
          <p id="det">{videoData1?.snippet.localized.title}</p>
        </Link>
        <div style={{ display: "flex" }}>
          <p id="det">
            <MdOutlineRemoveRedEye /> {videoData1?.statistics.viewCount}
          </p>
          <p id="det">
            <AiOutlineLike /> {videoData1?.statistics.likeCount}
          </p>
          <p id="det">
            <FaRegComment /> {videoData1?.statistics.commentCount}
          </p>
        </div>
        <p id="det" style={{ marginLeft: "5%" }}>
          Channel: {videoData1?.snippet.channelTitle}
        </p>
      </div>
    </div>
  );
};

const Singlevideo = () => {
  const { videoId } = useParams();
  const API_KEY = "AIzaSyBZyBQ1vYyLTYyVXZfiIHiQdPjH9Dpyaxo";
  const [videoInfo2, setVideoInfo2] = useState(null);
  const [skeletonLoader, setSkeletonLoader] = useState(false);

  const { uploadedVideos } = MyContext();
  let uploadedvideoId = [];
  for (let i = 0; i < uploadedVideos.length; i++) {
    uploadedvideoId.push(uploadedVideos[i]?._id);
  }

  const videoLinks2 = uploadedVideos
    .map((video) => video?.linkOfVideo)
    .filter(Boolean);

  const getYouTubeVideoId = (url) => {
    const regex =
      /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const currentId = uploadedVideos?.find((item) => {
    return getYouTubeVideoId(item.linkOfVideo) === videoId;
  })?._id;

  console.log(currentId);
  const videoIdss2 = videoLinks2
    .map((link) => getYouTubeVideoId(link))
    .filter(Boolean);

  const { data: videoInfo1, isLoading } = useQuery({
    queryKey: ["videos",videoId],
    queryFn: async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      );
      return response.data.items[0];
    },
  });

  useEffect(() => {
    setVideoInfo2(videoInfo1);
  }, [videoInfo1]);

  useEffect(() => {
    setTimeout(() => {
      setSkeletonLoader(true);
    }, 7000);
    setSkeletonLoader(false);
  }, [isLoading]);

  let token = localStorage.getItem("token");

  const trackMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        `https://boostifytube-network-api.onrender.com/api/v1/video/tracking/${currentId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return res.data;
    },
    onSuccess: (data) => {
      if (data.msg == "Already exists") {
        Report.failure(
          "Failed to Earn",
          '"You have already watched this video',
          "Okay"
        );
      } else {
        Report.success(
          "Earn Successfully",
          "You have successfully watched this video and earn 25Rwf",
          "Okay"
        );
      }
    },
    onError: (error) => {
      Notify.failure("View(s) being tracked");
      console.log(error.response.data);
    },
  });

  const handleVideoTrack = () => {
    trackMutation.mutate(uploadedvideoId);
  };

  return (
    <div className="view-videoo">
      <div className="video-item123">
        <YouTube
          style={{ width: "100%" }}
          videoId={videoId}
          opts={{
            borderRadius: "10",
            height: "350",
            width: "600",
            playerVars: { autoplay: 1, mute: 1 },
          }}
          allowFullScreen
          className="frame-view"
          onEnd={() => {
            return handleVideoTrack();
          }}
        />

        <p>{videoInfo1?.snippet.localized.title}</p>
        <div style={{ display: "flex", gap: "10%" }}>
          <p>
            {" "}
            <MdOutlineRemoveRedEye /> {videoInfo1?.statistics.viewCount}
          </p>
          <p>
            <AiOutlineLike /> {videoInfo1?.statistics.likeCount}
          </p>
          <p>
            <FaRegComment /> {videoInfo1?.statistics.commentCount}
          </p>
        </div>
        <p>Channel: {videoInfo1?.snippet.localized.channelTitle}</p>
      </div>
      {isLoading ? (
        <div>
          <div
            style={{
              width: "600",
              height: "350",
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
          style={{
            opacity: skeletonLoader ? "1" : "0",
          }}
        >
          <div className="video-container1">
            {videoIdss2
              .filter((id) => id !== videoId)
              .map((videoId2, index) => (
                <VideoCard1
                  key={index}
                  videoId={videoId2}
                  title={`Video ${index + 1}`}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Singlevideo;
