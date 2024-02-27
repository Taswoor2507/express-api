import expressAsyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mendatory");
  }

  const user = await User.findOne({ email });
  if (user && bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Password or Email is incorrect");
  }
});

// @desc current user info
// route /api/users/current
// access public

const currentUser = expressAsyncHandler(async (req, res) => {
  res.json(req.user);
});

export { registerUser, loginUser, currentUser };
