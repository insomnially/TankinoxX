import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'react-i18next';
import "./CareersDiv.css";
import careergrowth from "../images/careergrowth.png";
import quality from "../images/quality.png";
import compensation from "../images/compensation.png";
import innovation from "../images/innovation.png";

export default function CareersDiv() {
  const { t } = useTranslation();
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: itemsRef, inView: itemsInView } = useInView({ triggerOnce: true });
  const { ref: endRef, inView: endInView } = useInView({ triggerOnce: true });

  return (
    <>
      <motion.div
        className="careers-image"
        ref={imageRef}
        initial={{ opacity: 0 }}
        animate={imageInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="careers-imagep"
        onClick={handleScroll}
        initial={{ opacity: 0, y: 20 }}
        animate={imageInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
       {t('careers1.vacancies')}<br/>
       <p>{t('careers1.internships')}</p>
      </motion.div>

      <motion.div
        className="careers-title"
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p>{t('careers1.joinTeam')}</p>
      </motion.div>

      <div className="careers-container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ borderBottom: '5px solid red' }}
        >
          {t('careers1.whyWorkAtTankinox')}
        </motion.h1>
        <div className="careers-container-item" ref={itemsRef}>
          {[
            {
              img: careergrowth,
              title: t('careers1.careerGrowth'),
              text: t('careers1.careerGrowthText'),
            },
            {
              img: compensation,
              title: t('careers1.competitiveCompensation'),
              text: t('careers1.competitiveCompensationText'),
              align: "right",
            },
            {
              img: innovation,
              title: t('careers1.innovation'),
              text: t('careers1.innovationText'),
            },
            {
              img: quality,
              title: t('careers1.quality'),
              text: t('careers1.qualityText'),
              align: "right",
            },
          ].map((item, index) => (
            <motion.div
              className="careers-item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={itemsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
            >
              <img
                src={item.img}
                alt="career"
                className="careers-icon"
                style={item.align === "right" ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" }}
              />
              <h2 style={item.align === "right" ? { textAlign: "right" } : {}}>{item.title}</h2>
              <p
                style={
                  item.align === "right"
                    ? { width: "100%", textAlign: "right", paddingLeft: "40%" }
                    : { width: "100%" }
                }
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.h1
        className="careers-title-end"
        ref={endRef}
        initial={{ opacity: 0, y: 20 }}
        animate={endInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        {t('careers1.endMessage')}
      </motion.h1>
    </>
  );
}
