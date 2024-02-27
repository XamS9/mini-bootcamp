const Authors = require("../db/models/Authors.js")
const authorAuth = async (req, res, next) => {
  try {
    const User = await Authors.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (User) {
      req.body.authorId = User.id;
      next();
    } else {
      res.status(401).send("You're not authorized");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { authorAuth };
