import { Router } from "express";
import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from "../controllers/contact.controller.js";
import validateToken from "../middleware/validateTokenHandler.js";
const router = Router();
router.use(validateToken);
// get all contacts
router.route("/").get(getContacts);
router.route("/").post(createContact);

// get a single contact
// create a contact
// update a contact
// delete a contact

router.route("/:id").get(getContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);

export { router };
