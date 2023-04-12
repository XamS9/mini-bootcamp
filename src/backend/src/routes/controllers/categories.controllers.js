const Categories = require("../../db/models/Categories.js");

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.status(200).send(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createCategories = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategories = await Categories.create({
      description,
      name,
    });
    if (newCategories) {
      return res.status(201).send("Category created correctly");
    } else {
      return res.status(500).send("Error");
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const category = await Categories.findOne({
      where: {
        id,
      },
    });
    category.name = name;
    category.description = description;
    await category.save()
    res.status(200).send(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Categories.destroy({
      where: {
        id,
      },
    });
    res.status(204).send("Category deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const categoryData = async (req, res) => {
  try {
    const { id } = req.params;
    Categories.findOne({
      where: {
        id,
      },
    }).then((data) => {
      res.status(200).send(data)
    });
  } catch (error) {
    res.status(500).send("error");
  }
};

module.exports = {
    getCategories,
    updateCategory,
    deleteCategory,
    createCategories,
    categoryData
};
