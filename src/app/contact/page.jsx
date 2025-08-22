// app/contact/page.jsx
'use client';

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Get in Touch with <span className="text-cyan-400">CarHub</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Have questions about buying, selling, or financing? We’re here to help.
        </p>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-gray-950 border border-gray-800 rounded-lg px-3 py-2 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-gray-950 border border-gray-800 rounded-lg px-3 py-2 w-full"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="bg-gray-950 border border-gray-800 rounded-lg px-3 py-2 w-full"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="bg-gray-950 border border-gray-800 rounded-lg px-3 py-2 w-full min-h-[150px]"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center mt-2">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center mt-2">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="px-6 pb-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-semibold text-cyan-400">Our Office</h3>
          <p>CarHub HQ, 123 Auto Street, Motor City</p>
          <p>Email: support@carhub.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Hours: Mon - Fri, 9:00 AM - 6:00 PM</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0932972140767!2d-122.40137602443576!3d37.79361757198902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d4b7b3b5%3A0x7f6c56a42e2f36a5!2sAuto%20Hub!5e0!3m2!1sen!2sus!4v1702345678901!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
