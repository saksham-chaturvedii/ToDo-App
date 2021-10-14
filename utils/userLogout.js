userLogout = async (req, res, next) => {
  try {
    if (!req.session.user) {
      res.status(400).send("Please Login first.");
    }
    await req.session.destroy();
    res.status(200).send("User logout successful.");
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { userLogout };
