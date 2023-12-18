import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: apiUrl,
  params: {
    part: "snippet",
    maxResults: 25,
    key: apiKey,
  },
});
