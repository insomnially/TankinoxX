import React from 'react';
import './AboutFirst.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';  // Импортируем хук для перевода

export default function AboutFirst() {
  const { t } = useTranslation();  // Инициализируем перевод

  const { ref: section1Ref, inView: section1InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: section2Ref, inView: section2InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const fadeInH1 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInP = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  return (
    <div className="aboutfirst-container">
      <div className="aboutfirst-1" ref={section1Ref}>
        <motion.h1
          className="section-title"
          initial="hidden"
          animate={section1InView ? "visible" : "hidden"}
          variants={fadeInH1}
        >
          {t("whoWeAre")}
        </motion.h1>
        <motion.p
          className="section-text"
          initial="hidden"
          animate={section1InView ? "visible" : "hidden"}
          variants={fadeInP}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t("whoWeAreText")}
        </motion.p>
      </div>

      <div className="aboutfirst-2" ref={section2Ref}>
        <motion.span
          className="red-bar"
          initial={{ opacity: 0, width: '0%' }}
          animate={section2InView ? { opacity: 1, width: '100%' } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        ></motion.span>
        <motion.h1
          className="section-title"
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          variants={fadeInH1}
        >
          {t("ourMission")}
        </motion.h1>
        <motion.p
          className="section-text"
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          variants={fadeInP}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t("ourMissionText")}
        </motion.p>
      </div>
    </div>
  );
}
