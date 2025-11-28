'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-purple-400" />
              <div className="absolute inset-0 blur-xl bg-purple-400/50 animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              HERO😎
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 relative group">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 relative group">
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          
          <button className="hidden md:block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium">
              Get Started
            </div>
          </button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-gray-300 hover:text-purple-400 py-2">Features</a>
            <a href="#testimonials" className="block text-gray-300 hover:text-purple-400 py-2">Testimonials</a>
            <a href="#pricing" className="block text-gray-300 hover:text-purple-400 py-2">Pricing</a>
            <a href="#contact" className="block text-gray-300 hover:text-purple-400 py-2">Contact</a>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}