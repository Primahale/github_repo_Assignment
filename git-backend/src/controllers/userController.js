const User = require("../db/models/User");

// Soft delete user
const deleteUser = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ where: { username, isDeleted: false } });
    if (!user) return res.status(404).json({ error: "User not found" });

    user.isDeleted = true;
    await user.save();
    res.status(200).json({ message: "User soft deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to delete user." });
  }
};

// Search users by fields
const searchUsers = async (req, res) => {
  try {
    const { username, location } = req.query;

    const users = await User.findAll({
      where: {
        isDeleted: false,
        ...(username && { username }),
        ...(location && { location }),
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to search users." });
  }
};

module.exports = { deleteUser, searchUsers };
