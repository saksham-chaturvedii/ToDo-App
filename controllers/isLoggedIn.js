const isLoggedIn = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(500).send("Please Login first.");
  }
};

module.exports = { isLoggedIn };
