const todo = require("../models/todo");
const { Op, where } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const createTodo = async (req, res) => {
  try {
    
    // Generate a uuid for the task
    const taskid = uuidv4();

    // Create the todo
    await todo
      .create({
        taskid: taskid,
        task: req.body.task,
        deadline: req.body.deadline,
        status: req.body.status,
        userId: req.session.user.id,
      })
      .then(() => {
        res.status(200).json({ message: `Task created.`, success: true });
      });
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { createTodo };
