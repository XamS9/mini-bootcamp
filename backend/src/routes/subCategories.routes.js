const { Router } = require('express');
const { getAllSubCategories, createSubCategories, updateSubCategories, deleteSubCategories, getSubCategories, subCategoryData } = require("./controllers/subCategories.controllers.js")
const router = Router();

router.get('/subcategories', getAllSubCategories);
router.get('/subcategoriesbycatid/:categoryId/', getSubCategories);
router.post('/subcategories/:categoryId/', createSubCategories);
router.put('/subcategories/:id', updateSubCategories);
router.delete('/subcategories/:id', deleteSubCategories);
router.get('/subcategories/:id', subCategoryData); 

module.exports = router;