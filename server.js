import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/contact.route.js";
import errorHandler from "./middleware/errorHandler.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.route.js";
dotenv.config({
  path: process.env.PATH,
});

const port = process.env.PORT || 5000;
const app = express();

connectDB();
app.use(express.json());

app.use("/api/contacts", router);
app.use("/api/users", userRouter);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server listen on port --> ${port}`);
});
