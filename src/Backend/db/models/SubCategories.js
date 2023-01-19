const { DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect.js");
const Topics = require("./Topics.js");
const subCategories = sequelize.define(
  "subCategories",
  {
    subCategorieId: {
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

subCategories.hasMany(Topics, {
    foreignKey: "subCategorieId",
    sourceKey: "subCategorieId"
});

Topics.belongsTo(subCategories, {
    foreignKey: "subCategorieId",
    targetId: "subCategorieId"
});

module.exports = subCategories;