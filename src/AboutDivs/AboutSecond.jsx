import React from 'react';
import './AboutSecond.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import aboutimage1 from '../images/aboutimage1.webp';
import aboutimage2 from '../images/aboutimage2.webp';
import aboutimage3 from '../images/aboutimage3.webp';
import aboutimage4 from '../images/aboutimage4.webp';

export default function AboutSecond() {
  const { t } = useTranslation();

  const { ref: card1Ref, inView: card1InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: card2Ref, inView: card2InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: card3Ref, inView: card3InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: card4Ref, inView: card4InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="aboutsecond-container">
      <div className="aboutsecond-header">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={card1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          ref={card1Ref}
        >
          {t("whyTankinox")}
        </motion.h1>
      </div>

      <div className="aboutsecond-content">
        <div className="aboutsecond-card1" ref={card1Ref}>
          <motion.div
            className="aboutsecond-image"
            style={{ backgroundImage: `url(${aboutimage1})` }}
            initial={{ opacity: 0, y: 50 }}
            animate={card1InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          ></motion.div>
          <div className="aboutsecond-card-description1">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={card1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
            >
              {t("precisionQuality")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={card1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4 }}
            >
              {t("precisionQualityText")}
            </motion.p>
          </div>
        </div>

        <div className="aboutsecond-card2" ref={card2Ref}>
          <motion.div
            className="aboutsecond-image"
            style={{ backgroundImage: `url(${aboutimage2})` }}
            initial={{ opacity: 0, y: 50 }}
            animate={card2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          ></motion.div>
          <div className="aboutsecond-card-description2">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={card2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
            >
              {t("innovationDriven")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={card2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4 }}
            >
              {t("innovationDrivenText")}
            </motion.p>
          </div>
        </div>

        <div className="aboutsecond-card1" ref={card3Ref}>
          <motion.div
            className="aboutsecond-image"
            style={{ backgroundImage: `url(${aboutimage3})` }}
            initial={{ opacity: 0, y: 50 }}
            animate={card3InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          ></motion.div>
          <div className="aboutsecond-card-description1">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={card3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
            >
              {t("customSolutions")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={card3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4 }}
            >
              {t("customSolutionsText")}
            </motion.p>
          </div>
        </div>

        <div className="aboutsecond-card2" ref={card4Ref}>
          <motion.div
            className="aboutsecond-image"
            style={{ backgroundImage: `url(${aboutimage4})` }}
            initial={{ opacity: 0, y: 50 }}
            animate={card4InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          ></motion.div>
          <div className="aboutsecond-card-description2">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={card4InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
            >
              {t("comprehensiveServices")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={card4InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4 }}
            >
              {t("comprehensiveServicesText")}
            </motion.p>
          </div>
        </div>

        <div className="ourteam" ref={teamRef}>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={teamInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {t("ourTeam")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={teamInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            {t("ourTeamText")}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
