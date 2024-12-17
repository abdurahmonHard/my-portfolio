import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonals.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { testimonals } from "./dataTestimonal";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import modules
import { Fade } from "react-reveal";
import "swiper/css/autoplay";
function Testimonals() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const getWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", getWidth);

    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return (
    <div className="testimonals">
      <Fade bottom duration={2000}>
        <h2 className="testimonals-title">Testimonals</h2>
      </Fade>
      <Fade bottom duration={2000}>
        <p className="testimonals-text">
          Some feedbacks from people who I've worked with
        </p>
      </Fade>
      <Swiper
        spaceBetween={30}
        slidesPerView={width > 1024 ? 3 : width > 720 ? 2 : 1}
        // centeredSlides={true}
        effect={"coverflow"}
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={false}
      >
        {testimonals.map((data, ind) => {
          return (
            <SwiperSlide key={ind}>
              <Fade bottom duration={2000}>
                <div className="details">
                  <div className="company-logo">
                    <img src={data.logo} alt="companyLogo" />
                  </div>
                  <hr className="line" />
                  <i class="bx bxs-quote-alt-left quote"></i>
                  <blockquote className="feedback">
                    <span className="tab"></span>
                    {data.desc}
                  </blockquote>
                </div>
                <div className="author">
                  {/* <div className="profile-image">
                    <img src={data.img} alt="profile" />
                  </div> */}
                  <div className="profile-data">
                    <h5 className="name">{data.name}</h5>
                    <h6 className="role">{data.title}</h6>
                  </div>
                </div>
              </Fade>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonals;
