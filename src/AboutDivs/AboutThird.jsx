import React from 'react';
import { motion } from 'framer-motion';
import './AboutThird.css';
import bgImage1 from '../images/image1.jpg';
import bgImage2 from '../images/image2.jpg';
import bgImage3 from '../images/image3.jpg';
import bgImage4 from '../images/image4.jpg';
import { useTranslation } from 'react-i18next';

export default function AboutThird() {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInDelayed = (delay) => ({
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay } },
  });

  return (
    <div className="aboutthird-container">
      <motion.div
        className="aboutthird-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <h1>{t("ourValues")}</h1>
      </motion.div>

      <div className="aboutthird-content">
        <motion.div
          className="aboutthird-card"
          style={{ backgroundImage: `url(${bgImage1})` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInDelayed(0.2)}
          transition={{ duration: 1 }}
        >
          <div className="aboutthird-description">
            <h2>{t("quality")}</h2>
            <p>{t("qualityText")}</p>
          </div>
        </motion.div>

        <motion.div
          style={{ alignSelf: 'flex-end', backgroundImage: `url(${bgImage2})` }}
          className="aboutthird-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInDelayed(0.4)}
          transition={{ duration: 1.2 }}
        >
          <div className="aboutthird-description">
            <h2>{t("reliability")}</h2>
            <p>{t("reliabilityText")}</p>
          </div>
        </motion.div>

        <motion.div
          className="aboutthird-card"
          style={{ backgroundImage: `url(${bgImage3})` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInDelayed(0.6)}
          transition={{ duration: 1.4 }}
        >
          <div className="aboutthird-description">
            <h2>{t("customerFocus")}</h2>
            <p>{t("customerFocusText")}</p>
          </div>
        </motion.div>

        <motion.div
          style={{ alignSelf: 'flex-end', backgroundImage: `url(${bgImage4})` }}
          className="aboutthird-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInDelayed(0.8)}
          transition={{ duration: 1.6 }}
        >
          <div className="aboutthird-description">
            <h2>{t("sustainability")}</h2>
            <p>{t("sustainabilityText")}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="aboutthird-facilities"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInDelayed(1)}
        transition={{ duration: 1.2 }}
      >
        <h2>{t("ourFacilities")}</h2>
        <p>{t("ourFacilitiesText")}</p>
      </motion.div>

      <motion.div
        style={{ borderLeft: 'none', borderRight: '5px solid red', marginTop: 200 }}
        className="aboutthird-facilities"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInDelayed(1.4)}
        transition={{ duration: 2 }}
      >
        <h2>{t("lookingToTheFuture")}</h2>
        <p>{t("lookingToTheFutureText")}</p>
      </motion.div>

      <motion.div
        style={{ maxWidth: '100%', border: '10px solid red', borderLeft: 'none', borderRight: 'none', marginTop: 200 }}
        className="aboutthird-facilities"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInDelayed(1.4)}
        transition={{ duration: 1.6 }}
      >
        <h2>{t("tankinoxPartner")}</h2>
        <p>{t("tankinoxPartnerText")}</p>
      </motion.div>
    </div>
  );
}
