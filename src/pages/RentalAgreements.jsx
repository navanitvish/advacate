// src/pages/RentalAgreements.jsx
import React from "react";
import image1 from "/src/assets/Rectangle 1.png";

const rentalAgreementData = [
  {
    title: "House rent agreement",
    description: "Details about house rent agreements.",
    image: "/src/assets/image (1).png",
  },
  {
    title: "Flat rent agreement",
    description: "Details about flat rent agreements.",
    image: "/src/assets/image (2).png",
  },
  {
    title: "Furnished house rent agreement",
    description: "Details about furnished house rent agreements.",
    image: "/src/assets/image (3).png",
  },
  {
    title: "Quick rental agreement",
    description: "Details about quick rental agreements.",
    image: "/src/assets/image (4).png",
  },
  {
    title: "Residential lease agreement",
    description: "Details about residential lease agreements.",
    image: "/src/assets/image (1).png",
  },
  {
    title: "Furnished flat rental agreement",
    description: "Details about furnished flat rental agreements.",
    image: "/src/assets/image (2).png",
  },
  {
    title: "Room rental agreement",
    description: "Details about room rental agreements.",
    image: "/src/assets/image (4).png",
  },
  {
    title: "Lease of furnished house for residential purpose",
    description:
      "Details about lease of furnished house for residential purposes.",
    image: "/src/assets/image (3).png",
  },
  {
    title: "Paying guest agreement",
    description: "Details about paying guest agreements.",
    image: "/src/assets/image (1).png",
  },
];

const RentalAgreements = () => {
  return (
    <div className="p-6">
      <div className="relative">
        <img src={image1} alt="Image Header" className="w-full h-auto" />
        <div className="absolute top-1/3 w-full text-center">
          <h2 className="text-4xl font-bold text-black">Rental Agreements</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-10/12 mx-auto mt-8">
        {rentalAgreementData.map((item, index) => (
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

export default RentalAgreements;
