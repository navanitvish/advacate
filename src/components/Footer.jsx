// src/Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className=" bg-orange-950 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Logo */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-xl font-bold">
          <Link to="/">Lease</Link>
          </div>
          {/* Column 1 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Company</h3>
            <ul>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <ul>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Services</h3>
            <ul>
              <li>
                <a
                  href="/services/rental-agreements"
                  className="hover:underline"
                >
                  Rental Agreements
                </a>
              </li>
              <li>
                <a
                  href="/services/lease-agreements"
                  className="hover:underline"
                >
                  Lease Agreements
                </a>
              </li>
              {/* Add more services links */}
            </ul>
          </div>
          {/* Social Media */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-white hover:text-blue-600"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-white hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-white hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
