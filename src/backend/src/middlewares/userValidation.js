const jwt = require('jsonwebtoken');

const userValidation = async (req, res, next) => {
  try {
    const email = await jwt.verify(req.token, process.env.SECRET)
    if(email){
    req.body.email = email.email
    next();
    }
  } catch (error) {
    res.status(401).send('no user');
  }
}
module.exports = { userValidation };
