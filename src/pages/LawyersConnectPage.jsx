// src/pages/LawyersConnectPage.jsx
import React from "react";
import image1 from "/src/assets/Rectangle 1.png";
// Sample data for lawyers (replace with real data or API)
const lawyersData = [
  {
    name: "Tiwari ji",
    specialization: "Criminal Law",
    phone: "+1234567890",
    email: "tiwari.ji@example.com",
    image: "/src/assets/image (6).png",
  },
  {
    name: "Kapil sibhal",
    specialization: "Corporate Law",
    phone: "+0987654321",
    email: "kapil.sibal@example.com",
    image: "/src/assets/image (6).png",
  },
  {
    name: "Ramji ",
    specialization: "Labar Law",
    phone: "+0987654321",
    email: "ramji.aydhya@example.com",
    image: "/src/assets/image (6).png",
  },
  {
    name: "Tiwari ji",
    specialization: "Criminal Law",
    phone: "+1234567890",
    email: "tiwari.ji@example.com",
    image: "/src/assets/image (6).png",
  },
  {
    name: "Kapil sibhal",
    specialization: "Corporate Law",
    phone: "+0987654321",
    email: "kapil.sibal@example.com",
    image: "/src/assets/image (6).png",
  },
  {
    name: "Ramji ",
    specialization: "Labar Law",
    phone: "+0987654321",
    email: "ramji.aydhya@example.com",
    image: "/src/assets/image (6).png",
  },
  // Add more lawyers as needed
];

const LawyersConnectPage = () => {
  return (
    <div className="p-6">
        <div className="relative">
        <img src={image1} alt="Image Header" className="w-full h-auto" />
        <div className="absolute top-1/3 w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-center">Lawyer's Connect</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto mt-10">
        {lawyersData.map((lawyer, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg ">
            <img
              src={lawyer.image}
              alt={lawyer.name}
              className="w-full h-40 object-cover rounded-full mb-4"
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
