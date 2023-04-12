const { DataTypes, DatabaseError } = require("sequelize");
const sequelize = require("../dbconnect.js");
const Courses = require("./Courses.js");
const Sections = require("./Sections.js");
const Topics = sequelize.define(
  "topics",
  {
    id: {
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
    subCategoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: false,
  }
);

Topics.hasMany(Courses, {
  foreignKey: "topicId",
  sourceKey: "id",
});

Courses.belongsTo(Topics, {
  foreignKey: "topicId",
  targetId: "id",
});

Topics.hasMany(Sections, {
  foreignKey: "topicId",
  sourceKey: "id",
});

Sections.belongsTo(Topics, {
  foreignKey: "topicId",
  targetId: "id",
});

module.exports = Topics;
