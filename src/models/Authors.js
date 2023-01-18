const { DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect.js");

const Authors = sequelize.define("authors", {
    authorId: {
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
    date: {
        type: DataTypes.DATEONLY
    },    
},
{
    timestamps: false
});
module.exports = Authors;