const { DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect.js.js");
const Petitions = require("./Petitions.js");
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

Students.hasMany(Petitions, {
    foreignKey: "studentId",
    sourceKey: "studentId"
})

Petitions.belongsTo(Students,{
    foreignKey: "studentId",
    targetId: "studentId"
})
module.exports = Students;