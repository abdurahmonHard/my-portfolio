import React from "react";
import "./header.scss";

import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <Fade top duration={2000}>
            <h1>
              Abdurahmon <br /> Usmonov
            </h1>
          </Fade>
          <Fade bottom duration={2000}>
            <h2>SOFTWARE ENGINEER, FRONT END & WEB DEVELOPER.</h2>
          </Fade>
        </div>

        <Fade top delay={1500}>
          <div className="next-page">
            <a href="#expertise">
              <i className="bx bxs-chevron-down bx-flashing"></i>
            </a>
          </div>
        </Fade>
      </div>
    </>
  );
}
