const { Router } = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/users.controllers.js")

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);

module.exports = router;