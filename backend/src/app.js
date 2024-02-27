const express = require("express");
app = express();
const router = require("./routes/index.routes.js")
const fileUpload = require("express-fileupload");
const cors = require("cors");
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 },
  })
);
app.use(express.json());
app.use(router)

module.exports = app;
