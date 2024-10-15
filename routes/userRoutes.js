const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/new", userController.newGet);

router.post("/new", userController.newPost);

router.get("/:id", userController.getMessage);

router.get("/delete/:id", userController.deleteMessage);

module.exports = router;
