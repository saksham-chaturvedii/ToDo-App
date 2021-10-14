const todo = require("../models/todo");

const deleteTodoByID = async (req, res) => {
  try {
    const getTodo = await todo.findOne({
      where: { taskid: req.params.id },
      order: ["id"],
    });
    await getTodo.destroy();
    res.status(200).send("Task marked as done and, deleted.");
  } catch (err) {
    res.status(400).send("Task does not exist.");
  }
};

module.exports = { deleteTodoByID };
