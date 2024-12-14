import React from 'react';
import Header from '../HeaderAndMain/Header';
import Footer from '../Footer/Footer';
import './EquipmentPage.css';
import { motion } from "framer-motion";
import SmoothScroll from '../MainDivs/SmoothScroll';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'react-i18next';

export default function EquipmentPage() {
  const { t } = useTranslation();

  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ab2Ref, inView: ab2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: abRef, inView: abInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <Header />

      <SmoothScroll>
        <motion.div
          className="equipment-main-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <h1
          className='equipmentp'
        >
          {t('equipment.title')}<br />
          <span>{t('equipment.subtitle')}</span>
        </h1>

        <div className="equipment-container">
          <motion.div
            className="equipment-title"
            ref={abRef}
            initial={{ x: -20, opacity: 0 }}
            animate={abInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1>
              {t('equipment.methods.title')}<span> {t('equipment.methods.subtitle')}</span>
            </h1>
          </motion.div>

          <div className="equipment-cards">
            <motion.div
              className="equipment-card c1"
              ref={abRef}
              initial={{ x: -30, opacity: 0 }}
              animate={abInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="equipment-card-image c1" />
              <div className="equipment-card-description c1">
                <h1>
                  {t('equipment.cards.card1.title')} <span>{t('equipment.cards.card1.highlight')}</span>
                </h1>
                <p>{t('equipment.cards.card1.description')}</p>
              </div>
            </motion.div>

            <motion.div
              className="equipment-card c2"
              ref={ab2Ref}
              initial={{ x: 30, opacity: 0 }}
              animate={ab2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="equipment-card-image c2" />
              <div className="equipment-card-description c2">
                <h1>
                  {t('equipment.cards.card2.title')} <span>{t('equipment.cards.card2.highlight')}</span>
                </h1>
                <p>{t('equipment.cards.card2.description')}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={infoRef}
            className="equipment-info"
            initial={{ opacity: 0, y: 20 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1>{t('equipment.info.title')}</h1>
            <p>{t('equipment.info.description')}</p>
          </motion.div>

          <div className="buttonwrap1">
            <motion.div
              ref={buttonRef}
              className="buttoncontacts"
              initial={{ opacity: 0, y: -20 }}
              animate={buttonInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link to="/TankinoxX/contacts">
                {t('contactus')} <FaArrowRightLong />
              </Link>
            </motion.div>
          </div>
        </div>

        <Footer />
      </SmoothScroll>
    </>
  );
}
