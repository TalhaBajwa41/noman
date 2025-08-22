'use client';
import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowUp,
  Shield,
  Award,
  Users,
  Heart,
  ChevronRight
} from 'lucide-react';

export default function CarHubFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        const footerTop = footerElement.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        setIsVisible(scrollPosition > footerTop - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = () => {
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const footerLinks = {
    'Buy Cars': ['New Cars', 'Used Cars', 'Certified Pre-Owned', 'Electric Vehicles', 'Luxury Cars'],
    'Sell Cars': ['Sell Your Car', 'Get Valuation', 'Trade-In', 'Instant Offer', 'Selling Tips'],
    'Services': ['Car Loans', 'Insurance', 'Extended Warranty', 'Maintenance', 'Roadside Assistance'],
    'Company': ['About Us', 'Careers', 'Press', 'Investor Relations', 'Contact Us']
  };

  const stats = [
    { icon: Car, number: '50K+', label: 'Cars Listed' },
    { icon: Users, number: '1M+', label: 'Happy Customers' },
    { icon: Shield, number: '99.9%', label: 'Trust Score' },
    { icon: Award, number: '500+', label: 'Dealer Partners' }
  ];

  return (
    <footer 
      id="footer"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-spin"></div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`text-center group transition-all duration-500 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative mb-4">
                    <IconComponent className="h-8 w-8 text-cyan-400 mx-auto group-hover:text-cyan-300 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6'
                }`}
              >
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-6 group cursor-pointer">
                  <div className="relative">
                    <Car className="h-10 w-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    CarHub
                  </span>
                </div>

                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Your trusted partner in finding the perfect vehicle. We connect buyers and sellers 
                  with premium cars and exceptional service.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                    <Phone className="h-5 w-5 text-cyan-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <span>hello@carhub.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                    <span>123 Auto Street, Car City, CC 12345</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                  <div
                    key={category}
                    className={`transition-all duration-500 ${
                      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                    }`}
                    style={{ transitionDelay: `${200 + categoryIndex * 100}ms` }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                          >
                            <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              {link}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-2">
              <div
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Stay Updated</h3>
                <p className="text-gray-400 mb-6">
                  Get the latest car deals and news delivered to your inbox.
                </p>
                
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <button
                    onClick={handleNewsletterSubmit}
                    className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    Subscribe
                  </button>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[
                      { Icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                      { Icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                      { Icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                      { Icon: Youtube, href: '#', color: 'hover:text-red-400' }
                    ].map(({ Icon, href, color }, index) => (
                      <a
                        key={index}
                        href={href}
                        className={`p-2 bg-white/10 backdrop-blur-md rounded-xl text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transition-all duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="text-gray-400 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start space-x-1">
                <span>© 2025 CarHub. Made with</span>
                <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                <span>for car enthusiasts</span>
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}