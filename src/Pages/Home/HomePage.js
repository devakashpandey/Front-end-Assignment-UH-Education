import React from "react";
import "./HomePage.css";
import Wrapper from "../../components/wrapper/Wrapper";
import heroBanner from "../../assets/banner.png";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import news from "../../assets/news.png";
import blog from "../../assets/blog.png";
import classroom from "../../assets/classroom.png";
import test from "../../assets/test.png";
import subject from "../../assets/subject.png";
import mcq from "../../assets/mcq.png";
import Box1 from "./boxes/box1/Box1";
import Box2 from "./boxes/box2/Box2";
import Box3 from "./boxes/box3/Box3";
import Explore from "./explore/Explore";
import Facilities from "./facilities/Facilities";
import Founder from "./founder/Founder";

const HomePage = () => {
  return (
    <>
      <div>
        {/* ------ Hero section starts here -----  */}
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
        {/* -------------Boxes section starts here----------- */}
        <section className="box_section">
          <Wrapper>
            <div className="boxes">
              <Box1 />
              <Box2 />
              <Box3 />
            </div>
          </Wrapper>
        </section>

        {/* ----------Explore section starts here----------- */}

        <section className="expore">
          <Wrapper>
            <Explore />
          </Wrapper>
        </section>

        {/* ---------- Our facilities section starts here ------------*/}
        <section className="our_facilities">
          <Wrapper>
            <Facilities />
          </Wrapper>
        </section>

        {/* ---------- Our founder section starts here ------------*/}

        <section className="founder_details">
          <Wrapper>
            <Founder />
          </Wrapper>
        </section>
      </div>
    </>
  );
};

export default HomePage;
