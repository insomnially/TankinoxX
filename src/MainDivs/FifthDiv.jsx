import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

import "./FifthDiv.css";

export default function FifthDiv() {
  const { t } = useTranslation();

  const rectangles = [
    { id: 1, text: t("engineering") },
    { id: 2, text: t("welding") },
    { id: 3, text: t("assembly") },
    { id: 4, text: t("thermal") },
    { id: 5, text: t("stamping") },
  ];

  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
  });

  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="carousel-container">
      <motion.h1
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {t("tankinoxProviding")} <span>{t("services")}</span>
      </motion.h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={100}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        className="carousel"
      >
        {rectangles.map((rect) => (
          <SwiperSlide key={rect.id}>
            <motion.div
              className="rectangle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {rect.text}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination"></div>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 20 }}
        animate={textInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="p-carousel"
      >
        <p className="pc1">
          {t("clientApproach")}
        </p>
        <p className="pc2">
          {t("costFunctionalityRatio")}
        </p>
      </motion.div>
    </div>
  );
}
