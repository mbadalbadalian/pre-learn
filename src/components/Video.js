
import * as youtube from "../utils/youtubeHandler";
import YouTube from 'react-youtube';

function Videos({ videoDetails }) {
  return (
    <div>
      <h1>{videoDetails.snippet.title}</h1>
      <p>{videoDetails.snippet.description}</p>
      <YouTube videoId={videoDetails.id.videoId} opts={youtube.opts} />
    </div>
  );
}

export default Videos;
