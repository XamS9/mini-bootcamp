const usersRoutes = require("./users.routes.js");
const coursesRoutes = require("./courses.routes.js");
const sectionRoutes = require("./sections.routes.js");
const categoryRoutes = require("./categories.routes.js");
const subCategoryRoutes = require("./subCategories.routes.js");
const topicsRoutes = require("./topics.routes.js");
const { Router } = require('express');

const router = Router();

router.use(categoryRoutes);
router.use(sectionRoutes);
router.use(usersRoutes);
router.use(coursesRoutes);
router.use(subCategoryRoutes);
router.use(topicsRoutes);

module.exports = router;
