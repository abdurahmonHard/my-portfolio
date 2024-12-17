import React from "react";
import { Fade } from "react-reveal";
import "./expertise.scss";

export default function Expertise() {
  return (
    <div className="expertise" id="expertise">
      <div className="introduce">
        <Fade bottom duration={2000}>
          <h2>Hi, I’m Abdurahmon</h2>
        </Fade>
        <Fade bottom delay={500} duration={1500}>
          <p>
            Junior Software Engineer with over 3 months of production experience
            building scalable and performant mern stack web applications to
            deliver exceptional user experience and interface in E-commerce and
            have little experience working in Agile (Scrum & Kanban).
          </p>
        </Fade>
      </div>
      <div className="skills">
        <Fade bottom duration={2000} delay={500}>
          <div className="skills-box">
            <div className="card card-1">
              <div className="blog">
                <div className="blog-top">
                  <span>
                    <i className="bx bx-desktop"></i>
                  </span>
                  <h2>Software Engineer</h2>
                  <p>
                    I value simple content structure, clean design patterns, and
                    thoughtful interactions.
                  </p>
                </div>
                <div className="blog-center">
                  <p className="blog-center-title">Tools:</p>
                  <p className="blog-center-text">
                    JavaScript,<br /> NodeJS,
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-2">
              <div className="blog">
                <div className="blog-top">
                  <span>
                    <i className="bx bx-code-alt"></i>
                  </span>
                  <h2>Frontend Developer</h2>
                  <p>
                    I like to code things from scratch, and enjoy bringing ideas
                    to life in the browser.
                  </p>
                </div>
                <div className="blog-center">
                  <p className="blog-center-title">Tools:</p>
                  <p className="blog-center-text">
                    HTML, CSS, <br /> JS,  React, Redux
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-3">
              <div className="blog">
                <div className="blog-top">
                  <span>
                    <i className="bx bxl-react"></i>
                  </span>
                  <h2>Mern Stack Developer</h2>
                  <p>
                    I bring a wealth of knowledge and expertise to designing and
                    building high-quality web applications
                  </p>
                </div>
                <div className="blog-center">
                  <p className="blog-center-title">Tools:</p>
                  <p className="blog-center-text">
                    React, NodeJS, <br /> Express.js, MongoDB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
