import expressAsyncHandler from "express-async-handler";

// @desc get all contacts
// route /api/contacts
// access public

import errorHandler from "../middleware/errorHandler.js";

const getContacts = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get all contacts",
  });
});

// @desc get contact
// route /api/contacts/1
// access public

const getContact = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Get contact of id ${req.params.id}`,
  });
});

// @desc create new contact
// route /api/contacts/
// access public

const createContact = expressAsyncHandler(async (req, res) => {
  const { name, email, contact } = req.body;
  if (!name || !email || !contact) {
    res.status(400);
    throw new Error("");
  }
  console.log(req.body);
  res.status(200).json({ message: "Contact create successfully" });
});

// @desc update contact
// route /api/contacts/1
// access public

const updateContact = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update contact of id ${req.params.id}`,
  });
});

// @desc delete contact
// route /api/contacts/1
// access public

const deleteContact = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete contact of id ${req.params.id}`,
  });
});

export { getContacts, getContact, createContact, updateContact, deleteContact };
