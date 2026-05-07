const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Home page
router.get("/", authController.home);

// Auth pages
router.get("/login", authController.showLogin);
router.get("/register", authController.showRegister);

router.post("/login", authController.login);
router.post("/register", authController.register);

router.get("/logout", authController.logout);

module.exports = router;