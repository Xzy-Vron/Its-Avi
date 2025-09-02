import mongoose from "mongoose";
import User from "@/models/user.model" 
import dbconnect from "@/lib/db-connect";
import { userData } from "./user-information";


async function seedDatabase() {
  try {
    // connect to database
    await dbconnect();
    console.log("✅ Connected to MongoDB");

    // clear old data (optional)
    await User.deleteMany({});
    console.log("🗑️ Old User data removed");

    // create user

    const newUser = new User(userData);
    await newUser.save();

    console.log("🎉 User inserted successfully:", newUser);
  } catch (error) {
    console.error("❌ Error inserting data:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
