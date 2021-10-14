const todo = require("../models/todo");

const todoExists = (req, res, next) => {
  console.log("params", req.params);
  if (todo.findOne({ where: { taskid: req.params.id } })) {
    next();
  } else {
    res
      .status(400)
      .send("Task does not exist. Please check the entered task id.");
  }
};
module.exports = { todoExists };
