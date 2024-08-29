import React, { useState } from "react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      rating: 5,
      profile: {
        name: "Rayan Kook",
        location: "NYC, USA",
        image: "https://cdn.pixabay.com/photo/2024/02/19/08/50/woman-8582883_640.jpg",
      },
      text: "Clients at Boston Lawyer receive exceptional service and results. Their dedication and expertise helped me navigate a complex legal matter with ease. Their unwavering commitment to excellence truly sets them apart.",
    },
    {
      rating: 5,
      profile: {
        name: "Michel Clark",
        location: "DYM, USA",
        image: "https://cdn.pixabay.com/photo/2024/02/19/08/50/woman-8582883_640.jpg",
      },
      text: "Working with Boston Lawyer was a game-changer for me. Their team's dedication and attention to detail surpassed my expectations. I couldn't be happier with the results they achieved for me.",
    },
    {
      rating: 5,
      profile: {
        name: "Michel Clark",
        location: "DYM, USA",
        image: "https://cdn.pixabay.com/photo/2024/02/19/08/50/woman-8582883_640.jpg",
      },
      text: "Working with Boston Lawyer was a game-changer for me. Their team's dedication and attention to detail surpassed my expectations. I couldn't be happier with the results they achieved for me.",
    },
    // Add more testimonials objects to the array if needed
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="container mx-auto px-4 flex flex-wrap flex-col  m-8 h-86">
      <div className="header mb-8 flex flex-col  w-full items-center justify-center m-8 space-y-6 ">
        <h1 className="text-4xl font-bold text-left text-balance ">
          What Clients Say About Us
        </h1>
        <p className="text-gray-600 text-center">
          Hear What Others Have to Say About Our Exceptional Service and
          Results.
        </p>
      </div>

      <div className="testimonials grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto">
  {testimonials.map((testimonial, index) => (
    <div
      key={index}
      className={`testimonial rounded-lg shadow-md p-6 space-y-2 ${
        index % 3 === 0 ? 'bg-green-50' : index % 3 === 1 ? 'bg-red-50' : 'bg-blue-50'
      }`}
    >
      <div className="profile flex items-center mb-4">
        <div className="rounded-full border border-gray-300 w-20 h-20 mr-4 flex items-center justify-center">
          <img
            src={testimonial.profile.image}
            alt="Profile"
            className="rounded-full w-16 h-16"
          />
        </div>
        <div>
          <span className="text-yellow-500 text-lg">
            {`★`.repeat(testimonial.rating)}
          </span>
          <h3 className="text-xl font-bold">{testimonial.profile.name}</h3>
          <p className="text-gray-600">{testimonial.profile.location}</p>
        </div>
      </div>
      <div className="border-b w-full mb-4"></div>
      <p className="text-gray-700">{testimonial.text}</p>
    </div>
  ))}
</div>

      <div className="flex justify-center mt-6">
        <button
          className="arrow-button mr-2 bg-slate-400 border border-black rounded-full px-4 py-3 w-15 h-15"
          onClick={handlePrevClick}
        >
          ←
        </button>
        <button
          className="arrow-button bg-slate-400 border border-black rounded-full px-4 py-3 w-15 h-15"
          onClick={handleNextClick}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
