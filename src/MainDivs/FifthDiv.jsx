import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from 'react-icons/fa6';
import "swiper/swiper-bundle.css"

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

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="carousel-container" ref={ref}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {t("tankinoxProviding")} <span>{t("services")}</span>
      </motion.h1>
      
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
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
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
      >
        {rectangles.map((rect) => (
          <SwiperSlide key={rect.id}>
            <motion.div
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="rectangle"
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {rect.text}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination"></div>
      
      <motion.div
        className="buttonfifth"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <Link to="/TankinoxX/services">
          {t("moreservices")} <FaArrowRightLong />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="p-carousel"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          {t('tankinox.main')}
          <span>{t('tankinox.span')}</span>
        </motion.h1>

        <div className="pccont">
          <motion.p
            className="pc1"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {t("clientApproach")}
          </motion.p>
          
          <motion.p
            className="pc2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {t("costFunctionalityRatio")}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
