import React from "react";
import web from "../assets/web.svg"

const Home: React.FC = () => {
  return (
    <div className="mt-4 p-4 bg-blue-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-blue-800">
        Welcome to Our Application!
      </h1>
      <p className="mt-4 text-center text-blue-600">
        We are glad to have you here. Explore the application using the sidebar
        links.
      </p>
      <img className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/2 m-auto mt-12 mb-8" src={web} alt="" />
    </div>
  );
};

export default Home;
