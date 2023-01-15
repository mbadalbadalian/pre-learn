const { YOUTUBE_API_KEY } = require("../config");

export const opts = {
    height: '200',
    width: '200',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};

function verifyYoutubeAPIKey() {
    if (!YOUTUBE_API_KEY) {
        throw new Error("No API key is provided");
    }
}

export async function getYoutubeVideos(query) {
    verifyYoutubeAPIKey();

    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=${query}`;
    const response = await fetch(url);
    const videos = await response.json();

    // const video = videos.items[0].id.videoId;
    // console.log(videos);

    return videos.items;
}
