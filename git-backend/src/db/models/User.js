const { DataTypes, Model } = require("sequelize");
const sequelize = require("../index");

class User extends Model {}

User.init(
  {
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    location: DataTypes.STRING,
    blog: DataTypes.STRING,
    bio: DataTypes.TEXT,
    public_repos: DataTypes.INTEGER,
    public_gists: DataTypes.INTEGER,
    followers: DataTypes.INTEGER,
    following: DataTypes.INTEGER,
    isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  { sequelize, modelName: "User" }
);

module.exports = User;
