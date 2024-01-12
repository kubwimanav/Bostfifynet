import React from "react";
import "./Watchhome.css";
const Wacthhome = () => {
  return (
    <div className="watch-homee">
      <div className="watch-home2">
        <h1 style={{ color: "#191943" }}>
          What will you earn after watching Video?
        </h1>
        <li className="watchhome-p" >
          You will earn money after watching videos to the end. watch the video
          without speeding it up. When the video you were watching reaches to
          the end, your balance will be increased automatically. After that you
          can do withdraw. The minimum withdraw is 100 Rwf
        </li>
      </div>

      <div className="watch-home1" >
        <h1 style={{ color: "#191943" }}>Rules and regulations</h1>
        <ul className="ul">
          <li>Watch video until the end Without speeding it up.</li>
          <li>If your make it well you will earn 20 Rwf per video</li>
          <li>If you speed up video, your balance is not going to increase</li>
          <li>minmum for withdraw is 1000 Rwf</li>
        </ul>
      </div>
    </div>
  );
};
export default Wacthhome;
