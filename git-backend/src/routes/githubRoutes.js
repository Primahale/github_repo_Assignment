const express = require("express");
const { saveUserData } = require("../controllers/githubController");
const { findFriends } = require("../controllers/friendController");
const { deleteUser, searchUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/users/:username", saveUserData);
router.get("/users/:username/friends", findFriends);
router.get("/search", searchUsers);
router.delete("/users/:username", deleteUser);

module.exports = router;
