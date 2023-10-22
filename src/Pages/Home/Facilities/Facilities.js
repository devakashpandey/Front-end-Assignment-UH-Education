import React from "react";
import "./Facilities.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import courses from "../../../assets/courses.png";
import practice from "../../../assets/practice.png";
import blog from "../../../assets/blog.png";
import playlist from "../../../assets/playlist.png";
import batches from "../../../assets/batches.png";

const Facilities = () => {
  return (
    <>
      <div className="facility_wrapper">
        <div className="online_courses falcility">
          <div className="left_sec">
            <h1>Online courses</h1>
            <button className="explore_now_btn">Explore Now</button>
          </div>
          <div className="right_sec">
            <img src={courses} alt="" />
          </div>
        </div>
        <div className="batches falcility">
          <div className="left_sec">
            <h1>Batches</h1>
            <button className="explore_now_btn">Explore Now</button>
          </div>
          <div className="right_sec">
            <img src={batches} alt="" />
          </div>
        </div>
        <div className="blog falcility">
          <div className="left_sec">
            <h1>Blog</h1>
            <button className="explore_now_btn">Explore Now</button>
          </div>
          <div className="right_sec">
            <img src={blog} alt="" />
          </div>
        </div>
        <div className="playlist falcility">
          <div className="left_sec">
            <h1>Playlist</h1>
            <button className="explore_now_btn">Explore Now</button>
          </div>
          <div className="right_sec">
            <img src={playlist} alt="" />
          </div>
        </div>
        <div className="practice falcility">
          <div className="left_sec">
            <h1>Practice</h1>
            <button className="explore_now_btn">Explore Now</button>
          </div>
          <div className="right_sec">
            <img src={practice} alt="" />
          </div>
        </div>
        <div className="explore_more">
          Explore More{" "}
          <KeyboardArrowRightIcon
            className="right_arrow"
            style={{ fontSize: "35px" }}
          />{" "}
        </div>
      </div>
    </>
  );
};

export default Facilities;
