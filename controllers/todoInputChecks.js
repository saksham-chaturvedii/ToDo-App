var validator = require("validator");

const todoInputChecks = (req, res, next) => {
  // Check entered deadline format
  const deadline = req.body.deadline;
  if (!validator.isDate(deadline)) {
    return res.status(400).json({
      message: "Invalid date format.",
      validDateFormat: `{yyyy/mm/dd}`,
    });
  }

  // Check entered status
  const status = ["To do", "Doing", "Done"];
  if (!status.includes(req.body.status)) {
    return res.status(400).json({
      message: "Invalid task status.",
      validStatus: `{To do}, {Doing}, {Done}`,
    });
  }

  next();
};
module.exports = todoInputChecks;
