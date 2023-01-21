const { DataTypes } = require("sequelize");
const sequelize = require("../dbconnect.js");
const Students = sequelize.define("students", {
    studentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.INTEGER
    },
    date: {
        type: DataTypes.DATEONLY
    },    
},
{
    timestamps: false
});

module.exports = Students;