const { DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect.js");
const Courses = require("./Courses.js");
const Topics = sequelize.define(
  "topics",
  {
    topicId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Topics.hasMany(Courses, {
    foreignKey: "topicId",
    sourceKey: "topicId"
});

Courses.belongsTo(Topics, {
    foreignKey: "topicId",
    targetId: "topicId"
});

module.exports = Topics;