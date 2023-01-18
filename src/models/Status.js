const { DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect.js");
const Courses = require("./Courses.js");
const Status = sequelize.define(
  "status",
  {
    statusId: {
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

Status.hasMany(Courses, {
  foreignKey: "statusId",
  sourceKey: "statusId",
});

Courses.belongsTo(Status, {
  foreignKey: "statusId",
  targetId: "statusId",
});

module.exports = Status;
