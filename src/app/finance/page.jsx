'use client';

import { useState } from 'react';

export default function FinancePage() {
  const [price, setPrice] = useState(20000);
  const [downPayment, setDownPayment] = useState(2000);
  const [term, setTerm] = useState(36);
  const [rate, setRate] = useState(5);

  const loanAmount = price - downPayment;
  const monthlyRate = rate / 100 / 12;
  const monthlyPayment =
    loanAmount > 0
      ? (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term))
      : 0;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Flexible <span className="text-cyan-400">Car Finance</span> Options
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Drive your dream car with affordable monthly payments. Tailored financing to fit your lifestyle.
        </p>
      </section>

      {/* Why CarHub Finance */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { title: "Low Interest Rates", desc: "Get competitive APRs with no hidden fees." },
          { title: "Flexible Terms", desc: "Choose repayment plans from 12 to 72 months." },
          { title: "Fast Approval", desc: "Apply online and get approved in minutes." },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-800"
          >
            <h3 className="text-xl font-semibold text-cyan-400">{card.title}</h3>
            <p className="mt-2 text-gray-400">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* Finance Calculator */}
      <section className="px-6 py-20 bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Finance Calculator</h2>
          <div className="space-y-6 bg-gray-950 border border-gray-800 rounded-2xl p-6">
            {/* Car Price */}
            <div>
              <label className="block mb-2 text-gray-300">Car Price ($)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2"
              />
            </div>
            {/* Down Payment */}
            <div>
              <label className="block mb-2 text-gray-300">Down Payment ($)</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2"
              />
            </div>
            {/* Term */}
            <div>
              <label className="block mb-2 text-gray-300">Term (months)</label>
              <input
                type="number"
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2"
              />
            </div>
            {/* Interest Rate */}
            <div>
              <label className="block mb-2 text-gray-300">Interest Rate (%)</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2"
              />
            </div>
            {/* Result */}
            <div className="text-center">
              <p className="text-gray-400">Estimated Monthly Payment</p>
              <p className="text-3xl font-bold text-cyan-400">
                ${monthlyPayment.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Apply for Financing</h2>
          <p className="text-gray-400 mb-10">
            Fill out the form below and our finance team will contact you shortly.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-950 border border-gray-800 rounded-2xl p-6 space-y-4">
          <input placeholder="Full Name" className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full" />
          <input placeholder="Email Address" className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full" />
          <input placeholder="Phone Number" className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full" />
          <textarea placeholder="Additional Details" className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full min-h-[100px]" />
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg">
            Submit Application
          </button>
        </div>
      </section>
    </div>
  );
}
