import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Connecting to:", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "carhub",
    });
    console.log("✅ MongoDB connected!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
};
