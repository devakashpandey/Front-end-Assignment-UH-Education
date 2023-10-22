import React from "react";
import "./Box1.css";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import Checkboxnew from "../../../../components/Checkbox/Checkboxnew";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Box1 = () => {
  return (
    <>
      <div className="box1">
        <div className="header_1">
          <div>
            <FeedOutlinedIcon />
            <span>Daily MCQs</span> <span className="free">FREE</span>
          </div>

          <p style={{ color: "#646F79" }}>5 Questions</p>
        </div>
        <span className="border"></span>
        <div className="body_text">
          <p>
            Every year millions of new scientific research papers get published
            across the world. These papers shed light on almost every aspect of
            the universe; from the evolution of stars to the environmental
            changes and their effects. ?
          </p>
        </div>

        <div className="check_box">
          <div>
            <Checkboxnew /> <span>The principle of natural justice</span>
          </div>

          <div>
            <Checkboxnew />
            <span>The procedure established by law</span>
          </div>
          <div>
            <Checkboxnew />
            <span>Fair application of law</span>
          </div>
          <div>
            <Checkboxnew />
            <span>Equality before law</span>
          </div>
        </div>

        <div className="box_footer">
          <KeyboardArrowLeftIcon
            className="left_arrow"
            style={{ fontSize: "40px" }}
          />

          <button className="submit_btn">Submit Quiz</button>
          <KeyboardArrowRightIcon
            className="right_arrow"
            style={{ fontSize: "40px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Box1;
