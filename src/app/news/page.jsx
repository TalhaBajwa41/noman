'use client';

import { useState } from 'react';

export default function NewsPage() {
  const categories = ["All", "Market", "Electric Cars", "Tips", "CarHub Updates"];
  const [activeCategory, setActiveCategory] = useState("All");

  const news = [
    {
      title: "CarHub Expands Nationwide with New Dealership Partnerships",
      date: "Aug 15, 2025",
      category: "CarHub Updates",
      image: "https://source.unsplash.com/800x400/?car,dealership",
      excerpt: "CarHub announces its expansion to 50 new cities, making it easier than ever to buy, sell, and finance vehicles.",
    },
    {
      title: "Top 10 Electric Cars to Watch in 2025",
      date: "Aug 12, 2025",
      category: "Electric Cars",
      image: "https://source.unsplash.com/800x400/?electric-car,tesla",
      excerpt: "From Tesla to Rivian, discover which EVs are redefining the road in 2025.",
    },
    {
      title: "Car Market Trends: Is Now the Right Time to Buy?",
      date: "Aug 10, 2025",
      category: "Market",
      image: "https://source.unsplash.com/800x400/?car-market",
      excerpt: "Experts weigh in on interest rates, demand, and supply — what it means for car buyers and sellers.",
    },
    {
      title: "5 Tips for Selling Your Car Faster",
      date: "Aug 8, 2025",
      category: "Tips",
      image: "https://source.unsplash.com/800x400/?car-sale",
      excerpt: "These proven strategies can help you get top dollar and sell your car in record time.",
    },
  ];

  const filteredNews =
    activeCategory === "All"
      ? news
      : news.filter((n) => n.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero */}
      <section className="text-center px-6 py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Latest <span className="text-cyan-400">CarHub News</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Stay updated with automotive insights, electric car innovations, and CarHub announcements.
        </p>
      </section>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 py-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              activeCategory === cat
                ? "bg-cyan-500 text-white border-cyan-500"
                : "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      {filteredNews.length > 0 && (
        <section className="px-6 pb-16 max-w-6xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg grid md:grid-cols-2">
            <img
              src={filteredNews[0].image}
              alt={filteredNews[0].title}
              className="w-full h-64 md:h-auto object-cover"
            />
            <div className="p-6 flex flex-col justify-center">
              <p className="text-sm text-gray-400">{filteredNews[0].date}</p>
              <h2 className="text-2xl font-bold mt-2">{filteredNews[0].title}</h2>
              <p className="text-gray-400 mt-4">{filteredNews[0].excerpt}</p>
              <button className="mt-6 px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold w-fit">
                Read More
              </button>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="px-6 pb-20 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.slice(1).map((n, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            <img src={n.image} alt={n.title} className="w-full h-40 object-cover" />
            <div className="p-5 flex-1 flex flex-col">
              <p className="text-sm text-gray-400">{n.date}</p>
              <h3 className="text-lg font-semibold mt-1">{n.title}</h3>
              <p className="text-gray-400 mt-2 flex-1">{n.excerpt}</p>
              <button className="mt-4 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold w-fit">
                Read More
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
