import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
