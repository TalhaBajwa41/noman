// app/sell/page.jsx
'use client';

import { useState } from 'react';
export default function SellPage() {
  const [photos, setPhotos] = useState([]);
  const [preview, setPreview] = useState([]);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
    setPreview(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    photos.forEach((photo) => formData.append("photos", photo));

    const res = await fetch("/api/cars", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      alert("Car submitted successfully!");
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Sell Your Car with <span className="text-cyan-400">CarHub</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Get the best value for your car in just a few easy steps. Quick, secure, and hassle-free.
        </p>
      </section>

      {/* Steps Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { title: "1. List Your Car", desc: "Fill in your car details with photos to attract buyers." },
          { title: "2. Get Offers", desc: "Receive instant offers from trusted buyers and dealerships." },
          { title: "3. Sell Fast", desc: "Complete your sale securely with our verified process." },
        ].map((step, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-800"
          >
            <h3 className="text-xl font-semibold text-cyan-400">{step.title}</h3>
            <p className="mt-2 text-gray-400">{step.desc}</p>
          </div>
        ))}
      </section>

      {/* Form Section */}
      <section className="px-6 py-20 bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start Selling Your Car</h2>
          <p className="text-gray-400 mb-10">
            Provide your car details and upload photos — we’ll get you the best offers within minutes.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gray-950 border border-gray-800 rounded-2xl p-6 space-y-4"
        >
          {/* Car Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <input name="make" placeholder="Car Make" className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full" />
            <input name="model" placeholder="Car Model" className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full" />
            <input name="year" type="number" placeholder="Year" className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full" />
            <input name="mileage" type="number" placeholder="Mileage (km)" className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full" />
          </div>

          {/* Additional Details */}
          <textarea
            name="details"
            placeholder="Additional Details"
            className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full min-h-[100px]"
          />

          {/* Photo Upload */}
          <div>
            <label className="block mb-2 text-gray-300">Upload Car Photos</label>
            <input
              type="file"
              name="photos"
              multiple
              accept="image/*"
              onChange={handlePhotoUpload}
              className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600 cursor-pointer"
            />

            {/* Preview */}
            {preview.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {preview.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Car Photo ${i + 1}`}
                    className="rounded-lg border border-gray-800 object-cover w-full h-32"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg"
          >
            Submit Car
          </button>
        </form>
      </section>
    </div>
  );
}
