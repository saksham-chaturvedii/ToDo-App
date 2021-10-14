const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Validate the username
    let usernameNotTaken = await validateUsername(username);
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: `Username already exists.`,
        success: false,
      });
    }

    // Validate the email
    let emailNotRegistered = await validateEmail(email);
    if (!emailNotRegistered) {
      return res.status(400).json({
        message: `Email is already registered.`,
        success: false,
      });
    }

    // Get the hashed password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate a uuid for the user
    const userid = uuidv4();

    // Create a new user
    const newUser = await User.create({
      ...req.body,
      userId: userid,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "You have been registered successfully.",
      success: true,
      user: newUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Unable to create your account.",
      success: false,
      err: err,
    });
  }
};

const validateUsername = async (username, teamName) => {
  let user = await User.findOne({
    where: { [Op.and]: [{ username: username }] },
  });
  return user ? false : true;
};

const validateEmail = async (email) => {
  let user = await User.findOne({ where: { email } });
  return user ? false : true;
};
module.exports = { userRegister };
