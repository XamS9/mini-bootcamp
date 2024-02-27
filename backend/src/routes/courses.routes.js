const { Router } = require('express');
const { courseData, getCourses, updateCourses, deleteCourses, createCourses, subscribeCourse, getsuscribedCourses, deleteSuscription, CoursesByCat, CoursesBySubCat, CoursesByTopic } = require("./controllers/courses.controllers.js")
const { upload } = require('.././middlewares/saveImage.js');
const { authorAuth } = require('../middlewares/authorAuth.js');
const verifyToken = require('../middlewares/verifyToken.js');
const { userValidation } = require('../middlewares/userValidation.js');
const { studentAuth } = require('../middlewares/studentAuth.js');
const router = Router();

router.get('/courses', getCourses);
router.get('/coursesbycat/:categoryId', CoursesByCat);
router.get('/coursesbysubcat/:subCategoryId', CoursesBySubCat);
router.get('/coursesbytopic/:topicId', CoursesByTopic);
router.post('/courses/:topicId', verifyToken, userValidation, authorAuth, upload, createCourses);
router.post('/coursesuscribed/:id', verifyToken, userValidation, studentAuth, subscribeCourse)
router.post('/coursesuscribed', verifyToken, userValidation, studentAuth, getsuscribedCourses)
router.put('/courses/:id', updateCourses);
router.delete('/courses/:id', deleteCourses);
router.get('/courses/:id', courseData);
router.delete('/coursesuscribed/:id', verifyToken, userValidation, studentAuth, deleteSuscription)
module.exports = router;