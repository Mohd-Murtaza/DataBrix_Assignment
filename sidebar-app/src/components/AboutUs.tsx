// import React from 'react';
import aboutUs from "../assets/aboutus.svg"

const AboutUs = () => {
  return (
    <div className="p-3 bg-green-200 rounded-lg shadow-md">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Reach.</h2>
          <p className="text-lg text-black font-medium">
            At Databrix, our mission is to empower businesses with
            transformative technology solutions that drive growth, efficiency, and success.
            We strive to be at the forefront of innovation, constantly pushing the boundaries
            to deliver unparalleled value to our clients.
          </p>
        </div>
        <div className="max-w-md m-auto"><img className="max-w-md" src={aboutUs} alt="" /></div>
      </div>
    </div>
  );
};

export default AboutUs;
