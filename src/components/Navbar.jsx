import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const onlineServices = {
    "Rental Agreements": "/services/rental-agreements",
    "Lease Agreements": "/services/lease-agreements",
    "Commercial Documents": "/services/commercial-documents",
    "Affidavits": "/services/affidavits",
    "Notices": "/services/notices",
    "Business Agreements": "/services/business-agreements",
    "Employment Agreements": "/services/employment-agreements",
    "Corporate Agreement": "/services/corporate-agreement",
    "Sale Documents": "/services/sale-documents",
    "Commercial establishments": "/services/commercial-establishments"
  };

  const offlineServices = {
    "E-commerce contracts": "/services/e-commerce-contracts",
    "Intellectual property agreements": "/services/intellectual-property-agreements",
    "Post contractual contracts/matters": "/services/post-contractual-matters",
    "Power of attorney": "/services/power-of-attorney",
    "Real estate related agreements": "/services/real-estate-agreements",
    "Wills": "/services/wills",
    "Intellectual Property Agreement": "/services/intellectual-property-agreement"
  };

  return (
    <nav className="bg-white p-6 text-black border-b">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        {/* Left side: Logo */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-700">Lease</Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-4 justify-center font-semibold">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="nav-link flex items-center">
              Services/Agreement
            </button>
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-center text-black p-4 rounded-lg shadow-lg w-[90vw] max-w-6xl transition-all duration-300 dropdown-menu ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="flex flex-col space-y-4">
                {/* Render Online Services */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Online Services</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(onlineServices).map(([name, path]) => (
                      <Link
                        key={name}
                        to={path}
                        className="p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 text-sm"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Render Offline Services */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Offline Services</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(offlineServices).map(([name, path]) => (
                      <Link
                        key={name}
                        to={path}
                        className="p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 text-sm"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div 
            className="relative group"
            onMouseEnter={() => setFeaturesDropdownOpen(true)}
            onMouseLeave={() => setFeaturesDropdownOpen(false)}
          >
            <button className="nav-link flex items-center">
              Products/Features 
            </button>
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-center text-black p-4 rounded-lg shadow-lg w-[90vw] max-w-xs transition-all duration-300 dropdown-menu ${featuresDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="flex flex-col space-y-4">
                <Link to="/products/e-stamp-paper-services" className="p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 text-sm">
                  E-Stamp Paper Services
                </Link>
                <Link to="/products/rental-receipts" className="p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 text-sm">
                  Rental Receipts
                </Link>
              </div>
            </div>
          </div>
          <Link to="/lawyers-connect" className="nav-link">Lawyer's Connect</Link>
        </div>

        {/* Right side: Signup, Profile, and Search */}
        <div className="flex space-x-4 items-center font-semibold">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="nav-link flex items-center"
          >
            <FaSearch className="mr-1" />
          </button>
          <Link to="/profile" className="nav-link flex items-center">
            <FaUser className="mr-1" />
          </Link>
        </div>
      </div>

      {/* Search Input */}
      {searchOpen && (
        <div className="fixed top-16 right-4 bg-white p-4 shadow-lg rounded-lg w-80 z-50">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded-lg"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
