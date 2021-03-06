import axios from "axios";
const apiEndpoint = "http://localhost:5000/posts/";

export const fetchPosts = async () => await axios.get(apiEndpoint);

export const fetchSinglePost = async (id) =>
  await axios.get(`${apiEndpoint}${id}`);
