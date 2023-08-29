import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import { Carousel } from "react-responsive-carousel";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="img1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="img2" />
          <p className="legend">Mern Stack</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
