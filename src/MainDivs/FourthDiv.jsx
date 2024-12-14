import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FourthDiv.css";

import image1 from "../images/imagee8.jpg";
import image3 from "../images/imagee10.jpg";
import image4 from "../images/imagee11.jpg";
import image5 from "../images/imagee2.jpg";
import image6 from "../images/imagee1.jpg";
import image7 from "../images/imagee3.jpg";
import image8 from "../images/imagee6.jpg";
import image9 from "../images/imagee5.jpg";
import image10 from "../images/imagee4.jpg";
import image11 from "../images/imagee7.jpg";
import image12 from "../images/imagee12.jpg";

const images = [
  image1, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12,
];

export default function FourthDiv() {
  const { t } = useTranslation();
  const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true });
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <>
      <motion.h2
        className="slider-title"
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {t("galleryTitle")}
      </motion.h2>

      <motion.div
        className="slider-container"
        ref={containerRef}
        initial={{ opacity: 0, x: 50 }}
        animate={containerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="slide">
              <div
                className="slide-image"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </>
  );
}
