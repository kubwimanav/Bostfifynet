import React from "react";
import YouTube from "react-youtube";

export default function Example() {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId="6aU6y-9bjOo"
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}
