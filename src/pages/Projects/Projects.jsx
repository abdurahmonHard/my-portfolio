import React, { useState } from "react";
import "./projects.scss";
import "swiper/css";

import { projectsData } from "./projectsData";
import { Fade } from "react-reveal";
import ParallaxMousemove from "../../components/ParallaxMouseMove/Parallax";

export default function Projects() {
  return (
    <div className="projects projects-container">
      <Fade bottom duration={2000}>
        <h1 className="project-header">Projects</h1>
        <p className="project-subheader">
          Below are a few of the projects I have created.
          These projects have been crucial in my personal and professional development.
        </p>
      </Fade>

      <div className={`projects-box`}>
        {projectsData?.map((data, ind) => {
          return (
            <>
              <span className="line-break"></span>
              <div
                className={
                  ind % 2 == 0 ? "project-blog flex-reverse" : "project-blog"
                }
              >
                <div className="project-image">
                  <Fade
                    right={ind % 2 == 0 ? true : false}
                    left={ind % 2 == 0 ? false : true}
                    duration={2000}
                  >
                    <a href="#" target="_blank">
                      <ParallaxMousemove urlImage={data.mockup} />
                    </a>
                  </Fade>
                </div>
                <div className="project-context">
                  <Fade
                    right={ind % 2 == 0 ? false : true}
                    left={ind % 2 == 0 ? true : false}
                    duration={2000}
                  >
                    <div className="project-description">
                      <div className="context-header">
                        <Fade top duration={3000}>
                          {/* <h3>{data?.title}</h3> */}
                          <div className="box-logo">
                            <img src={data.logo} alt="logo" />
                          </div>
                        </Fade>
                      </div>
                      <p>
                        <div className="category">
                          <Fade bottom duration={3000}>
                            <i className={data.icon}></i>
                            <p className="project-category">{data.category}</p>
                          </Fade>
                        </div>
                        {data?.desc}
                      </p>
                    </div>
                  </Fade>
                  {/* <Fade bottom duration={2000}>
                    <ul>
                      {data?.tools?.map((item, ind) => {
                        return <li key={ind}>{item}</li>;
                      })}
                    </ul>
                  </Fade> */}
                  <Fade bottom duration={5000}>
                    <div className="project-link">
                      <a href={data.url} target="_blank">
                        Open Now
                        <i class="bx bx-right-arrow-alt"></i>
                      </a>
                    </div>
                  </Fade>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
