const express = require("express");
app = express();
const usersRoutes = require("./routes/users.routes.js");
const coursesRoutes = require("./routes/courses.routes.js");
const sectionRoutes = require("./routes/sections.routes.js");
const categoryRoutes = require("./routes/categories.routes.js");
const subCategoryRoutes = require("./routes/subCategories.routes.js");
const topicsRoutes = require("./routes/topics.routes.js");
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

app.use(categoryRoutes);
app.use(sectionRoutes);
app.use(usersRoutes);
app.use(coursesRoutes);
app.use(subCategoryRoutes);
app.use(topicsRoutes);

module.exports = app;
