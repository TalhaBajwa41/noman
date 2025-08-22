'use client';
import React, { useState, useEffect } from 'react';
import { Search, Filter, Heart, Eye, Calendar, Fuel, Settings, MapPin, Star, ChevronDown, ArrowRight } from 'lucide-react';

const CarHubBuyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [likedCars, setLikedCars] = useState(new Set());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const cars = [
    {
      id: 1,
      name: "BMW M4 Competition",
      price: 75900,
      year: 2023,
      mileage: "2,500 mi",
      fuel: "Gasoline",
      transmission: "Automatic",
      location: "New York, NY",
      rating: 4.9,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "luxury"
    },
    {
      id: 2,
      name: "Tesla Model S Plaid",
      price: 89990,
      year: 2023,
      mileage: "1,200 mi",
      fuel: "Electric",
      transmission: "Automatic",
      location: "Los Angeles, CA",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electric"
    },
    {
      id: 3,
      name: "Porsche 911 Turbo S",
      price: 124500,
      year: 2024,
      mileage: "800 mi",
      fuel: "Gasoline",
      transmission: "PDK",
      location: "Miami, FL",
      rating: 5.0,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "luxury"
    },
    {
      id: 4,
      name: "Honda Civic Type R",
      price: 42900,
      year: 2023,
      mileage: "5,200 mi",
      fuel: "Gasoline",
      transmission: "Manual",
      location: "Chicago, IL",
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "sport"
    },
    {
      id: 5,
      name: "Audi e-tron GT",
      price: 67800,
      year: 2023,
      mileage: "3,100 mi",
      fuel: "Electric",
      transmission: "Automatic",
      location: "Seattle, WA",
      rating: 4.6,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electric"
    },
    {
      id: 6,
      name: "Ford Mustang GT",
      price: 38900,
      year: 2023,
      mileage: "4,800 mi",
      fuel: "Gasoline",
      transmission: "Automatic",
      location: "Dallas, TX",
      rating: 4.5,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1494976688539-4db8f5a4b36c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "sport"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Cars', count: cars.length },
    { id: 'luxury', name: 'Luxury', count: cars.filter(c => c.category === 'luxury').length },
    { id: 'electric', name: 'Electric', count: cars.filter(c => c.category === 'electric').length },
    { id: 'sport', name: 'Sport', count: cars.filter(c => c.category === 'sport').length }
  ];

  const filteredCars = cars.filter(car => {
    const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const toggleLike = (carId) => {
    const newLiked = new Set(likedCars);
    if (newLiked.has(carId)) {
      newLiked.delete(carId);
    } else {
      newLiked.add(carId);
    }
    setLikedCars(newLiked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className={`relative overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Car Hub
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover your perfect ride from our premium collection of luxury and performance vehicles
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for your dream car..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className={`lg:w-80 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Filters</h3>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={`space-y-6 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
                {/* Categories */}
                <div>
                  <h4 className="font-medium mb-3 text-gray-300">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                          selectedCategory === category.id ? 'bg-blue-500/20 border border-blue-500/50' : 'bg-white/5'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-400">{category.count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-3 text-gray-300">Price Range</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="150000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-blue-500"
                    />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>${priceRange[0].toLocaleString()}</span>
                      <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Available Cars</h2>
                <p className="text-gray-400">{filteredCars.length} vehicles found</p>
              </div>
              <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400">
                <option value="featured">Sort by Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="year">Year</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCars.map((car, index) => (
                <div
                  key={car.id}
                  className={`group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <button
                      onClick={() => toggleLike(car.id)}
                      className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                        likedCars.has(car.id) 
                          ? 'bg-red-500/80 text-white' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedCars.has(car.id) ? 'fill-current' : ''}`} />
                    </button>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center text-white text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{car.rating}</span>
                        <span className="text-gray-300 ml-1">({car.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-2xl font-bold text-blue-400 mb-4">
                      ${car.price.toLocaleString()}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-300 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{car.year} • {car.mileage}</span>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Fuel className="w-4 h-4 mr-2" />
                        <span>{car.fuel}</span>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Settings className="w-4 h-4 mr-2" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{car.location}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:transform hover:translate-y-[-2px] hover:shadow-lg">
                        Buy Now
                      </button>
                      <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-xl font-semibold mb-2">No cars found</h3>
                <p className="text-gray-400">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16 mt-16 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-300 mb-8">Let our experts help you find the perfect car that matches your needs and budget</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg flex items-center mx-auto">
            Contact Our Experts
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarHubBuyPage;