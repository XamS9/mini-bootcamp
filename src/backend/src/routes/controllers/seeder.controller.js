const Authors = require("../../db/models/Authors.js");
const Users = require("../../db/models/Users.js");
const Students = require("../../db/models/Students.js")
const { dataReader } = require("../../middlewares/dataReader.js");
dataReader();

const adminFeed = async () => {
  try {
    const admin = await dataReader();
    const exist = await Users.findOne({
      where: {
        email: admin.email,
      },
    });
    if (!exist) {
      await Users.create(admin);
      admin.userId = "1"
      await Authors.create(admin);
      await Students.create(admin);
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
      await Users.create(admin);
      admin.userId = "1"
      await Students.create(admin);
      await Authors.create(admin);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = adminFeed;
