const { DataTypes } = require("sequelize");
const sequelize = require("../dbconnect.js");
const Sections = sequelize.define(
  "sections",
  {
    courseId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    name: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.TEXT,
    },
    subCategoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    topicId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Sections;
