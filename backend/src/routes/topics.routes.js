const { Router } = require('express');
const { getAllTopics, createTopics, updateTopics, deleteTopics, getTopics, topicsData } = require("./controllers/topics.controllers.js")
const router = Router();

router.get('/topics', getAllTopics);
router.get('/topicsbysubid/:subCategoryId/', getTopics);
router.post('/topics/:subCategoryId/', createTopics);
router.put('/topics/:id', updateTopics);
router.delete('/topics/:id', deleteTopics);
router.get('/topics/:id', topicsData); 

module.exports = router;