import React, { useState } from "react";
import "./Nav.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const [menuOpen, setOpenMenu] = useState(false);

  const menuOptions = [
    { title: "Home", path: "/" },
    { title: "Prelims", path: "/prelims" },
    { title: "Quizes", path: "/quizes" },
    { title: "Main & Interview", path: "/interview" },
    { title: "Current Affairs", path: "/affairs" },
    { title: "Test Series", path: "/test" },
    { title: "State PCS", path: "/pcs" },
    { title: "Resources", path: "/resources" },
    { title: "Quick Link", path: "/qLink" },
    { title: "About", path: "/about" },
  ];

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>

        <div className="hamburger" onClick={() => setOpenMenu(!menuOpen)}>
          <MenuIcon style={{ fontSize: "30px" }} />
        </div>
        <ul className={menuOpen ? "open" : ""}>
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
    </>
  );
};

export default Nav;
