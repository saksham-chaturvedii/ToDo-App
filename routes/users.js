const router = require("express").Router();
const userAuth = require("../utils/userAuth");
const { createTodo } = require("../controllers/createTodo");
const { listTodo } = require("../controllers/listTodo");
const { todoExists } = require("../controllers/todoExists");
const { listTodoByID } = require("../controllers/listTodoByID");
const { deleteTodoByID } = require("../controllers/deleteTodoByID");
const { updateTodoByID } = require("../controllers/updateTodoByID");
const { isLoggedIn } = require("../controllers/isLoggedIn");
const todoInputChecks = require("../controllers/todoInputChecks");

// Create To-do
router.post(
  "/todos",
  isLoggedIn,
  userAuth,
  todoInputChecks,
  async (req, res) => {
    try {
      await createTodo(req, res);
    } catch (err) {
      res.status(400).send("To-do Creation Error.");
    }
  }
);

// List To-do by id
router.get("/todos/:id", isLoggedIn, userAuth, todoExists, async (req, res) => {
  try {
    await listTodoByID(req, res);
  } catch (err) {
    res.status(400).send("List To-do by Task ID Error.");
  }
});

// List all todos of the current user
router.get("/todos", isLoggedIn, userAuth, async (req, res) => {
  try {
    await listTodo(req, res);
  } catch (err) {
    res.status(400).send("List To-do Error.");
  }
});

// Delete To-do by ID
router.delete(
  "/todos/:id",
  isLoggedIn,
  userAuth,
  todoExists,
  async (req, res) => {
    try {
      await deleteTodoByID(req, res);
    } catch (err) {
      res.status(400).send("Delete To-do Error.");
    }
  }
);

// Update To-do by ID
router.put(
  "/todos/:id",
  isLoggedIn,
  userAuth,
  todoExists,
  todoInputChecks,
  async (req, res) => {
    try {
      await updateTodoByID(req, res);
    } catch (err) {
      res.status(400).send("Update To-do Error.");
    }
  }
);

module.exports = router;
