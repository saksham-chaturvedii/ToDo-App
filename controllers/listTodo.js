const todo = require("../models/todo");

const listTodo = async (req, res) => {
  try {
    // Check if user has created any tasks yet or not
    if (
      !(await todo.findOne({
        where: {
          userId: req.session.user.id,
        },
      }))
    ) {
      res.status(400).send("No tasks to display.");
    }

    await todo
      .findAll({
        where: {
          userId: req.session.user.id,
        },
        order: ["id"],
      })
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (err) {
    res.status(400).send("No tasks to display.");
  }
};

module.exports = { listTodo };
