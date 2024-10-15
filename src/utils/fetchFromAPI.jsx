import axios from "axios";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const fetchFromAPI = async (url) => {
  const YOUTUBE_VIDEOS_API =
    `https://www.googleapis.com/youtube/v3/${url}&maxResults=50&type=video&key=` +
    API_KEY;
//   console.log(url);
//   console.log(YOUTUBE_VIDEOS_API);

  try {
    const { data } = await axios.get(YOUTUBE_VIDEOS_API);
    return data;
  } catch (error) {
    console.error("Error fetching data from YouTube API:", error);
    throw error;
  }
};
