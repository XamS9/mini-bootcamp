const { DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect.js");
const Petitions = sequelize.define(
  "petitions",
  {
    petitionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
        type: DataTypes.DATEONLY
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Petitions;
