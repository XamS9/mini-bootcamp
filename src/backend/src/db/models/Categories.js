const { DataTypes } = require("sequelize");
const sequelize = require("../dbconnect.js");
const SubCategories = require("./SubCategories.js");
const Topics = require("./Topics.js");
const Courses = require("./Courses.js");
const Sections = require("./Sections.js");
const Categories = sequelize.define(
  "categories",
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
  },
  {
    timestamps: false,
  }
);

Categories.hasMany(SubCategories, {
    foreignKey: "categoryId",
    sourceKey: "id",
});

SubCategories.belongsTo(Categories, {
    foreignKey: "categoryId",
    targetId: "id"
});

Categories.hasMany(Topics, {
  foreignKey: "categoryId",
  sourceKey: "id",
});

Topics.belongsTo(Categories, {
  foreignKey: "categoryId",
  targetId: "id"
});

Categories.hasMany(Courses, {
  foreignKey: "categoryId",
  sourceKey: "id",
});

Courses.belongsTo(Categories, {
  foreignKey: "categoryId",
  targetId: "id"
});

Categories.hasMany(Sections, {
  foreignKey: "categoryId",
  sourceKey: "id",
});

Sections.belongsTo(Categories, {
  foreignKey: "categoryId",
  targetId: "id"
});




module.exports = Categories;