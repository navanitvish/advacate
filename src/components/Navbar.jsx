import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const onlineServices = {
    "Rental Agreements": {
      path: "/services/rental-agreements",
      subCategories: [
        { name: "Rent Agreements", path: "/services/rental-agreements/rent-agreements" },
        { name: "House rent agreement", path: "/services/rental-agreements/house-rent-agreement" },
        // ... (other subcategories remain the same)
      ]
    },
    "Business Agreements": {
      path: "/services/business-agreements",
      subCategories: [
        { name: "Partnership Deed", path: "/services/business-agreements/partnership-deed" },
        { name: "Office Sharing Agreement", path: "/services/business-agreements/office-sharing-agreement" },
        // ... (other subcategories remain the same)
      ]
    },
    "Employment Agreements": {
      path: "/services/employment-agreements",
      subCategories: [
        { name: "Offer letter", path: "/services/employment-agreements/offer-letter" },
        { name: "Appointment letter", path: "/services/employment-agreements/appointment-letter" },
        // ... (other subcategories remain the same)
      ]
    },
    "Affidavits": {
      path: "/services/affidavits",
      subCategories: [
        { name: "Address Proof Affidavit", path: "/services/affidavits/address-proof-affidavit" },
        { name: "Affidavit For Change Of Name", path: "/services/affidavits/change-of-name" },
        // ... (other subcategories remain the same)
      ]
    },
    "Sale Documents": {
      path: "/services/sale-documents",
      subCategories: [
        { name: "Agreement for sale of house", path: "/services/sale-documents/agreement-for-sale-of-house" },
        { name: "Agreement for sale of apartment in co-operative society", path: "/services/sale-documents/agreement-for-sale-apartment" },
        // ... (other subcategories remain the same)
      ]
    },
    "Commercial Establishments": {
      path: "/services/commercial-establishments",
      subCategories: [
        { name: "Notice for Dishonour of Cheque", path: "/services/commercial-establishments/notice-dishonour-cheque" },
        { name: "Notice of Dissolution of Partnership", path: "/services/commercial-establishments/notice-dissolution-partnership" },
        // ... (other subcategories remain the same)
      ]
    },
    "E-commerce contracts": {
      path: "/services/e-commerce-contracts",
      subCategories: [
        { name: "Terms of use terms of service of ecommerce website", path: "/services/e-commerce-contracts/terms-of-use" },
        { name: "Privacy Policy", path: "/services/e-commerce-contracts/privacy-policy" },
        // ... (other subcategories remain the same)
      ]
    },
    "Intellectual property agreements": {
      path: "/services/intellectual-property-agreements",
      subCategories: []
    },
    "Post contractual contracts/matters": {
      path: "/services/post-contractual-matters",
      subCategories: []
    },
    "Power of attorney": {
      path: "/services/power-of-attorney",
      subCategories: []
    },
    "Real estate related agreements": {
      path: "/services/real-estate-agreements",
      subCategories: []
    },
    "Wills": {
      path: "/services/wills",
      subCategories: []
    },
    "Intellectual Property Agreement": {
      path: "/services/intellectual-property-agreement",
      subCategories: []
    }
  };

  const offlineServices = {
    "Rental Agreements": {
      path: "/offline-services/rental-agreements",
      subCategories: [
        { name: "Rent Agreements", path: "/offline-services/rental-agreements/rent-agreements" },
        { name: "House rent agreement", path: "/offline-services/rental-agreements/house-rent-agreement" },
        // ... (other subcategories remain the same)
      ]
    },
    "Business Agreements": {
      path: "/offline-services/business-agreements",
      subCategories: [
        { name: "Partnership Deed", path: "/offline-services/business-agreements/partnership-deed" },
        { name: "Office Sharing Agreement", path: "/offline-services/business-agreements/office-sharing-agreement" },
        // ... (other subcategories remain the same)
      ]
    },
    "Employment Agreements": {
      path: "/offline-services/employment-agreements",
      subCategories: [
        { name: "Offer letter", path: "/offline-services/employment-agreements/offer-letter" },
        { name: "Appointment letter", path: "/offline-services/employment-agreements/appointment-letter" },
        // ... (other subcategories remain the same)
      ]
    },
    "Affidavits": {
      path: "/offline-services/affidavits",
      subCategories: [
        { name: "Address Proof Affidavit", path: "/offline-services/affidavits/address-proof-affidavit" },
        { name: "Affidavit For Change Of Name", path: "/offline-services/affidavits/change-of-name" },
        // ... (other subcategories remain the same)
      ]
    },
    "Sale Documents": {
      path: "/offline-services/sale-documents",
      subCategories: [
        { name: "Agreement for sale of house", path: "/offline-services/sale-documents/agreement-for-sale-of-house" },
        { name: "Agreement for sale of apartment in co-operative society", path: "/offline-services/sale-documents/agreement-for-sale-apartment" },
        // ... (other subcategories remain the same)
      ]
    },
    "Commercial Establishments": {
      path: "/offline-services/commercial-establishments",
      subCategories: [
        { name: "Notice for Dishonour of Cheque", path: "/offline-services/commercial-establishments/notice-dishonour-cheque" },
        { name: "Notice of Dissolution of Partnership", path: "/offline-services/commercial-establishments/notice-dissolution-partnership" },
        // ... (other subcategories remain the same)
      ]
    },
    "E-commerce contracts": {
      path: "/offline-services/e-commerce-contracts",
      subCategories: [
        { name: "Terms of use terms of service of ecommerce website", path: "/offline-services/e-commerce-contracts/terms-of-use" },
        { name: "Privacy Policy", path: "/offline-services/e-commerce-contracts/privacy-policy" },
        // ... (other subcategories remain the same)
      ]
    },
    "Intellectual property agreements": {
      path: "/offline-services/intellectual-property-agreements",
      subCategories: []
    },
    "Post contractual contracts/matters": {
      path: "/offline-services/post-contractual-matters",
      subCategories: []
    },
    "Power of attorney": {
      path: "/offline-services/power-of-attorney",
      subCategories: []
    },
    "Real estate related agreements": {
      path: "/offline-services/real-estate-agreements",
      subCategories: []
    },
    "Wills": {
      path: "/offline-services/wills",
      subCategories: []
    },
    "Intellectual Property Agreement": {
      path: "/offline-services/intellectual-property-agreement",
      subCategories: []
    }
  };
  const renderDropdown = (services, type) => (
    <div>
      <h3 className="font-semibold text-lg mb-2">{type}</h3>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(services).map(([name, { path, subCategories }]) => (
          <div key={name} className="text-left">
            <Link to={path} className="p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 text-sm">
              {name}
            </Link>
            {subCategories.length > 0 && (
              <ul className="pl-4 mt-2 text-xs">
                {subCategories.map(subCategory => (
                  <li key={subCategory.path} className="py-1 hover:underline">
                    <Link to={subCategory.path}>{subCategory.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <nav className="bg-white p-6 text-black border-b">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-700">Lease</Link>
        </div>

        <div className="flex space-x-4 justify-center font-semibold">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>

          {/* Services/Agreement Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="nav-link flex items-center">
              Services/Agreement
            </button>
            <div className={`absolute top-full left-1/2 dropdown-menu transform -translate-x-1/2 mt-2 bg-white text-center text-black p-4 rounded-lg shadow-lg w-[90vw] max-w-6xl transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="flex flex-col space-y-4">
                {renderDropdown(onlineServices, 'Online Services')}
                {/* Add rendering for offlineServices here */}
              </div>
            </div>
          </div>

          {/* Products/Features Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setFeaturesDropdownOpen(true)}
            onMouseLeave={() => setFeaturesDropdownOpen(false)}
          >
            <button className="nav-link flex items-center">
              Products/Features
            </button>
            <div className={`absolute top-full left-1/2 dropdown-menu transform -translate-x-1/2 mt-2 bg-white text-center text-black p-4 rounded-lg shadow-lg w-[90vw] max-w-xs transition-all duration-300 ${featuresDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
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
