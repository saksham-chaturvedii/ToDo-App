var redis = require("redis");
var session = require("express-session");
var connectRedis = require("connect-redis");
const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = require("../config/index");
// redis_password
const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
});

redisClient.on("connect", () => {
  console.log("Redis connection established.");
});

redisClient.on("error", (err) => {
  console.error("Could not connect to Redis.", err);
});

module.exports = { redisClient, RedisStore, session };
