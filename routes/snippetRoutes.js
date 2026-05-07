const express = require("express");
const router = express.Router();
const snippetController = require("../controllers/snippetController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/dashboard", isAuthenticated, snippetController.dashboard);
router.get("/add", isAuthenticated, snippetController.showAdd);

router.post("/add", isAuthenticated, snippetController.addSnippet);
router.get("/delete/:id", isAuthenticated, snippetController.deleteSnippet);

module.exports = router;