const router = require("express").Router();
const userAuth = require("../utils/userAuth");
const { createTodo } = require("../controllers/createTodo");
const { listTodo } = require("../controllers/listTodo");

// Create To-do
router.post("/todos", userAuth, async (req, res) => {
  try {
    await createTodo(req, res);
  } catch (err) {
    res.status(400).send("To-do Creation Error.");
  }
});

// List all todos of the current user
router.get("/todos", userAuth, async (req, res) => {
  try {
    await listTodo(req, res);
  } catch (err) {
    res.status(400).send("List To-do Error.");
  }
});

module.exports = router;
