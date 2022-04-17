const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");
const authMiddleware = require("../middlewares/userAuth");

router.get("/", mainController.index);
router.get("/admin", authMiddleware, mainController.admin);

module.exports = router;
