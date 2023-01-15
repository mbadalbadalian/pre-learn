import { useState, useEffect } from "react";
import '../styles/Home.css';
import Videos from "./Video";
import * as youtubeHandler from "../utils/youtubeHandler";

function Results({ setCurrentPageTab, currentCourse }) {
  const [videoDetails, setVideoDetails] = useState(undefined);

  useEffect(() => {
    if (!videoDetails) {
      youtubeHandler.getYoutubeVideos(currentCourse).then((videos) => {
        console.log(videos);
        setVideoDetails(videos[0]);
      })
    }
  });

  return (
    <div>
      <h1>
        Results
      </h1>
      <ul>
        Ngl u kinda failed, nothing can help you buddy
      </ul>

      {videoDetails !== undefined && (
        <Videos videoDetails={videoDetails}></Videos>
      )}
    </div>
  );
}

export default Results;
