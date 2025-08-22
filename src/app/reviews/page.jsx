'use client';

import { useState } from 'react';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([
    { name: "Emily Johnson", rating: 5, text: "CarHub made selling my car effortless! Got a great price in no time." },
    { name: "Michael Lee", rating: 4, text: "Financing was smooth and transparent. Monthly payments are manageable." },
    { name: "Sophia Patel", rating: 5, text: "Loved the experience! Quick offers and professional support." },
  ]);

  const [form, setForm] = useState({ name: "", rating: 5, text: "" });

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length || 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    setReviews([{ ...form }, ...reviews]);
    setForm({ name: "", rating: 5, text: "" });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero */}
      <section className="text-center px-6 py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          What Our Customers Say
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Real stories from real drivers. Discover why people trust{" "}
          <span className="text-cyan-400 font-semibold">CarHub</span>.
        </p>
      </section>

      {/* Rating Summary */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold mb-2">Average Rating</h2>
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-2xl ${
                i < Math.round(avgRating) ? "text-yellow-400" : "text-gray-600"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <p className="text-gray-400 mt-2">
          {avgRating.toFixed(1)} out of 5 based on {reviews.length} reviews
        </p>
      </section>

      {/* Reviews List */}
      <section className="px-6 py-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{r.name}</h3>
              <div>
                {Array.from({ length: 5 }).map((_, j) => (
                  <span
                    key={j}
                    className={`${
                      j < r.rating ? "text-yellow-400" : "text-gray-600"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-400">{r.text}</p>
          </div>
        ))}
      </section>

      {/* Review Form */}
      <section className="px-6 py-20 bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Write a Review</h2>
          <p className="text-gray-400 mb-10">
            Share your CarHub experience and help others make the right choice.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gray-950 border border-gray-800 rounded-2xl p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full"
          />
          <select
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
            className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full"
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>
                {n} Star{n > 1 && "s"}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Your Review"
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full min-h-[100px]"
          />
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg"
          >
            Submit Review
          </button>
        </form>
      </section>
    </div>
  );
}
