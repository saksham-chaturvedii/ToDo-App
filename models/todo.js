const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const user = require("./user");
const todo = sequelize.define(
  "todo",
  {
    //uuid
    taskid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: "To Do",
      type: DataTypes.ENUM("To do", "Doing", "Done"),
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

user.hasMany(todo);
todo.belongsTo(user, {
  foreignKey: "userId",
});

module.exports = todo;
