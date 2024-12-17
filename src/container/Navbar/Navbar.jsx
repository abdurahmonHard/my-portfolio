import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/img/logo_white.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import Spin from "react-reveal/Spin";
import cx from "classname";
import GlobalContainer from "../../components/GlobalContainer/GlobalContainer";

function Navbar() {
  const [navMenu, setNavMenu] = useState(true);


  const navMenuClass = cx({
    "bx bx-menu hamburger-menu": true,
    "bx-x": !navMenu,
  });

  const navList = cx({
    "display-none": navMenu,
  });

  return (
    <div className="fixed">
      <GlobalContainer>
        <div className="navbar">
          <Link to="/" className="logo-container">
            <Spin duration={1000}>
              {" "}
              <img src={logo} alt="logo" className="logo" />{" "}
            </Spin>
          </Link>
          <Fade top cascade duration={1000}>
            <ul className={"navbar__list " + navList}>
              <li className="navbar__list-link">
                <Link to="/">// Home</Link>
              </li>
              <li className="navbar__list-link">
                <Link to="/contact">// Contact</Link>
              </li>
            </ul>
          </Fade>
          <div className="resume">
            <Fade top duration={2000}>
              <a
                href={require("../../assets/Abdurahmon resume.pdf")}
                download="Abdurahmon resume"
              >
                Resume
              </a>
            </Fade>
          </div>
          <Fade right duration={1000}>
            <span className="hamburger-menu">
              <i
                className={navMenuClass}
                onClick={() =>
                  navMenu ? setNavMenu(!navMenu) : setNavMenu(!navMenu)
                }
              ></i>
            </span>
          </Fade>
        </div>
      </GlobalContainer>
    </div>
  );
}

export default Navbar;
