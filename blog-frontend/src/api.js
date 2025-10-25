import axios from "axios";

export const API_URL = "http://localhost:5000"; // replace with deployed backend URL

export const fetchPosts = async (search = "", page = 1, token) => {
  try {
    const res = await axios.get(`${API_URL}/posts`, {
      params: { search, page },
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const registerUser = async (user) => {
  const res = await axios.post(`${API_URL}/register`, user);
  return res.data;
};

export const loginUser = async (credentials) => {
  const res = await axios.post(`${API_URL}/login`, credentials);
  return res.data;
};

export const createPost = async (post, token) => {
  const res = await axios.post(`${API_URL}/posts`, post, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const addComment = async (comment, token) => {
  const res = await axios.post(`${API_URL}/comments`, comment, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
