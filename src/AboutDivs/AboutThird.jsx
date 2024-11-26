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

  return (
    <div className="aboutthird-container">
      {/* Заголовок */}
      <motion.div
        className="aboutthird-header"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h1>{t("ourValues")}</h1>
      </motion.div>

      {/* Контентные карточки */}
      <div className="aboutthird-content">
        <motion.div
          className="aboutthird-card"
          style={{ backgroundImage: `url(${bgImage1})` }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="aboutthird-description">
            <h2>{t("quality")}</h2>
            <p>{t("qualityText")}</p>
          </div>
        </motion.div>

        <motion.div
          style={{ alignSelf: 'flex-end', backgroundImage: `url(${bgImage2})` }}
          className="aboutthird-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="aboutthird-description">
            <h2>{t("reliability")}</h2>
            <p>{t("reliabilityText")}</p>
          </div>
        </motion.div>

        <motion.div
          className="aboutthird-card"
          style={{ backgroundImage: `url(${bgImage3})` }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, delay: 0.6 }}
        >
          <div className="aboutthird-description">
            <h2>{t("customerFocus")}</h2>
            <p>{t("customerFocusText")}</p>
          </div>
        </motion.div>

        <motion.div
          style={{ alignSelf: 'flex-end', backgroundImage: `url(${bgImage4})` }}
          className="aboutthird-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.6, delay: 0.8 }}
        >
          <div className="aboutthird-description">
            <h2>{t("sustainability")}</h2>
            <p>{t("sustainabilityText")}</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="aboutthird-facilities"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <h2>{t("ourFacilities")}</h2>
        <p>{t("ourFacilitiesText")}</p>
      </motion.div>

      <motion.div
        style={{ borderLeft: 'none', borderRight: '5px solid red', marginTop: 200 }}
        className="aboutthird-facilities"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, delay: 1.4 }}
      >
        <h2>{t("lookingToTheFuture")}</h2>
        <p>{t("lookingToTheFutureText")}</p>
      </motion.div>

      <motion.div
        style={{
          maxWidth: '100%',
          border: '10px solid red',
          borderLeft: 'none',
          borderRight: 'none',
          marginTop: 200,
        }}
        className="aboutthird-facilities"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.6, delay: 1.6 }}
      >
        <h2>{t("tankinoxPartner")}</h2>
        <p>{t("tankinoxPartnerText")}</p>
      </motion.div>
    </div>
  );
}
