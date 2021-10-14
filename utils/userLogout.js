userLogout = async (req, res, next) => {
  try {
    if (!req.session.user) {
      res.status(400).send("Please Login first.");
    }
    const { name, username } = req.session.user;
    await req.session.destroy();
    res.status(200).json({
      message: "User logout successful.",
      user: name,
      username: username,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { userLogout };
