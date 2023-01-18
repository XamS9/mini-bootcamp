const { DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect.js");
const SubCategories = require("./SubCategories.js");
const Categories = sequelize.define(
  "categories",
  {
    categorieId: {
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
    foreignKey: "categorieId",
    sourceKey: "categorieId",
});

SubCategories.belongsTo(Categories, {
    foreignKey: "categorieId",
    targetId: "categorieId"
});

module.exports = Categories;