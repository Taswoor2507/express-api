import expressAsyncHandler from "express-async-handler";
import Contact from "../models/contacts.model.js";

// @desc get all contacts
// route /api/contacts
// access public

import errorHandler from "../middleware/errorHandler.js";

const getContacts = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contact);
});

// @desc get contact
// route /api/contacts/1
// access public

const getContact = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!!");
  }
  res.status(200).json(contact);
});

// @desc create new contact
// route /api/contacts/
// access public

const createContact = expressAsyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  console.log(req.body);
  res.status(201).json(contact);
});

// @desc update contact
// route /api/contacts/1
// access public

const updateContact = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!!");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});
// @desc delete contact
// route /api/contacts/1
// access public

const deleteContact = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!!");
  }

  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

export { getContacts, getContact, createContact, updateContact, deleteContact };
