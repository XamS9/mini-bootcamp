const Authors = require("../../db/models/Authors.js");
const Users = require("../../db/models/Users.js");
const Students = require("../../db/models/Students.js")
const { dataReader } = require("../../middlewares/dataReader.js");
const bcrypt = require("bcrypt");
dataReader();

const adminFeed = async () => {
  try {
    const admin = await dataReader();
    const hash = await bcrypt.hash(admin.password, 10);
    const exist = await Users.findOne({
      where: {
        email: admin.email,
      },
    });
    if (!exist) {
      await Users.create({
        name: admin.name,
        lastName: admin.lastName,
        password: hash,
        email: admin.email,
        born: admin.born,
        role: admin.role,
        status: admin.status
      });
      await Authors.create({
        name: admin.name,
        lastName: admin.lastName,
        password: hash,
        email: admin.email,
        born: admin.born,
        role: admin.role,
        status: admin.status
      });
      await Students.create({
        name: admin.name,
        lastName: admin.lastName,
        password: hash,
        email: admin.email,
        born: admin.born,
        role: admin.role,
        status: admin.status
      });
    } else {
      await Users.destroy({
        where: {
          email: admin.email,
        },
      });
      await Authors.destroy({
        where: {
          email: admin.email,
        },
      });
      await Students.destroy({
        where: {
          email: admin.email,
        },
      });
      await Users.create({
        name: admin.name,
        lastName: admin.lastName,
        password: hash,
        email: admin.email,
        born: admin.born,
        role: admin.role,
        status: admin.status
      });
      await Students.create({
        name: admin.name,
        lastName: admin.lastName,
        password: hash,
        email: admin.email,
        born: admin.born,
        role: admin.role,
        status: admin.status
      });
      await Authors.create({
        name: admin.name,
        lastName: admin.lastName,
        password: hash,
        email: admin.email,
        born: admin.born,
        role: admin.role,
        status: admin.status
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = adminFeed;
