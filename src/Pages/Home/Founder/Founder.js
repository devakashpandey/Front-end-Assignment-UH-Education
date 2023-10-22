import React from "react";
import "./Founder.css";

const Founder = () => {
  return (
    <>
      <div className="founder_wrapper">
        <div className="founder_title">
          <h1>
            Learn From{" "}
            <span style={{ color: "var(--primaryColor)" }}>The Best</span>
          </h1>
          <p>Explore the concepts with India’s most experienced Teachers!</p>
        </div>

        <div className="founder_box_wrapper">
          <div className="founder_left"></div>
          <div className="founder_right"></div>
        </div>
      </div>
    </>
  );
};

export default Founder;
