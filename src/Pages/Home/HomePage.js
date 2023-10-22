import React from "react";
import "./HomePage.css";
import Nav from "../../components/Navbar/Nav";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Wrapper from "../../components/Wrapper/Wrapper";
import heroBanner from "../../assets/banner.png";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import news from "../../assets/news.png";
import blog from "../../assets/blog.png";
import classroom from "../../assets/classroom.png";
import test from "../../assets/test.png";
import subject from "../../assets/subject.png";
import mcq from "../../assets/mcq.png";
import Box1 from "./Boxes/Box1";
import Box2 from "./Boxes/Box2";
import Box3 from "./Boxes/Box3";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import state from "../../assets/state.png";
import judiciary from "../../assets/judiciary.png";
import GS from "../../assets/GS.png";

const HomePage = () => {
  return (
    <>
      <div>
        {/* ------ Navbar starts here -----  */}
        <Nav />

        {/* ------ Navbar ends here -----  */}

        {/* ------ landing page starts here -----  */}
        <section className="heroSection">
          <Wrapper>
            <div className="homepage">
              <img src={heroBanner} alt="banner" />

              <div className="options">
                <div className="left_side">
                  <p>
                    <ArrowCircleRightIcon /> VISIT ENGLISH WEBSITE
                  </p>
                  <p>
                    <ArrowCircleRightIcon />
                    हिंदी वेबसाइट पर जाएँ
                  </p>
                </div>
                <div className="right_side">
                  <ArrowCircleLeftIcon
                    style={{ color: "var(--primaryColor)" }}
                  />
                  <div className="news">
                    <img src={news} alt="" />
                    <span>News & Editorials</span>
                  </div>
                  <div className="blog">
                    <img src={blog} alt="" />
                    <span>Blog</span>
                  </div>
                  <div className="classroom">
                    <img src={classroom} alt="" />
                    <span>Classroom Prog.</span>
                  </div>
                  <div className="test">
                    <img src={test} alt="" />
                    <span>Mains Test Series</span>
                  </div>
                  <div className="subjects">
                    <img src={subject} alt="" />
                    <span>Optional Subjects</span>
                  </div>
                  <div className="mcq">
                    <img src={mcq} alt="" />
                    <span>Daily MCQs</span>
                  </div>
                  <ArrowCircleRightIcon
                    style={{ color: "var(--primaryColor)" }}
                  />
                </div>
              </div>
            </div>
          </Wrapper>
        </section>
        {/* ----------------Boxes section------------- */}
        <section className="box_section">
          <Wrapper>
            <div className="boxes">
              <Box1 />
              <Box2 />
              <Box3 />
            </div>
          </Wrapper>
        </section>

        {/* ----------------Boxes section ends here------------- */}

        <section className="expore">
          <Wrapper>
            <div className="explore_wrapper">
              <div className="upper_side">
                <div className="explore_left_side">
                  <div className="state_live">
                    <img src={state} alt="" />
                    <div className="state_description">
                      <h1>State PSCs Live</h1>
                      <p>State PSCs Live classes sessions by top faculty.</p>
                      <p className="explore_course_btn">Explore Courses</p>
                    </div>
                  </div>
                  <div className="judiciary_live">
                    <img src={judiciary} alt="" />
                    <div className="judiciary_description">
                      <h1>State PSCs Live</h1>
                      <p>State PSCs Live classes sessions by top faculty.</p>
                      <p className="explore_course_btn">Explore Courses</p>
                    </div>
                  </div>
                </div>
                <div className="explore_right_side">
                  <h1>
                    Crack State <span>PSCs</span> and Judiciary Exams with{" "}
                    <span>India’s</span> super teacher
                  </h1>
                  <p>
                    Our courses provide complete coverage of the topics you need
                    to be prepared for
                  </p>
                  <p className="learn_more_btn">
                    Learn More <NavigateNextIcon />{" "}
                  </p>
                </div>
              </div>
              <div className="lower_side">
                <div className="lower_left_side">
                  <h1>Explore our GS and Current Affairs courses</h1>
                  <p>Everything you need for exam at one place.</p>
                </div>
                <div className="lower_right_side">
                  <div className="GS_1">
                    <img src={GS} alt="" />
                  </div>
                  <div className="GS_2">
                    <img src={GS} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </section>

        {/* ------ landing page ends here -----  */}
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default HomePage;
