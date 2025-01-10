const { DataTypes, Model } = require("sequelize");
const sequelize = require("../index");

class Friend extends Model {}

Friend.init(
  {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    friendId: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, modelName: "Friend" }
);

module.exports = Friend;
