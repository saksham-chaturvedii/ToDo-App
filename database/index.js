const Sequelize = require("sequelize");
const {
  sequelize_database,
  sequelize_username,
  sequelize_password,
  sequelize_host,
  sequelize_dialect,
} = require("../config/index");
const sequelize = new Sequelize(
  sequelize_database,
  sequelize_username,
  sequelize_password,
  {
    host: sequelize_host,
    dialect: sequelize_dialect,
    // dialectOptions: {
    //   ssl: true,
    // },
  }
);

sequelize.sync(); // Check if a table exists, if not then create one.

const connectDB = async () => {
  try {
    await sequelize.authenticate().then(() => {
      console.log("Database connection established successfully.");
    });
  } catch (err) {
    console.log("Connection to database failed.");
  }
};
connectDB();

module.exports = sequelize;
