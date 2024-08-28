// src/pages/LawyersConnectPage.jsx
import React from "react";

// Sample data for lawyers (replace with real data or API)
const lawyersData = [
  {
    name: "Tiwari ji",
    specialization: "Criminal Law",
    phone: "+1234567890",
    email: "tiwari.ji@example.com",
    image: "https://cdn.pixabay.com/photo/2024/02/19/08/50/woman-8582883_640.jpg",
  },
  {
    name: "Kapil sibhal",
    specialization: "Corporate Law",
    phone: "+0987654321",
    email: "kapil.sibal@example.com",
    image: "https://cdn.pixabay.com/photo/2015/08/03/00/04/alejandro-vergara-blanco-872557_640.jpg",
  },
  {
    name: "Ramji ",
    specialization: "Labar Law",
    phone: "+0987654321",
    email: "ramji.aydhya@example.com",
    image: "https://cdn.pixabay.com/photo/2024/06/24/14/26/ai-generated-8850331_640.png",
  },
  {
    name: "Tiwari ji",
    specialization: "Criminal Law",
    phone: "+1234567890",
    email: "tiwari.ji@example.com",
    image: "https://cdn.pixabay.com/photo/2024/02/19/08/50/woman-8582883_640.jpg",
  },
  {
    name: "Kapil sibhal",
    specialization: "Corporate Law",
    phone: "+0987654321",
    email: "kapil.sibal@example.com",
    image: "https://cdn.pixabay.com/photo/2024/06/24/14/26/ai-generated-8850331_640.png",
  },
  {
    name: "Ramji ",
    specialization: "Labar Law",
    phone: "+0987654321",
    email: "ramji.aydhya@example.com",
    image: "https://cdn.pixabay.com/photo/2024/06/24/14/26/ai-generated-8850331_640.png",
  },
  // Add more lawyers as needed
];

const LawyersConnectPage = () => {
  return (
    <div className="p-6">
        <div className="relative">
        <img
          src="https://cdn.pixabay.com/photo/2017/07/10/23/49/club-2492011_1280.jpg"
          alt="Image Header"
          className="w-full h-60 object-cover "
        />
        <div className="absolute top-1/3 w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-center">Lawyer's Connect</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto mt-10">
        {lawyersData.map((lawyer, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg  transform transition-transform duration-300 hover:-translate-y-4">
            <img
              src={lawyer.image}
              alt={lawyer.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{lawyer.name}</h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Specialization:</strong> {lawyer.specialization}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Phone:</strong> {lawyer.phone}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${lawyer.email}`}
                className="text-blue-500 hover:underline"
              >
                {lawyer.email}
              </a>
            </p>
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

export default LawyersConnectPage;
