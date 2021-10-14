require("dotenv").config();
module.exports = {
  PORT: process.env.PORT,
  secret: process.env.secret,
  sequelize_database: process.env.SEQUELIZE_DATABASE,
  sequelize_username: process.env.SEQUELIZE_USERNAME,
  sequelize_password: process.env.SEQUELIZE_PASSWORD,
  sequelize_host: process.env.SEQUELIZE_HOST,
  sequelize_dialect: process.env.SEQUELIZE_DIALECT,
  redis_host: process.env.REDIS_HOST,
  redis_port: process.env.REDIS_PORT,
  // redis_password: process.env.REDIS_PASSWORD,
};
