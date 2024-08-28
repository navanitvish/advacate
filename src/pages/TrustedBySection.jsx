import React from 'react';
import { FaGoogle, FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaLinkedin, FaPinterest, FaSnapchat } from 'react-icons/fa';
import './TrustedBySection.css'
function TrustedBySection() {
  return (
    <section className="trusted-by-section bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Trusted By Over Million Users</h2>
        <div className="flex flex-wrap justify-between w-10/12 mx-auto items-center space-x-6">
          <FaGoogle className="icon-animation w-16 h-16" />
          <FaInstagram className="icon-animation w-16 h-16" />
          <FaTwitter className="icon-animation w-16 h-16" />
          <FaYoutube className="icon-animation w-16 h-16" />
          <FaFacebook className="icon-animation w-16 h-16" />
          <FaLinkedin className="icon-animation w-16 h-16" />
          <FaPinterest className="icon-animation w-16 h-16" />
          <FaSnapchat className="icon-animation w-16 h-16" />
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
