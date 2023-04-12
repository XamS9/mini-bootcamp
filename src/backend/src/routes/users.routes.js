const { Router } = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  updateSelf,
  deleteUser,
  loginUser,
  userData,
  getData,
} = require("./controllers/users.controllers.js");
const { emailCheck } = require("../middlewares/emailCheck.js");
const { adminAuth } = require("../middlewares/adminAuth.js");
const { userValidation } = require("../middlewares/userValidation.js");
const verifyToken = require("../middlewares/verifyToken.js");
const adminFeed = require("./controllers/seeder.controller.js");

const router = Router();

router.get("/users", getUsers);
router.post("/users", emailCheck, createUser);
router.put("/users/:id", updateUser);
router.put("/self", verifyToken, userValidation, updateSelf);
router.delete("/users/:id", verifyToken, userValidation, adminAuth, deleteUser);
router.get("/users/:id", verifyToken, userValidation, adminAuth, getData);
router.post("/login", loginUser);
router.post("/users/data/", verifyToken, userData);
router.get("/admin", adminFeed);

module.exports = router;
