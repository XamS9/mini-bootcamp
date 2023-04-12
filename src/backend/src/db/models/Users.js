const { DataTypes } = require("sequelize");
const sequelize = require("../dbconnect.js");
const Authors = require("./Authors.js");
const Students = require("./Students.js");
const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true
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
    born: {
      type: DataTypes.DATEONLY,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user'
    },
    creationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  },
  {
    timestamps: false,
  }
);

Users.hasMany(Students, {
  onDelete: 'cascade',
  onUpdate: 'cascade',
  hooks: true,
  foreignKey: "userId",
  sourceKey: "id",
});

Users.hasMany(Authors, {
  onDelete: 'cascade',
  onUpdate: 'cascade',
  hooks: true,
  foreignKey: "userId",
  sourceKey: "id",
});

Students.belongsTo(Users, {
  foreignKey: "userId",
  targetId: "id",
});
Authors.belongsTo(Users, {
  foreignKey: "userId",
  targetId: "id",
});

module.exports = Users;
