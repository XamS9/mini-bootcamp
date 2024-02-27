const { DataTypes } = require("sequelize");
const sequelize = require("../dbconnect.js");
const StudentCourses = sequelize.define("studentCourses", {
    studentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    courseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }
},
{
    timestamps: true
});

module.exports = StudentCourses;