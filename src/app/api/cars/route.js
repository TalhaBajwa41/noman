// app/api/cars/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Car from "@/models/Car";

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    const carData = {
      make: formData.get("make"),
      model: formData.get("model"),
      year: parseInt(formData.get("year")),
      mileage: parseInt(formData.get("mileage")),
      details: formData.get("details"),
      photos: formData.getAll("photos").map((file) => file.name), // Save file names for now
    };

    await connectDB();
    const newCar = await Car.create(carData);

    return NextResponse.json({ success: true, car: newCar });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
