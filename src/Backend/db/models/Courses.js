const { DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect.js.js");
const Petitions = require("./Petitions.js");
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

Courses.hasMany(Petitions, {
  foreignKey: "courseId",
  sourceKey: "courseId"
});

Petitions.belongsTo(Courses, {
  foreignKey: "courseId",
  targetId: "courseId"
})

module.exports = Courses;
