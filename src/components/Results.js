import { useState, useEffect } from "react";
import '../styles/Results.css';
import Videos from "./Video";
import * as youtubeHandler from "../utils/youtubeHandler";

function Results({ setCurrentPageTab, currentCourse }) {
  const [videoDetails, setVideoDetails] = useState(undefined);

  useEffect(() => {
    if (!videoDetails) {
      youtubeHandler.getYoutubeVideos(currentCourse).then((videos) => {
        youtubeHandler.getYoutubeVideoComments(videos[0].id.videoId).then((comments) => {
          console.log(comments.items);
          setVideoDetails([videos[0], comments]);
        });
      });
    }
  });

  return (
    <div class = "results">
      <h1>
        Results
      </h1>
      {videoDetails !== undefined ? (
        <Videos videoDetails={videoDetails[0]}></Videos>
      ) : <h1>Loading suggested videos...</h1>}
      {videoDetails !== undefined ? videoDetails[1].items.map((comment) => (
        <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
      )) : ""}
    </div>
  );
}

export default Results;
