const Sections = require("../../db/models/Sections.js");
const Courses = require("../../db/models/Courses.js");
const getAllSections = async (req, res) => {
  try {
    const sections = await Sections.findAll({
      attributes:{ exclude: ["categoryId", "subCategoryId", "topicId"]}
    });
    res.status(200).send(sections);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSections = async (req, res) => {
    try {
      const { courseId } = req.params;
      const sections = await Sections.findAll({
        where: {
          courseId,
        },
      });
      res.status(200).send(sections);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  const createSections = async (req, res) => {
    try {
      const { courseId } = req.params;
      const { name, body } = req.body;
      const course = await Courses.findOne({
        where: {
          id: courseId
        }
      })
      const newSection = await Sections.create({
        name,
        body,
        courseId,
        subCategoryId: course.subCategoryId,
        categoryId: course.categoryId,
        topicId: course.topicId
      });
      if (newSection) {
        return res.status(201).send("Section created correctly");
      } else {
        return res.status(500).send("Error");
      }
    } catch (error) {
      console.log(error);
      return res.status(500);
    }
  };
  
  const updateSections = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, body } = req.body;
      const section = await Sections.findOne({
        where: {
          id
        },
      });
      section.name = name;
      section.body = body;
      await section.save();
      res.status(200).send(section);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  const deleteSections = async (req, res) => {
    try {
      const { id } = req.params;
      await Sections.destroy({
        where: {
          id
        },
      });
      res.status(204).send("Section deleted");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const sectionData = async (req, res) => {
    const { id } = req.params;
    try {
      Sections.findOne({
        where: {
          id,
        },
      }).then((data) => {
        res.status(200).send( data);
      });
    } catch (error) {
      res.status(500).send("error");
    }
  };


module.exports = {
  createSections,
  updateSections,
  deleteSections,
  getSections,
  sectionData,
  getAllSections
}