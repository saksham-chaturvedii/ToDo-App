const todo = require("../models/todo");

const todoExists = async (req, res, next) => {
  try {
    const task = await todo.findOne({ where: { taskid: req.params.id } });
    if (task.dataValues.taskid === req.params.id) {
      next();
    }
  } catch (err) {
    res
      .status(400)
      .send("Task does not exist. Please check the entered task id.");
  }
};
module.exports = { todoExists };
