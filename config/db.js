import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `Database connect connect on host --> ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("can't connect to database due to error-->", error);
  }
};

export { connectDB };
