import React from "react";
import image1 from "/src/assets/Rectangle 1.png";
const RentalReceipts = () => {
  return (
    <section className=" p-6 md:p-10 rounded-lg  flex flex-col w-10/12 mx-auto">
      <div className=" relative ">
        <img src={image1} alt="Image Header" />

        <div className=" absolute top-1/3 w-full mx-auto ">
          <h2 className="text-4xl text-center font-bold">Shop</h2>
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Rental Receipts
      </h2>
      <p className="text-gray-600 mb-6">
        Easily generate rental receipts for your tenants. Our user-friendly
        service allows you to create, manage, and send rental receipts
        instantly, ensuring a smooth and hassle-free process.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Customizable Receipts</li>
        <li>Automated Calculations</li>
        <li>Digital and Printable</li>
        <li>Email Integration</li>
      </ul>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-700">Step 1:</h3>
          <p className="text-gray-600">
            Enter tenant details (name, address, rent period).
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">Step 2:</h3>
          <p className="text-gray-600">
            Input the rent amount and any additional charges.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">Step 3:</h3>
          <p className="text-gray-600">Review and generate the receipt.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">Step 4:</h3>
          <p className="text-gray-600">Download or email the receipt.</p>
        </div>
      </div>
    </section>
  );
};

export default RentalReceipts;
