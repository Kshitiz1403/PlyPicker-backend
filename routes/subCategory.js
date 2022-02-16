const express = require("express")
const router = express.Router()
const {create, getSubCategories}  = require("../controllers/subCategory")

router.post("/subcategory/create", create)

router.get("/subcategories", getSubCategories)

module.exports = router