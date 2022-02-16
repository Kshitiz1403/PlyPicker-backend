const express = require("express")
const { create, getGroups } = require("../controllers/group")
const router = express.Router()

router.post("/group/create", create)

router.get("/groups", getGroups)

module.exports = router