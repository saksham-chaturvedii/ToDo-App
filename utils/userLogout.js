userLogout = async (req, res, next) => {
  try {
    await req.session.destroy();
    res.status(200).send("User logout successful.");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
module.exports = { userLogout };
