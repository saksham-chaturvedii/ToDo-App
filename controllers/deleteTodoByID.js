const todo = require("../models/todo");

const deleteTodoByID = async (req, res) => {
  try {
    const getTodo = await todo.findOne({
      where: { taskid: req.params.id },
      order: ["id"],
    });
    await getTodo.destroy();
    res.status(200).send("Task has been deleted.");
  } catch (err) {
    res.status(400).send("Task does not exist.");
  }
};

module.exports = { deleteTodoByID };
