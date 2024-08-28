// src/pages/RentalAgreements.jsx
import React from "react";
import image1 from "/src/assets/Rectangle 1.png";

const eCommerceAgreementData = [
  {
    title: "Terms of use/terms of service of e-commerce website",
    description: "Details about terms of use and service for e-commerce websites.",
    image: "/src/assets/image (1).png", // Update image paths as necessary
  },
  {
    title: "Privacy Policy",
    description: "Details about privacy policies for websites.",
    image: "/src/assets/image (2).png",
  },
  {
    title: "Cookie policy for a website",
    description: "Details about cookie policies for websites.",
    image: "/src/assets/image (3).png",
  },
  {
    title: "Subscription service agreement",
    description: "Details about subscription service agreements.",
    image: "/src/assets/image (4).png",
  },
  {
    title: "Cancellation, returns and refund policy",
    description: "Details about cancellation, returns, and refund policies.",
    image: "/src/assets/image (1).png",
  },
  {
    title: "E-commerce website development and services agreement",
    description: "Details about agreements for e-commerce website development and services.",
    image: "/src/assets/image (2).png",
  },
  {
    title: "Terms and conditions of sale",
    description: "Details about terms and conditions of sale.",
    image: "/src/assets/image (3).png",
  },
  {
    title: "Internet banking services agreement",
    description: "Details about internet banking services agreements.",
    image: "/src/assets/image (4).png",
  },
  {
    title: "Domain name assignment agreement",
    description: "Details about domain name assignment agreements.",
    image: "/src/assets/image (1).png",
  },
];

const Ecommercecontracts = () => {
  return (
    <div className="p-6">
      <div className="relative">
        <img src={image1} alt="Image Header" className="w-full h-auto" />
        <div className="absolute top-1/3 w-full text-center">
          <h2 className="text-4xl font-bold text-black">E-Commerce Agreements</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-10/12 mx-auto mt-8">
        {eCommerceAgreementData.map((item, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="font-bold text-[#B88E2F] border-2 border-[#B88E2F] px-10 py-2 rounded">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Ecommercecontracts;
