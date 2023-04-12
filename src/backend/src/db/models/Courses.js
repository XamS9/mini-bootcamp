const { DataTypes } = require("sequelize");
const sequelize = require("../dbconnect.js");
const Sections = require("./Sections.js")
const StudentCourses = require("./StudentsCourses.js")
const Courses = sequelize.define(
  "courses",
  {
    id: {
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
    image: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    authorId:{
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    subCategoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    topicId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

Courses.hasMany(Sections, {
  onDelete: 'cascade',
  hooks: true,
  foreignKey: "courseId",
  sourceKey: "id",
});

Sections.belongsTo(Courses, {
  foreignKey: "courseId",
  targetId: "id",
});

Courses.hasMany(StudentCourses, {
  onDelete: 'cascade',
  hooks: true,
  foreignKey: "courseId",
  sourceKey: "id",
});

StudentCourses.belongsTo(Courses, {
  foreignKey: "courseId",
  targetId: "id",
});


module.exports = Courses;
