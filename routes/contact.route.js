import { Router } from "express";
const router = Router();

// get all contacts
router.route("/").get((req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

// get a single contact
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get contact of id ${req.params}` });
});

// update a contact
router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update contact of id ${req.params}` });
});

// delete a contact
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Delete contact of id ${req.params}` });
});

export { router };
