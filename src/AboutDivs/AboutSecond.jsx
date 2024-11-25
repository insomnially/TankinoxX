import React from 'react';
import './AboutSecond.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import aboutimage1 from '../images/imagee5.jpg';
import aboutimage2 from '../images/imagee4.jpg';
import aboutimage3 from '../images/imagee1.jpg';
import aboutimage4 from '../images/imagee3.jpg';

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

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div className="aboutsecond-container">
      <div className="aboutsecond-header">
        <motion.h1
          initial="hidden"
          animate={card1InView ? "visible" : "hidden"}
          variants={fadeIn}
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
            initial="hidden"
            animate={card1InView ? "visible" : "hidden"}
            variants={fadeIn}
          ></motion.div>
          <div className="aboutsecond-card-description1">
            <motion.h2
              initial="hidden"
              animate={card1InView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              {t("precisionQuality")}
            </motion.h2>
            <motion.p
              initial="hidden"
              animate={card1InView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              {t("precisionQualityText")}
            </motion.p>
          </div>
        </div>

        <div className="aboutsecond-card2" ref={card2Ref}>
          <motion.div
            className="aboutsecond-image"
            style={{ backgroundImage: `url(${aboutimage2})` }}
            initial="hidden"
            animate={card2InView ? "visible" : "hidden"}
            variants={fadeIn}
          ></motion.div>
          <div className="aboutsecond-card-description2">
            <motion.h2
              initial="hidden"
              animate={card2InView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              {t("innovationDriven")}
            </motion.h2>
            <motion.p
              initial="hidden"
              animate={card2InView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              {t("innovationDrivenText")}
            </motion.p>
          </div>
        </div>

        <div className="aboutsecond-card1" ref={card3Ref}>
          <motion.div
            className="aboutsecond-image"
            style={{ backgroundImage: `url(${aboutimage3})` }}
            initial="hidden"
            animate={card3InView ? "visible" : "hidden"}
            variants={fadeIn}
          ></motion.div>
          <div className="aboutsecond-card-description1">
            <motion.h2
              initial="hidden"
              animate={card3InView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              {t("customSolutions")}
            </motion.h2>
            <motion.p
              initial="hidden"
              animate={card3InView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              {t("customSolutionsText")}
            </motion.p>
          </div>
        </div>

        <div className="aboutsecond-card2" ref={card4Ref}>
          <motion.div
            className="aboutsecond-image"
            style={{ backgroundImage: `url(${aboutimage4})` }}
            initial="hidden"
            animate={card4InView ? "visible" : "hidden"}
            variants={fadeIn}
          ></motion.div>
          <div className="aboutsecond-card-description2">
            <motion.h2
              initial="hidden"
              animate={card4InView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              {t("comprehensiveServices")}
            </motion.h2>
            <motion.p
              initial="hidden"
              animate={card4InView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              {t("comprehensiveServicesText")}
            </motion.p>
          </div>
        </div>

        <div className="ourteam" ref={teamRef}>
          <motion.span
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeIn}
          ></motion.span>
          <motion.h1
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            {t("ourTeam")}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            {t("ourTeamText")}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
