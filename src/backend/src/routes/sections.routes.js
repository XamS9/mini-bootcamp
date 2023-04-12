const { Router } = require('express');
const { createSections, updateSections, deleteSections, getSections, sectionData, getAllSections } = require("./controllers/sections.controllers.js")
const router = Router();

router.get('/sections/', getAllSections);
router.get('/sectionsbycourseid/:courseId/', getSections);
router.post('/sections/:courseId/', createSections);
router.put('/sections/:id', updateSections);
router.delete('/sections/:id', deleteSections);
router.get('/sections/:id', sectionData); 

module.exports = router;