const { DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect.js");
const Courses = sequelize.define(
  "courses",
  {
    coursesId: {
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