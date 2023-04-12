const Students = require("../db/models/Students.js");

const studentAuth = async (req, res, next) => {
  try {
    const Student = await Students.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (Student) {
      req.body.studentId = Student.id;
      next();
    } else {
      res.status(401).send("You're not authorized");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { studentAuth };
