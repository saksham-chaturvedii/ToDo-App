var redis = require("redis");
var session = require("express-session");
var connectRedis = require("connect-redis");
const { redis_host, redis_port, redis_password } = require("../config/index");

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  host: redis_host,
  port: redis_port,
  password: redis_password,
});

redisClient.on("connect", () => {
  console.log("Redis connection established.");
});

redisClient.on("error", (err) => {
  console.error("Could not connect to Redis.", err);
});

module.exports = { redisClient, RedisStore, session };
