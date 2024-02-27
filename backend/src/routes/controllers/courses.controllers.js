const Courses = require("../../db/models/Courses.js");
const Topics = require("../../db/models/Topics.js");
const Categories = require("../../db/models/Categories.js");
const SubCategories = require("../../db/models/SubCategories.js");
const StudentsCourses = require("../../db/models/StudentsCourses.js");

const getCourses = async (req, res) => {
  try {
    const courses = await Courses.findAll({
      attributes: { exclude: ["categoryId", "subCategoryId", "topicId"] },
      // include: {model: Topics, include: {model:SubCategories, include:{model: Categories}}}
    }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const CoursesByCat = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const courses = await Courses.findAll({
      where: {categoryId},
      attributes: { exclude: ["categoryId", "subCategoryId", "topicId"] },
      // include: {model: Topics, include: {model:SubCategories, include:{model: Categories}}}
    }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const CoursesBySubCat = async (req, res) => {
  try {
    const { subCategoryId } = req.params;
    const courses = await Courses.findAll({
      where: {subCategoryId},
      attributes: { exclude: ["categoryId", "subCategoryId", "topicId"] },
      // include: {model: Topics, include: {model:SubCategories, include:{model: Categories}}}
    }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const CoursesByTopic = async (req, res) => {
  try {
    const { topicId } = req.params;
    const courses = await Courses.findAll({
      where: {topicId},
      attributes: { exclude: ["categoryId", "subCategoryId", "topicId"] },
      // include: {model: Topics, include: {model:SubCategories, include:{model: Categories}}}
    }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const createCourses = async (req, res) => {
  try {
    const { topicId } = req.params;
    const { name, description, authorId } = req.body;
    const image = req.image;
    const topic = await Topics.findOne({
      where: {
        id: topicId,
      },
    });
    const newCourses = await Courses.create({
      description,
      name,
      image,
      authorId,
      topicId,
      categoryId: topic.categoryId,
      subCategoryId: topic.subCategoryId,
    });
    if (newCourses) {
      return res.status(201).send("Course created correctly");
    } else {
      return res.status(500).send("Error");
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const updateCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, status } = req.body;
    const course = await Courses.findOne({
      where: {
        id,
      },
    });
    course.name = name;
    course.status = status;
    course.description = description;
    await course.save();
    res.status(200).send(course);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCourses = async (req, res) => {
  try {
    const { id } = req.params;
    await Courses.destroy({
      where: {
        id,
      },
    });
    res.status(204).send("Course deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const courseData = async (req, res) => {
  try {
    const { id } = req.params;
    Courses.findOne({
      attributes: { exclude: ["categoryId", "subCategoryId", "topicId"] },
      where: {
        id,
      },
    }).then((course) => {
      res.status(200).send(course);
    });
  } catch (error) {
    res.status(404).send("error");
  }
};

const subscribeCourse = async (req, res) => {
  try {
    const { studentId } = req.body;
    const { id } = req.params;
    StudentsCourses.create({
      studentId,
      courseId: id,
    }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    res.status(500).send("error");
    console.log(error);
  }
};

const deleteSuscription = async (req, res) => {
  try {
    const { studentId } = req.body;
    const { id } = req.params;
    StudentsCourses.destroy({
      where: { studentId, courseId: id },
    });
    res.status(204).send("Unsuscribed correctly");
  } catch (error) {
    res.status(500).send("error");
    console.log(error);
  }
};

const getsuscribedCourses = async (req, res) => {
  try {
    const { studentId } = req.body;
    StudentsCourses.findAll({
      where: { studentId },
      attributes: { exclude: ["studentId"] },
      include: {model: Courses}
    }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCourses,
  createCourses,
  updateCourses,
  deleteCourses,
  courseData,
  subscribeCourse,
  getsuscribedCourses,
  deleteSuscription,
  CoursesByCat,
  CoursesBySubCat,
  CoursesByTopic
};
