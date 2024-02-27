import expressAsyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
// @desc register a user
// route /api/users/register
// access public

const registerUser = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mendatory");
  }

  const userAvalaible = await User.findOne({ email });
  if (userAvalaible) {
    res.status(400);
    throw new Error("User with this email already exist");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201);
    res.json({
      _id: user._id,
      email,
      username,
    });
  } else {
    res.status(400);
    throw new Error("can't register , invalid user data");
  }
  console.log(user);
});

// @desc login a user
// route /api/users/login
// access private

const loginUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "login register" });
});

// @desc current user info
// route /api/users/current
// access public

const currentUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "current user info" });
});

export { registerUser, loginUser, currentUser };
