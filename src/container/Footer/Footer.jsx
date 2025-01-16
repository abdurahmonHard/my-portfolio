import React from "react";
import "./footer.scss";
import logo from "../../assets/img/logo_white.png";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import GlobalContainer from "../../components/GlobalContainer/GlobalContainer";


export default function Footer() {
  return (
    <div className="footer" id="footer">
      <GlobalContainer>
        <div className="footer_content">
          <Link to="/" className="footer_logo">
            <Fade left duration={2000}>
              <img src={logo} alt="logo" />
            </Fade>
          </Link>

          <div className="footer_content-block">
            <Fade top duration={2000}>
              <h6>Contacts</h6>
            </Fade>
            <Zoom duration={2000} cascade>
              <ul className="footer-dates">
                <li>
                  <a href="mailto:coderusmonov@gmail.com">
                    Email: coderusmonov@gmail.com{" "}
                  </a>
                </li>
                <li>Phone: +998 (99) 399 36 67</li>
              </ul>
            </Zoom>
          </div>

          <div className="footer_content-block block_address">
            <Fade right duration={2000}>
              <h6>Address</h6>
            </Fade>
            <Zoom duration={2000}>
              <p>Namangan, Uzbekistan</p>
            </Zoom>
          </div>
        </div>

        <div className="footer_socials">
          <Fade top duration={2000} cascade>
            <ul className="footer_socials-list">
              <li>
                <a
                  href="https://www.linkedin.com/in/abdurahmondev"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>

              {/* <li>
                <a href="#!">
                  <i className="bx bxl-facebook"></i>
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>
              {/* <li>
                <a href="#!">
                  <i className="bx bxl-instagram"></i>
                </a>
              </li> */}
              <li>
                <a href="https://github.com/abdurahmonHard" target="_blank">
                  <i class="bx bxl-github"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
            </ul>
          </Fade>
        </div>
      </GlobalContainer>
    </div>
  );
}
