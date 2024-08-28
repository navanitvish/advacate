// src/components/About.jsx
import React from "react";
import { agreementsData } from "/src/agreements.js";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="relative">
      <img
          src="https://cdn.pixabay.com/photo/2017/07/10/23/49/club-2492011_1280.jpg"
          alt="Image Header"
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-1/3 w-full text-center">
          <h1 className="text-4xl font-bold mb-6 text-center">
            About Our Agreements
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto mt-10">
        {Object.values(agreementsData).map((agreement, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg transform transition-transform duration-300 hover:-translate-y-4" >
            <img
              src={agreement.image}
              alt={agreement.title} // Use title for accessibility
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">{agreement.title}</h2>
            <p className="text-gray-700">{agreement.content}</p>
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

export default About;
