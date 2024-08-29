import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false); // New state for Features dropdown
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleFeaturesDropdown = () => {
    setFeaturesDropdownOpen(!featuresDropdownOpen);
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const onlineServices = {
    "Rental Agreements": {
      path: "/services/rental-agreements",
      subCategories: [
        {
          name: "House rent agreement",
          path: "/services/house-agreements",
        },
        {
          name: "Flat rent agreement",
          path: "/services/rental-agreements/house-rent-agreement",
        },

        {
          name: "Furnished house rent agreement",
          path: "/services/rental-agreements/house-rent-agreement",
        },

        {
          name: "Quick rental agreement",
          path: "/services/rental-agreements/house-rent-agreement",
        },

        {
          name: "Residential lease agreement",
          path: "/services/rental-agreements/house-rent-agreement",
        },
        {
          name: "Furnished flat rental agreement",
          path: "/services/rental-agreements/house-rent-agreement",
        },
        {
          name: "Room rental agreement",
          path: "/services/rental-agreements/house-rent-agreement",
        },
        // ... (other subcategories remain the same)
      ],
    },
    "Lease Agreements ": {
      path: "/services/rental-agreements",
      subCategories: [
        {
          name: "Rent Agreements",
          path: "/services/rental-agreements/rent-agreements",
        },
        {
          name: "House rent agreement",
          path: "/services/rental-agreements/house-rent-agreement",
        },
        // ... (other subcategories remain the same)
      ],
    },
    "Affidavits ": {
      path: "/services/rental-agreements",
      subCategories: [
        {
          name: "Rent Agreements",
          path: "/services/rental-agreements/rent-agreements",
        },
        {
          name: "House rent agreement",
          path: "/services/rental-agreements/house-rent-agreement",
        },
        // ... (other subcategories remain the same)
      ],
    },

    "Commercial Documents ": {
      path: "/services/rental-agreements",
      subCategories: [
        {
          name: "Rent Agreements",
          path: "/services/rental-agreements/rent-agreements",
        },
        {
          name: "House rent agreement",
          path: "/services/rental-agreements/house-rent-agreement",
        },
        // ... (other subcategories remain the same)
      ],
    },
    "Business Agreements": {
      path: "/services/business-agreements",
      subCategories: [
        {
          name: "Partnership Deed",
          path: "/services/business-agreements/partnership-deed",
        },
        {
          name: "Office Sharing Agreement",
          path: "/services/business-agreements/office-sharing-agreement",
        },
        // ... (other subcategories remain the same)
      ],
    },
    Notices: {
      path: "/services/business-agreements",
      subCategories: [
        {
          name: "Partnership Deed",
          path: "/services/business-agreements/partnership-deed",
        },
        {
          name: "Office Sharing Agreement",
          path: "/services/business-agreements/office-sharing-agreement",
        },
        // ... (other subcategories remain the same)
      ],
    },
    "Corporate Agreement": {
      path: "/services/business-agreements",
      subCategories: [
        {
          name: "Partnership Deed",
          path: "/services/business-agreements/partnership-deed",
        },
        {
          name: "Office Sharing Agreement",
          path: "/services/business-agreements/office-sharing-agreement",
        },
        // ... (other subcategories remain the same)
      ],
    },

    "Employment Agreements": {
      path: "/services/employment-agreements",
      subCategories: [
        {
          name: "Offer letter",
          path: "/services/employment-agreements/offer-letter",
        },
        {
          name: "Appointment letter",
          path: "/services/employment-agreements/appointment-letter",
        },
        // ... (other subcategories remain the same)
      ],
    },

    "Sale Documents": {
      path: "/services/sale-documents",
      subCategories: [
        {
          name: "Agreement for sale of house",
          path: "/services/sale-documents/agreement-for-sale-of-house",
        },
        {
          name: "Agreement for sale of apartment in co-operative society",
          path: "/services/sale-documents/agreement-for-sale-apartment",
        },
        // ... (other subcategories remain the same)
      ],
    },
    "Commercial Establishments": {
      path: "/services/commercial-establishments",
      subCategories: [
        {
          name: "Notice for Dishonour of Cheque",
          path: "/services/commercial-establishments/notice-dishonour-cheque",
        },
        {
          name: "Notice of Dissolution of Partnership",
          path: "/services/commercial-establishments/notice-dissolution-partnership",
        },
        // ... (other subcategories remain the same)
      ],
    },
  };

  const offlineServices = {
    "E-commerce contracts": {
      path: "/offline-services/e-commerce-contracts",
      subCategories: [
        {
          name: "Terms of use terms of service of ecommerce website",
          path: "/offline-services/e-commerce-contracts/terms-of-use",
        },
        {
          name: "Privacy Policy",
          path: "/offline-services/e-commerce-contracts/privacy-policy",
        },
        // ... (other subcategories remain the same)
      ],
    },
    "Intellectual property agreements": {
      path: "/offline-services/intellectual-property-agreements",
      subCategories: [
        {
          name: "Notice for Dishonour of Cheque",
          path: "/services/commercial-establishments/notice-dishonour-cheque",
        },
        {
          name: "Notice of Dissolution of Partnership",
          path: "/services/commercial-establishments/notice-dissolution-partnership",
        },
      ],
    },
    "Post contractual contracts/matters": {
      path: "/offline-services/post-contractual-matters",
      subCategories: [
        {
          name: "Notice for Dishonour of Cheque",
          path: "/services/commercial-establishments/notice-dishonour-cheque",
        },
        {
          name: "Notice of Dissolution of Partnership",
          path: "/services/commercial-establishments/notice-dissolution-partnership",
        },
      ],
    },
    "Power of attorney": {
      path: "/offline-services/power-of-attorney",
      subCategories: [
        {
          name: "Notice for Dishonour of Cheque",
          path: "/services/commercial-establishments/notice-dishonour-cheque",
        },
        {
          name: "Notice of Dissolution of Partnership",
          path: "/services/commercial-establishments/notice-dissolution-partnership",
        },
      ],
    },
    "Real estate related agreements": {
      path: "/offline-services/real-estate-agreements",
      subCategories: [
        {
          name: "Notice for Dishonour of Cheque",
          path: "/services/commercial-establishments/notice-dishonour-cheque",
        },
        {
          name: "Notice of Dissolution of Partnership",
          path: "/services/commercial-establishments/notice-dissolution-partnership",
        },
      ],
    },
    Wills: {
      path: "/offline-services/wills",
      subCategories: [
        {
          name: "Notice for Dishonour of Cheque",
          path: "/services/commercial-establishments/notice-dishonour-cheque",
        },
        {
          name: "Notice of Dissolution of Partnership",
          path: "/services/commercial-establishments/notice-dissolution-partnership",
        },
      ],
    },
    "Intellectual Property Agreement": {
      path: "/offline-services/intellectual-property-agreement",
      subCategories: [
        {
          name: "Notice for Dishonour of Cheque",
          path: "/services/commercial-establishments/notice-dishonour-cheque",
        },
        {
          name: "Notice of Dissolution of Partnership",
          path: "/services/commercial-establishments/notice-dissolution-partnership",
        },
      ],
    },
  };
  const renderServiceList = (services, title) => (
    <div className="text-left mb-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <ul className="grid grid-cols-3 gap-4">
        {Object.entries(services).map(([name, { path, subCategories }]) => (
          <li key={name} className="relative text-left">
            <button
              onClick={() => toggleCategory(name)}
              className="p-2 bg-gray-300 rounded-lg shadow-md hover:bg-gray-200 dropdown-menu transition-all duration-300 text-md block w-full text-left"
            >
              {name}
            </button>
            {activeCategory === name &&
              subCategories &&
              subCategories.length > 0 && (
                <ul className="ml-4 mt-2 p-4 bg-white border  shadow-md">
                  {subCategories.map((subCategory) => (
                    <li
                      key={subCategory.path}
                      className=" px-6 py-2 hover:bg-gray-200 "
                    >
                      <Link to={subCategory.path}>{subCategory.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="bg-white p-6 text-black border-b">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-700">
            Lease
          </Link>
        </div>

        <div className="flex space-x-4 justify-center font-semibold">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About Us
          </Link>

          {/* Services/Agreement Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="nav-link flex items-center"
            >
              Services/Agreement
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 dropdown-menu transform -translate-x-1/2 mt-2 bg-white text-black p-4 rounded-lg shadow-lg w-[90vw] max-w-6xl">
                {/* Online Services Section */}
                {renderServiceList(onlineServices, "Online Services")}

                {/* Offline Services Section */}
                {renderServiceList(offlineServices, "Offline Services")}
              </div>
            )}
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
            <div
              className={`absolute top-full left-1/2 dropdown-menu transform -translate-x-1/2 mt-2 bg-white text-center text-black p-4 rounded-lg shadow-lg w-[90vw] max-w-xs transition-all duration-300 ${
                featuresDropdownOpen
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <div className="flex flex-col space-y-4">
                <Link
                  to="/products/e-stamp-paper-services"
                  className="p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 text-sm"
                >
                  E-Stamp Paper Services
                </Link>
                <Link
                  to="/products/rental-receipts"
                  className="p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 text-sm"
                >
                  Rental Receipts
                </Link>
              </div>
            </div>
          </div>

          <Link to="/lawyers-connect" className="nav-link">
            Lawyer's Connect
          </Link>
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
