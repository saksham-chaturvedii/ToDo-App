const todo = require("../models/todo");

const updateTodoByID = async (req, res) => {
  try {
    await todo
      .update(
        {
          task: req.body.task,
          deadline: req.body.deadline,
          status: req.body.status,
        },
        { where: { taskid: req.params.id } }
      )
      .then(() => {
        res.status(200).json({ message: `Task updated.`, success: true });
      });
  } catch (err) {
    res.status(400).send("Task does not exist.");
  }
};

module.exports = { updateTodoByID };
