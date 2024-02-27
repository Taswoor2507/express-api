import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: process.env.PATH,
});

const port = process.env.PORT || 5000;
const app = express();

app.get("/api/contacts", (req, res) => {
  res.status(200).send("Get all contacts...");
});

app.listen(port, () => {
  console.log(`Server listen on port --> ${port}`);
});
