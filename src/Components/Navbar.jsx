import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">MyLogo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-600">
              State
            </a>
            <a href="/practice" className="text-gray-600 hover:text-blue-600">
              Practice
            </a>
            <a href="/faraway" className="text-gray-600 hover:text-blue-600">
              Far-away
            </a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Sign In
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Services
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-2">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
