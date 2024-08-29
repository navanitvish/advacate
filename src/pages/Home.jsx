// src/pages/HomePage.jsx
import React from "react";
import Testimonials from './Testimonials'
import TrustedBySection from "./TrustedBySection";
import LawyerPage from "./LawyerPage";
const featuresData = [
  {
    title: "Affidavits",
    description:
      "An Affidavit is a written statement made under oath, used as evidence in court..",
    image:
      "https://cdn.pixabay.com/photo/2019/02/14/23/01/old-postcards-3997599_640.jpg",
  },
  {
    title: "Notices",
    description:
      "Notices are formal communications that convey important information, decisions, or demands...",
    image:
      "https://cdn.pixabay.com/photo/2018/09/11/19/24/deutsche-bahn-3670413_640.jpg",
  },
  {
    title: "Business Agreements",
    description:
      "Business Agreements are contracts between two or more parties that outline the terms and conditions of a business relationship...",
    image:
      "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg",
  },
  // Add more features as needed
];

const Home = () => {
  return (
    <div>
      {/* Main Content Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Side Content */}
        <div className="relative overflow-hidden flex mx-auto w-screen">
          <img
            src="https://cdn.pixabay.com/photo/2024/04/06/18/01/ai-generated-8679755_960_720.jpg"
            alt="Decorative Background"
            className="w-full h-[700px]  object-cover"
          />
          <div className="absolute top-1/3 right-16   bg-[#FFF3E3] bg-opacity-80 p-6 rounded-lg shadow-lg lg:w-[400px] lg:h-[300px]">
            <div className=" text-left text-balance ">
              <p className="text-yellow-500 font-semibold mb-2">New Arrival</p>
              <h2 className="text-6xl font-bold mb-4">
                Discover Our New Collection
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                Lern More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <TrustedBySection />

      {/* Features Section */}
      <section className="p-6 space-y-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-10/12 mx-auto">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4  transform transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-50 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="font-bold text-[#B88E2F] border-2 border-[#B88E2F] px-10 py-2 rounded">
            Show More
          </button>
        </div>
      </section>

      {/* Products/Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Our Products/Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto">
          <div className="bg-gray-200 p-6 text-center transform transition-transform duration-300 hover:-translate-y-2">
            <img
              src="https://cdn.pixabay.com/photo/2019/12/18/13/07/right-4703934_640.jpg"
              alt="Product 1"
              className="w-full h-50 object-cover mb-4 rounded"
            />
            <h3 className="text-4xl font-semibold mb-2 text-left">
              Online Consultation with a Lawyer
            </h3>
            <p className="text-gray-700 text-left">
              Now consult a lawyer or get your legal documents reviewed anytime
              from the convenience of your home. With secure calls and verified
              Lawyers
            </p>
          </div>
          <div className="bg-gray-200 p-6 text-center transform transition-transform duration-300 hover:-translate-y-2">
            <img
              src="https://cdn.pixabay.com/photo/2019/09/30/16/00/house-4516175_640.jpg"
              alt="Product 2"
              className="w-full h-50 object-cover mb-4 rounded"
            />
            <h3 className="text-4xl font-semibold mb-2 text-left">
              Documentation by Expert Professionals
            </h3>
            <p className="text-gray-700 text-left">
              Corporate, HR, professional or personal, Get any legal document
              drafted and customised to your business or personal needs in the
              most affordable way.
            </p>
          </div>
          <div className="bg-gray-200 p-6 text-center transform transition-transform duration-300 hover:-translate-y-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/20/15/46/binding-contract-948442_1280.jpg"
              alt="Product 3"
              className="w-full h-50 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-semibold mb-2 text-left">
              Post Contractual Contracts/Matters
            </h3>
            <p className="text-gray-700 text-left">
              Post Contractual Agreements deal with obligations and rights that
              arise after the termination of a contract....
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="font-bold text-[#B88E2F] border-2 border-[#B88E2F] px-10 py-2 rounded">
            Show More
          </button>
        </div>
      </section>

     <div>
      <LawyerPage/>
     </div>
       <div>
        <Testimonials/>
       </div>
    </div>
  );
};

export default Home;
