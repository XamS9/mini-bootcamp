const { DataTypes } = require("sequelize");
const sequelize = require("../dbconnect.js");
const Courses = sequelize.define(
  "courses",
  {
    courseId: {
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

module.exports = Courses;
