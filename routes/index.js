const router = require("express").Router();
const { userRegister } = require("../utils/userRegister");
const { userLogin } = require("../utils/userLogin");
const { userLogout } = require("../utils/userLogout");
const userAuth = require("../utils/userAuth");

// Sign-up User
router.post("/sign-up", async (req, res) => {
  try {
    await userRegister(req, res);
  } catch (err) {
    res.status(400).send("User-Registration Error.");
  }
});

// Log-in User
router.post("/login", async (req, res) => {
  try {
    await userLogin(req, res);
  } catch (err) {
    res.status(400).send("User-Login Error.");
  }
});

// Logout User
router.post("/logout", userAuth, async (req, res) => {
  try {
    await userLogout(req, res);
  } catch (err) {
    res.status(400).send("User-Logout Error.");
  }
});

module.exports = router;
