import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Wrapper from "../Wrapper/Wrapper";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const menuOptions = [
    { title: "Home", path: "/" },
    { title: "Prelims", path: "/prelims", icon: ArrowDropDownIcon },
    { title: "Quizes", path: "/quizes" },
    { title: "Main & Interview", path: "/interview", icon: ArrowDropDownIcon },
    { title: "Current Affairs", path: "/affairs", icon: ArrowDropDownIcon },
    { title: "Test Series", path: "/test" },
    { title: "State PCS", path: "/pcs", icon: ArrowDropDownIcon },
    { title: "Resources", path: "/resources", icon: ArrowDropDownIcon },
    { title: "Quick Link", path: "/qLink", icon: ArrowDropDownIcon },
    { title: "About", path: "/about" },
  ];

  return (
    <>
      <Wrapper>
        <nav>
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <ul>
            {menuOptions.map((item, index, icon) => (
              <li key={index}>
                <NavLink className="title" to={item.path}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="right_section">
            <div className="search">
              <SearchIcon />
            </div>
            <div className="profile_avatar">
              <AccountCircleIcon style={{ color: "var(--primaryColor)" }} />
              <p style={{ fontSize: "15px" }}>Akash</p>
              <ArrowDropDownIcon style={{ color: "var(--primaryColor)" }} />
            </div>
          </div>
        </nav>
      </Wrapper>
    </>
  );
};

export default Nav;
