const Topics = require("../../db/models/Topics.js");
const SubCategories = require("../../db/models/SubCategories.js")

const getAllTopics = async (req, res) => {
  try {
    const topics = await Topics.findAll({
      attributes: { exclude: ["categoryId", "subCategoryId"] },
    });
    res.status(200).send(topics);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTopics = async (req, res) => {
  try {
    const { subCategoryId } = req.params;
    const topics = await Topics.findAll({
      where: {
        subCategoryId
      },
    });
    res.status(200).send(topics);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const createTopics = async (req, res) => {
  try {
    const { subCategoryId } = req.params;
    const { name, description } = req.body;
    const subCategory = await SubCategories.findOne({
      where:{
        id: subCategoryId
      }
    })
    const newTopics = await Topics.create({
      name,
      description,
      subCategoryId,
      categoryId: subCategory.categoryId
    });
    if (newTopics) {
      return res.status(201).send("Topic created correctly");
    } else {
      return res.status(500).send("Error");
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const updateTopics = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const topics = await Topics.findOne({
      where: {
        id
      },
    });
    topics.name = name;
    topics.description = description;
    await topics.save();
    res.status(200).send(topics);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteTopics = async (req, res) => {
  try {
    const { id } = req.params;
    await Topics.destroy({
      where: {
        id
      },
    });
    res.status(204).send("Topic deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const topicsData = async (req, res) => {
  try {
    const { id } = req.params;
    Topics.findOne({
      attributes:{ exclude: ["categoryId", "subCategoryId"]},
      where: {
        id
      },
    }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    res.status(500).send("error");
  }
};

module.exports = {
  getAllTopics,
  createTopics,
  updateTopics,
  deleteTopics,
  getTopics,
  topicsData,
};
