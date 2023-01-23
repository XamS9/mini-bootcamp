const Users = require("../db/models/Users.js");
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, lastName, email, password, born } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      name,
      lastName,
      password: hash,
      email,
      born
    });

    console.log(newUser);
    res.send("Creating user");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, lastName, email, password, born } = req.body;
    const user = await Users.findByPK(userId);
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.born = born;
    await user.save();
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await Users.destroy({
      where: {
        userId,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
