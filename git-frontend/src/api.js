import axios from "axios";

const GITHUB_API = "https://api.github.com/users";
// const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// const config = {
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//     },
//   };

export const fetchUserInfo = async (username) => {
  const { data } = await axios.get(`${GITHUB_API}/${username}`);
  return data;
};

export const fetchRepositories = async (username) => {
  const { data } = await axios.get(`${GITHUB_API}/${username}/repos`);
  return data;
};

export const fetchFollowers = async (username) => {
  const { data } = await axios.get(`${GITHUB_API}/${username}/followers`);
  return data;
};
