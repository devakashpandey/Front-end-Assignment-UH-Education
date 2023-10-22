import React from "react";
import "./Explore.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import state from "../../../assets/state.png";
import judiciary from "../../../assets/judiciary.png";
import GS from "../../../assets/GS.png";

const Explore = () => {
  return (
    <>
      <div className="explore_wrapper">
        <div className="upper_side">
          <div className="explore_left_side">
            <div className="state_live">
              <img src={state} alt="" />
              <div className="explore_description">
                <h1>State PSCs Live</h1>
                <p>State PSCs Live classes sessions by top faculty.</p>
                <p className="explore_course_btn">
                  Explore Courses{" "}
                  <NavigateNextIcon style={{ fontSize: "20px" }} />
                </p>
              </div>
            </div>
            <div className="judiciary_live">
              <img src={judiciary} alt="" />
              <div className="explore_description">
                <h1>State PSCs Live</h1>
                <p>State PSCs Live classes sessions by top faculty.</p>
                <p className="explore_course_btn">
                  Explore Courses{" "}
                  <NavigateNextIcon style={{ fontSize: "20px" }} />
                </p>
              </div>
            </div>
          </div>
          <div className="explore_right_side">
            <h1>
              Crack State <span>PSCs</span> and Judiciary Exams with{" "}
              <span>India’s</span> super teacher
            </h1>
            <p>
              Our courses provide complete coverage of the topics you need to be
              prepared for
            </p>
            <p className="learn_more_btn">
              Learn More <NavigateNextIcon />{" "}
            </p>
          </div>
        </div>
        <div className="lower_side">
          <div className="lower_left_side">
            <h1>
              Explore our GS and Current Affairs{" "}
              <span style={{ color: "#f06e75" }}>Courses</span>
            </h1>
            <p>Everything you need for exam at one place.</p>
          </div>
          <div className="lower_right_side">
            <div className="GS_1">
              <img src={GS} alt="" className="GS_img" />
              <div className="explore_description lower_descrip">
                <h1>GS by XYZ Sir</h1>
                <p>Prepare by learning GS with XYZ Sir</p>
                <p className="explore_course_btn">
                  Explore Courses{" "}
                  <NavigateNextIcon style={{ fontSize: "20px" }} />
                </p>
              </div>
            </div>
            <div className="GS_2">
              <img src={GS} alt="" className="GS_img" />
              <div className="explore_description lower_descrip">
                <h1>GS by XYZ Sir</h1>
                <p>Prepare by learning GS with XYZ Sir</p>
                <p className="explore_course_btn">
                  Explore Courses{" "}
                  <NavigateNextIcon style={{ fontSize: "20px" }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
