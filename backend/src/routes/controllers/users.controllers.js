const Users = require("../../db/models/Users.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Students = require("../../db/models/Students.js");
const Authors = require("../../db/models/Authors.js");

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: { exclude: ["password", "creationDate"] },
    }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, lastName, email, password, born, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      name,
      lastName,
      password: hash,
      email,
      born,
      role,
    });
    if (newUser) {
      switch (newUser.role) {
        case "student":
          await Students.create({
            name,
            lastName,
            password: hash,
            email,
            born,
            role,
          });
          break;
        case "author":
          await Authors.create({
            name,
            lastName,
            password: hash,
            email,
            born,
            role,
          });
          await Students.create({
            name,
            lastName,
            password: hash,
            email,
            born,
            role,
          });
      }
      return res.status(201).send("User registered correctly");
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
    return res.status(409);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, email, password, born, status } = req.body;
    let passExist = false;
    let hash = 0;
    if (password) {
      hash = await bcrypt.hash(password, 10);
      passExist = true;
    }
    const user = await Users.findOne({
      where: {
        id,
      },
    });
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    if(passExist)
    user.password = hash;
    user.born = born;
    user.status = status;
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const updateSelf = async (req, res) => {
  try {
    const { name, lastName, password, born, email } = req.body;
    let passExist = false;
    let hash = 0;
    if (password) {
      hash = await bcrypt.hash(password, 10);
      passExist = true
    }
    const user = await Users.findOne({
      where: {
        email,
      },
    });
    user.name = name;
    user.lastName = lastName;
    if(passExist)
    user.password = hash;
    user.born = born;
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({
      where: {
        email,
      },
    });
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        if (user.status) {
          let token = jwt.sign({ email: user.email }, process.env.SECRET, {
            expiresIn: "3h",
          });
          return res.status(200).json({ data: token, status: 200 });
        } else {
          return res.status(401).json({ status: 401 });
        }
      } else {
        return res.status(404).json({ status: 404 });
      }
    } else {
      return res.status(404).json({ status: 404 });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send("Authentication failed");
  }
};

const userData = async (req, res) => {
  try {
    const user = jwt.verify(req.token, process.env.SECRET);
    const userEmail = user.email;
    Users.findOne({
      where: {
        email: userEmail,
      },
      attributes: { exclude: ["id"] },
    }).then((data) => {
      data.password = null;
      res.status(200).send({ data: data });
    });
  } catch (error) {
    res.status(400).send({ data: error });
  }
};

const getData = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({
      where: {
        id,
      },
      attributes: { exclude: ["password", "creationDate"] },
    }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  userData,
  getData,
  updateSelf,
};
