import React from "react";
import { Fade, Rotate, Zoom } from "react-reveal";
import "./main.scss";

export default function Main() {
  return (
    <>
      <div className="contact">
        <div className="contact_content">
          <Fade top duration={1000}>
            <h3>Contacts</h3>
          </Fade>
          <Fade bottom duration={1000}>
            <ul>
              <li>
                <i className="bx bx-envelope"></i>
                <a href="mailto:coderusmonov@gmail.com">coderusmonov@gmail.com</a>
              </li>
              <li>
                <i className="bx bx-phone"></i>
                Phone: +998 (99) 399 36 67
              </li>
              <li>
                <i className="bx bx-home"></i>
                Address: Namangan, Uzbekistan
              </li>
              <Fade bottom duration={1000}>
                <ul className="social_networks">
                  <li>
                    <a href="https://www.linkedin.com/in/abdurahmondev">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>

                  {/* <li>
                <a href="#!">
                  <i className="bx bxl-facebook"></i>
                </a>
              </li> */}
                  <li>
                    <a href="#">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                  {/* <li>
                <a href="#!">
                  <i className="bx bxl-instagram"></i>
                </a>
              </li> */}
                  <li>
                    <a href="https://github.com/abdurahmonHard">
                      <i class="bx bxl-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                </ul>
              </Fade>
            </ul>
          </Fade>
        </div>
      </div>
    </>
  );
}
