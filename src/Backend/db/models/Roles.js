const { DataTypes } = require("sequelize");
const sequelize = require("../dbconnect.js");
const Users = require("./Users.js");
const Roles = sequelize.define(
  "roles",
  {
    roleId: {
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

Roles.hasMany(Users, {
  foreignKey: "roleId",
  sourceKey: "roleId",
});

Users.belongsTo(Roles, {
  foreignKey: "roleId",
  targetId: "roleId",
});

module.exports = Roles;
