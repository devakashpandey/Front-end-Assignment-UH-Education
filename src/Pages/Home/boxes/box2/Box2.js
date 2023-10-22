import React from "react";
import "./Box2.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const Box2 = () => {
  return (
    <>
      <div className="box2">
        <div className="header_2">
          <NewspaperIcon />
          <p>Current Affairs & Editorials</p>
        </div>
        <span className="border"></span>
        <div className="content_wrapper">
          <div className="content_heading">
            <p>
              <span style={{ fontSize: "25px" }}>🔥</span> &nbsp;Rapid Fire
              Current Affair
            </p>
          </div>
          <div className="main_contents">
            <div className="main_content_box">
              <div className="main_content_box_header">
                <p className="content_title">
                  <ErrorOutlineIcon /> IMPORTANT FOR PRELIMS
                </p>
                <p>
                  <CalendarMonthIcon
                    style={{ fontSize: "20px", color: "#646F79" }}
                  />{" "}
                  <span className="date">25-09-2023</span>
                </p>
              </div>
              <p>New Fish Species Discovered</p>
            </div>
            <div className="main_content_box">
              <div className="main_content_box_header">
                <p className="content_title">
                  <ErrorOutlineIcon /> IMPORTANT FOR PRELIMS
                </p>
                <p>
                  <CalendarMonthIcon
                    style={{ fontSize: "20px", color: "#646F79" }}
                  />{" "}
                  <span className="date">25-09-2023</span>
                </p>
              </div>
              <p>New Fish Species Discovered</p>
            </div>
            <div className="main_content_box">
              <div className="main_content_box_header">
                <p className="content_title">
                  <ErrorOutlineIcon /> IMPORTANT FOR PRELIMS
                </p>
                <p>
                  <CalendarMonthIcon
                    style={{ fontSize: "20px", color: "#646F79" }}
                  />{" "}
                  <span className="date">25-09-2023</span>
                </p>
              </div>
              <p>New Fish Species Discovered</p>
            </div>
            <div className="main_content_box">
              <div className="main_content_box_header">
                <p className="content_title">
                  <ErrorOutlineIcon /> IMPORTANT FOR PRELIMS
                </p>
                <p>
                  <CalendarMonthIcon
                    style={{ fontSize: "20px", color: "#646F79" }}
                  />{" "}
                  <span className="date">25-09-2023</span>
                </p>
              </div>
              <p>New Fish Species Discovered</p>
            </div>
            <div className="main_content_box">
              <div className="main_content_box_header">
                <p className="content_title">
                  <ErrorOutlineIcon /> IMPORTANT FOR PRELIMS
                </p>
                <p>
                  <CalendarMonthIcon
                    style={{ fontSize: "20px", color: "#646F79" }}
                  />{" "}
                  <span className="date">25-09-2023</span>
                </p>
              </div>
              <p>New Fish Species Discovered</p>
            </div>
            <div className="main_content_box">
              <div className="main_content_box_header">
                <p className="content_title">
                  <ErrorOutlineIcon /> IMPORTANT FOR PRELIMS
                </p>
                <p>
                  <CalendarMonthIcon
                    style={{ fontSize: "20px", color: "#646F79" }}
                  />{" "}
                  <span className="date">25-09-2023</span>
                </p>
              </div>
              <p>New Fish Species Discovered</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box2;
