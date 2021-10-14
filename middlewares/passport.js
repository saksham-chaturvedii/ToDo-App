const User = require("../models/user");
const { secret } = require("../config");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { Op } = require("sequelize");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

module.exports = (passport) => {
  passport.use(
    new Strategy(opts, async (payload, done) => {
      await User.findOne({
        where: { username: payload.username },
      })
        .then((user) => {
          if (user) {
            return done(null, user.dataValues);
          }
          return done(null, false);
        })
        .catch((err) => {
          return done(null, false);
        });
    })
  );
};
