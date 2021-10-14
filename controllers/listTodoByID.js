const todo = require("../models/todo");

const listTodoByID = async (req, res) => {
  try {
    await todo
      .findAll({
        where: { taskid: req.params.id },
        order: ["id"],
      })
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (err) {
    res.status(400).send("Task does not exist.");
  }
};

module.exports = { listTodoByID };
