const SubCategory = require("../../db/models/SubCategories.js");

const getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.findAll({
      attributes: { exclude: ["categoryId"] },
    });
    res.status(200).send(subCategories);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getSubCategories = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subCategory = await SubCategory.findAll({
      where: {
        categoryId,
      },
    });
    res.status(200).send(subCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createSubCategories = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, description } = req.body;
    const newSubCategory = await SubCategory.create({
      name,
      description,
      categoryId,
    });
    if (newSubCategory) {
      return res.status(201).send("Subcategory created correctly");
    } else {
      return res.status(500).send("Error");
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const updateSubCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, categoryId } = req.body;
    const subCategory = await SubCategory.findOne({
      where: {
        id
      },
    });
    subCategory.name = name;
    subCategory.description = description;
    await subCategory.save();
    res.status(200).send(subCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteSubCategories = async (req, res) => {
  try {
    const { id } = req.params;
    await SubCategory.destroy({
      where: {
        id,
      },
    });
    res.status(204).send("Subcategory deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const subCategoryData = async (req, res) => {
  try {
    const { id } = req.params;
    SubCategory.findOne({
      attributes:{ exclude: ["categoryId"]},
      where: {
        id,
      },
    }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    res.status(500).send("error");
  }
};

module.exports = {
  getAllSubCategories,
  createSubCategories,
  updateSubCategories,
  deleteSubCategories,
  getSubCategories,
  subCategoryData,
};
