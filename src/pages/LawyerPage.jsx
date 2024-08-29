import React, { useState } from 'react';

const LawyerCard = ({ name, title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 ">
      <img src={imageSrc} alt={name} className="w-full h-72  object-cover mb-4" />
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
};

const LawyerPage = () => {
  const [lawyers] = useState([
    {
      name: 'Samantha Akhter',
      title: 'Divorce Lawyer',
      imageSrc: 'https://cdn.pixabay.com/photo/2024/06/24/14/26/ai-generated-8850331_640.png',
    },
    {
      name: 'Joseph Morales',
      title: 'Real Estate Lawyer',
      imageSrc: 'https://cdn.pixabay.com/photo/2024/06/24/14/26/ai-generated-8850331_640.png',
    },
    {
      name: 'Kristine Curtis',
      title: 'Business Lawyer',
      imageSrc: 'https://cdn.pixabay.com/photo/2024/06/24/14/26/ai-generated-8850331_640.png',
    }
    
    // You can add more lawyers here if needed
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Expert Lawyers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 w-10/12 mx-auto">
        {lawyers.map((lawyer, index) => (
          <LawyerCard
            key={index}
            name={lawyer.name}
            title={lawyer.title}
            imageSrc={lawyer.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default LawyerPage;
