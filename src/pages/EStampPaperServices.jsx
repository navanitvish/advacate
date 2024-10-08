import React from "react";

const EStampPaperServices = () => {
  return (
    <section className=" p-6 md:p-10 rounded-lg  flex flex-col mx-auto w-10/12 ">
      <div className=" relative ">
        <img
          src="https://cdn.pixabay.com/photo/2017/07/10/23/49/club-2492011_1280.jpg"
          alt="Image Header"
          className="w-full h-60 object-cover"
        />

        <div className=" absolute top-1/3 w-full mx-auto ">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white  mb-4">
            E-Stamp Paper Services
          </h2>
        </div>
      </div>

      <div className="flex flex-col mx-auto w-10/12 mt-6">
        <p className="text-gray-600 mb-6 text-md">
          Secure your legal transactions with our E-Stamp Paper services.
          Whether you need to authenticate a legal document or complete an
          agreement, our platform provides a convenient way to generate E-Stamp
          papers for various purposes.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Quick and Easy Process</li>
          <li>Legal Compliance</li>
          <li>Wide Range of Documents</li>
          <li>Secure Payment</li>
        </ul>
        <div className="space-y-4 ">
          <div>
            <h3 className="font-semibold text-gray-700">Step 1:</h3>
            <p className="text-gray-600">
              Choose the type of document (e.g., rental agreement, affidavit).
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Step 2:</h3>
            <p className="text-gray-600">Fill in the required details.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Step 3:</h3>
            <p className="text-gray-600">Make the payment securely online.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Step 4:</h3>
            <p className="text-gray-600">
              Receive your E-Stamp paper via email or download it directly.
            </p>
            <button className="mt-6 px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Generate E-Stamp Paper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EStampPaperServices;
