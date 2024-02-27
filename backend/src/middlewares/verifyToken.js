function verifyToken(req, res, next) {
  try {
    const header = req.headers["authorization"];
    if (typeof header !== "undefined") {
      const token = header.split(" ")[1];
      req.token = token;
      next();
    }
  } catch (err) {
    res.status(400).send("Invalid token", err);
  }
}

module.exports = verifyToken;
