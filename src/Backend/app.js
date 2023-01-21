const express = require("express");
app = express();
const usersRoutes = require("./routes/users.routes.js");

// Middlewares
app.use(express.json())

app.use(usersRoutes);

module.exports = app;