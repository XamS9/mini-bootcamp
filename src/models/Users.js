const { DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect.js");
const Authors = require("./Authors.js");
const Students = require("./Students.js");
const Users = sequelize.define(
  "users",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
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
    date: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    timestamps: false,
  }
);

Users.hasMany(Students, {
  foreignKey: "userId",
  sourceKey: "userId",
});

Users.hasMany(Authors, {
    foreignKey: "userId",
    sourceKey: "userId",
  });

Students.belongsTo(Users, {
  foreignKey: "userId",
  targetId: "userId",
});
Authors.belongsTo(Users, {
  foreignKey: "userId",
  targetId: "userId",
});

module.exports = Users;
