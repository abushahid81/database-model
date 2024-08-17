// importing packages
import mongoose from "mongoose";

//mongodb+srv://<username>:<password>@mohsinogen.smovl.mongodb.net/<databaseName>?retryWrites=true&w=majority

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;