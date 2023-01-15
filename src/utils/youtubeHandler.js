const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const opts = {
    height: '600',
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
    },
};

function verifyYoutubeAPIKey() {
    if (!YOUTUBE_API_KEY) {
        throw new Error("No API key is provided");
    }
}

export async function getYoutubeVideos(query) {
    verifyYoutubeAPIKey();

    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=${query}&maxResults=3`;
    const response = await fetch(url);
    const videos = await response.json();

    return videos.items;
}

export async function getYoutubeVideoComments(videoId) {
    verifyYoutubeAPIKey();

    const url = `https://www.googleapis.com/youtube/v3/commentThreads?key=${YOUTUBE_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50`;
    const response = await fetch(url);
    const comments = await response.json();
    return comments;
}
