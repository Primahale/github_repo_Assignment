const axios = require("axios");
const User = require("../db/models/User");
const Friend = require("../db/models/Friend");

const findFriends = async (req, res) => {
  try {
    const { username } = req.params;

    // Check if user exists in the database
    const user = await User.findOne({ where: { username, isDeleted: false } });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Fetch followers and following from GitHub API
    const followersRes = await axios.get(`https://api.github.com/users/${username}/followers`);
    const followingRes = await axios.get(`https://api.github.com/users/${username}/following`);

    const followers = followersRes.data.map((f) => f.login);
    const following = followingRes.data.map((f) => f.login);

    // Find mutual users
    const mutuals = followers.filter((f) => following.includes(f));

    // Save friends in the Friend table
    for (const mutual of mutuals) {
      const friend = await User.findOne({ where: { username: mutual } });
      if (friend) {
        await Friend.create({ userId: user.id, friendId: friend.id });
      }
    }

    res.status(200).json({ message: "Friends saved successfully", mutuals });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to find friends." });
  }
};

module.exports = { findFriends };
