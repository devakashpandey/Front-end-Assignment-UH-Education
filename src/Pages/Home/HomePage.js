import React from "react";
import Nav from "../../components/Navbar/Nav";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";

const HomePage = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default HomePage;
