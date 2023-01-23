const express = require("express");
app = express();
const usersRoutes = require("./routes/users.routes.js");
const cors = require("cors");
app.use(cors()); 
// Middlewares
app.use(express.json())

app.use(usersRoutes);

module.exports = app;