const { DataTypes } = require("sequelize");
const sequelize = require("../dbconnect.js");
const StudentCourses = require("./StudentsCourses.js");
const Students = sequelize.define("students", {
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
    timestamps: false
});

Students.hasMany(StudentCourses, {
    foreignKey: "studentId",
    sourceKey: "id",
  });
  
StudentCourses.belongsTo(Students, {
    foreignKey: "studentId",
    targetId: "id",
  });

module.exports = Students;