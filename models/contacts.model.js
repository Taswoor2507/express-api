import mongoose from "mongoose";
import User from "./user.model.js";

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: User,
    },
    name: {
      type: String,
      required: [true, "Please ad contact name"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
