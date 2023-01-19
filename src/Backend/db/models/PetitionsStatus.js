const { DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect.js.js");
const Petitions = require("./Petitions.js");
const PetitionsStatus = sequelize.define(
  "petitionsStatu",
  {
    petitionStatusId: {
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

PetitionsStatus.hasMany(Petitions, {
  foreignKey: "petitionStatusId",
  sourceKey: "petitionStatusId"
});

Petitions.belongsTo(PetitionsStatus, {
  foreignKey: "petitionStatusId",
  targetId: "petitionStatusId"
});

module.exports = PetitionsStatus;
