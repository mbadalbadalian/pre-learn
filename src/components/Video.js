
import * as youtube from "../utils/youtubeHandler";
import YouTube from 'react-youtube';

function Videos({ videoId, name, description}) {
  return (
    <div>
    <h1>{name}</h1>
    <p>{description}</p>
    <YouTube videoId={videoId} opts={youtube.opts} />

    </div>
  );
}

export default Videos;
