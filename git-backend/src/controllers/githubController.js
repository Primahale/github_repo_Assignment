const axios = require("axios");
const User = require("../db/models/User");

const GITHUB_API_URL = "https://api.github.com/users";

// Fetch and save GitHub user data
const saveUserData = async (req, res) => {
  try {
    const { username } = req.params;

    // Check if the user is already in the database
    let user = await User.findOne({ where: { username, isDeleted: false } });
    if (user) return res.json(user);

    // Fetch data from GitHub API
    const { data } = await axios.get(`${GITHUB_API_URL}/${username}`);
    user = await User.create({
      username: data.login,
      location: data.location,
      blog: data.blog,
      bio: data.bio,
      public_repos: data.public_repos,
      public_gists: data.public_gists,
      followers: data.followers,
      following: data.following,
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch data from GitHub." });
  }
};

module.exports = { saveUserData };
