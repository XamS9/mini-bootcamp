const { DataTypes } = require("sequelize");
const sequelize = require("../dbconnect.js");
const Courses = require("./Courses.js");
const Sections = require("./Sections.js");
const Topics = require("./Topics.js");
const subCategories = sequelize.define(
  "subCategories",
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
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  },
  {
    timestamps: false,
  }
);

subCategories.hasMany(Topics, {
    foreignKey: "subCategoryId",
    sourceKey: "id"
});

Topics.belongsTo(subCategories, {
    foreignKey: "subCategoryId",
    targetId: "id"
});

subCategories.hasMany(Courses, {
  foreignKey: "subCategoryId",
  sourceKey: "id"
});

Courses.belongsTo(subCategories, {
  foreignKey: "subCategoryId",
  targetId: "id"
});

subCategories.hasMany(Sections, {
  foreignKey: "subCategoryId",
  sourceKey: "id"
});

Sections.belongsTo(subCategories, {
  foreignKey: "subCategoryId",
  targetId: "subCategoryId"
});



module.exports = subCategories;