const Users = require("../db/models/Users.js")

const adminAuth = async (req, res, next) => {
  try {
    const { email } = req.body
    const User = await Users.findOne({where:{
      email,
    }})
    if (User.role === 'admin')
    next();
    else {
      res.status(401).send("You're not authorized")
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = { adminAuth };
