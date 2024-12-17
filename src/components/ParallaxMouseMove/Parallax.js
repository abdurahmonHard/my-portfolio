import React, { useRef, useEffect } from "react";
import "./style.css";

const ParallaxMousemove = ({ urlImage }) => {
  const containerRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const element = elementRef.current;

    const handleMouseMove = (event) => {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const offsetX = 0.5 - mouseX / containerWidth;
      const offsetY = 0.5 - mouseY / containerHeight;
      // console.log("height", offsetY);
      // console.log("width", offsetX);
      const translateX = offsetX * 10; // Translate o'lchamini o'zgartirib ko'rish uchun
      const translateY = offsetY * 10; // Translate o'lchamini o'zgartirib ko'rish uchun
      element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    };

    const outMouseMove = (event) => {
      element.style.transform = `translate(0, 0)`;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseout", outMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="parallax-container" ref={containerRef}>
      <div
        className="parallax-element"
        style={{ backgroundImage: `url(${urlImage})` }}
        ref={elementRef}
      ></div>
    </div>
  );
};

export default ParallaxMousemove;