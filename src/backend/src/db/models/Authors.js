const { DataTypes } = require("sequelize");
const sequelize = require("../dbconnect.js");
const Courses = require("./Courses.js");

const Authors = sequelize.define(
  "authors",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    born: {
      type: DataTypes.DATEONLY,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    creationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

Authors.hasMany(Courses, {
  foreignKey: "authorId",
  sourceKey: "id",
});

Courses.belongsTo(Authors, {
  foreignKey: "authorId",
  targetId: "id",
});

module.exports = Authors;
