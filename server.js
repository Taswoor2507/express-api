import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/contact.route";
dotenv.config({
  path: process.env.PATH,
});

const port = process.env.PORT || 5000;
const app = express();

app.use("/api/contacts", router);

app.listen(port, () => {
  console.log(`Server listen on port --> ${port}`);
});
