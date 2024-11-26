import React from 'react';
import './AboutFirst.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

export default function AboutFirst() {
  const { t } = useTranslation();

  const { ref: section1Ref, inView: section1InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: section2Ref, inView: section2InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="aboutfirst-container">
      <div className="aboutfirst-1" ref={section1Ref}>
        <motion.div
          className="aboutfirst-content"
          initial={{ opacity: 0, x: -20 }}
          animate={section1InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="section-title">{t("whoWeAre")}</h1>
          <p className="section-text">{t("whoWeAreText")}</p>
        </motion.div>
      </div>

      <div className="aboutfirst-2" ref={section2Ref}>
        <motion.div
          className="aboutfirst-content"
          initial={{ opacity: 0, x: 20 }}
          animate={section2InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="red-bar"
            initial={{ width: '0%', opacity: 0 }}
            animate={section2InView ? { width: '100%', opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.span>
          <h1 className="section-title">{t("ourMission")}</h1>
          <p className="section-text">{t("ourMissionText")}</p>
        </motion.div>
      </div>
    </div>
  );
}
