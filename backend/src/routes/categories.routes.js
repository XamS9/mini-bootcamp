const { Router } = require('express');
const { getCategories, createCategories, updateCategory, deleteCategory, categoryData } = require("./controllers/categories.controllers.js")
const router = Router();

router.get('/categories', getCategories);
router.post('/categories', createCategories);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);
router.get('/categories/:id', categoryData); 

module.exports = router;