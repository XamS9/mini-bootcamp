const userAuth = async (email, req, res, next) => {
  try {
    const User = await Users.findOne({where:{
      email: email.email
    }})
    if (User.role === 'user')
    next();
    else {
      res.status(401).send("You're not authorized")
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = { userAuth };
