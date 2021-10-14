const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var { secret } = require("../config");

const userLogin = async (req, res) => {
  let { username, password } = req.body;

  // Check if user is present in the database
  const user = await User.findOne({ where: { username } });
  if (!user) {
    return res.status(404).json({
      message: "Username not found. Invalid login credentials.",
      success: false,
    });
  }

  // Verify the password
  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    // Sign in the token and issue it to the user
    let token = jwt.sign(
      {
        user_id: user._id,
        username: user.username,
        email: user.email,
      },
      secret,
      { expiresIn: "7 days" }
    );

    let result = {
      username: user.username,
      email: user.email,
      token: `Bearer ${token}`,
      expiresIn: 168, //hours,
      userId: user.userId,
    };

    req.session.user = user;

    return res.status(200).json({
      message: "Successfully logged in.",
      expiresIn: "7 days",
      ...result,
    });
  } else {
    return res.status(403).json({
      message: "Incorrect password.",
      success: false,
    });
  }
};

module.exports = { userLogin };
