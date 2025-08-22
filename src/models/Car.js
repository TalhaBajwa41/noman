// models/Car.js
import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  mileage: Number,
  details: String,
  photos: [String], // file paths or URLs
}, { timestamps: true });

export default mongoose.models.Car || mongoose.model("Car", CarSchema);
