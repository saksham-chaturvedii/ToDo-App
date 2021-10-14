const todo = require("../models/todo");

const listTodo = async (req, res) => {
  try {
    await todo
      .findAll({
        where: {
          userId: req.session.user.id,
        },
        order: ["id"],
      })
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(400).send("No tasks to display.");
        }
      });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { listTodo };
