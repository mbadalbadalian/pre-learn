import { useState, useEffect } from "react";
import '../styles/Results.css';
import Videos from "./Video";
import * as youtubeHandler from "../utnpmils/youtubeHandler";
import * as questionsHandler from "../utils/questionsHandler";
import * as constants from "../utils/constants";
import { stringify } from "querystring";
/*
const pd = require("node-pandas");
const personalPythonScript = 'C:/Users/matth/Documents/pre-learn/ML/ClassifyYouTubeComments.py';
const fs = require('fs');
const { execFile } = require('child_process'); 
*/

function Results({ setCurrentPageTab }) {
  const [videoDetails, setVideoDetails] = useState(undefined);

  useEffect(() => {
    console.log('Fetching');
    async function fetchData() {
      let newTopics = [];

      if (!videoDetails) {
        console.log("Topics: " + JSON.stringify(constants.TOPICS))
        for await (const topic of constants.TOPICS) {
          let query = topic.name;
          if (topic.score === 1) {
            query = topic.name + ' basics';
          } else if (topic.score === 2) {
            query = topic.name + ' intermediate';
          } else if (topic.score === 3) {
            query = topic.name + ' advanced';
          } else {
            return;
          }
          console.log("Query:" + query);

          const videos = await youtubeHandler.getYoutubeVideos(query);
          console.log("Videos:" + videos);

          let commentsPerVideo = [];
          for await (const video of videos) {
            const comments = await youtubeHandler.getYoutubeVideoComments(video.id.videoId);
            commentsPerVideo.push(comments);
          }
          console.log("Comments:" + commentsPerVideo);

          newTopics.push({
            name: topic.name,
            score: topic.score,
            videos: videos,
            comments: commentsPerVideo
          });
          console.log(newTopics);
          
          /*
           columns = ['listOfVideoIDs']);
          const csv2 = df2.to_csv();
          fs.writeFileSync(filename, csv2);

          const df3 = pandas.DataFrame(listFilenames, columns = ['listFilenames']);
          const csv3 = df3.to_csv();
          fs.writeFileSync(filename, csv3);

          const pythonScript = personalPythonScript;

          execFile('python', [pythonScript], (error, stdout, stderr) => {
            if (error) {
              throw error;
            }
            console.log(stdout);
          });
          */
          //open json which contains the updated order of videos IDS
          //newListOfVideo_IDs
        };
        setVideoDetails(newTopics)
      }
    }
    fetchData();
  }, []);

  return (
    <div class="results">
      <h1>
        Results
      </h1>
      <h2>
        Score: {questionsHandler.getScore()}
      </h2>

      {videoDetails === undefined ? (
        <h1>Loading suggested videos...</h1>
      ) :
        videoDetails.map((topic) => (
          <div>
            <h1>{topic.name} : {topic.score}</h1>
            {topic.videos.map((video) => (
              <Videos videoDetails={video}></Videos>
            ))}
          </div>
        ))


      }
    </div>
  );
}

export default Results;
