import React from "react";
import "./HomePage.css";
import Nav from "../../components/Navbar/Nav";
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
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Explore from "./Explore/Explore";

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
            <Explore />
          </Wrapper>
        </section>

        {/* ------------- Our courses batches blog section starts here ---------------------*/}
        <section className="our_facilities">
          <Wrapper>
            <div className="facility_wrapper">
              <div className="online_courses falcility">
                <div className="left_sec">
                  <h1>Online courses</h1>
                  <button className="explore_now_btn">Explore Now</button>
                </div>
                <div className="right_sec"></div>
              </div>
              <div className="batches falcility">
                <div className="left_sec">
                  <h1>Batches</h1>
                  <button className="explore_now_btn">Explore Now</button>
                </div>
                <div className="right_sec"></div>
              </div>
              <div className="blog falcility">
                <div className="left_sec">
                  <h1>Blog</h1>
                  <button className="explore_now_btn">Explore Now</button>
                </div>
                <div className="right_sec"></div>
              </div>
              <div className="playlist falcility">
                <div className="left_sec">
                  <h1>Playlist</h1>
                  <button className="explore_now_btn">Explore Now</button>
                </div>
                <div className="right_sec"></div>
              </div>
              <div className="practice falcility">
                <div className="left_sec">
                  <h1>Practice</h1>
                  <button className="explore_now_btn">Explore Now</button>
                </div>
                <div className="right_sec"></div>
              </div>
              <div className="explore_more">
                Explore More <KeyboardArrowRightIcon />{" "}
              </div>
            </div>
          </Wrapper>
        </section>
      </div>
    </>
  );
};

export default HomePage;
