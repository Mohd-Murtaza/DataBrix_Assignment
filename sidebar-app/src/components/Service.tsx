// import React from 'react';

const Service = () => {
  return (
    <div className="container mx-auto p-4 bg-red-100 rounded-lg shadow-md">
      <h1 className="text-3xl m-4 font-bold text-center text-red-800">
        Our Best Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-pink-100 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Digital Marketing
            </h2>
            <p className="mt-4 text-gray-600">
              DataBrix Soft deliver custom software solutions, data-driven
              marketing, and cloud-based services.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600">
              Read more →
            </button>
          </div>
        </div>
        <div className="bg-purple-100 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              ISO & Trademark
            </h2>
            <p className="mt-4 text-gray-600">
              DataBrix Soft specializes in leveraging cutting-edge web
              technology to generate high returns for organizations across
              sectors.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600">
              Read more →
            </button>
          </div>
        </div>
        <div className="bg-green-100 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Web Development
            </h2>
            <p className="mt-4 text-gray-600">
              DataBrix Soft is a premium web design, online marketing and IT
              Solution Company based in Navi Mumbai, serving high value clients.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600">
              Read more →
            </button>
          </div>
        </div>
        <div className="bg-yellow-100 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">IT Solutions</h2>
            <p className="mt-4 text-gray-600">
              Data Brix Soft have consistently excelled in delivering high
              quality customized web designs and services.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600">
              Read more →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
