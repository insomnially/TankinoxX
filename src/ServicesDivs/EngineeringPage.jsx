import React, { useEffect } from 'react';
import Header from '../HeaderAndMain/Header';
import Footer from '../Footer/Footer';
import './EngineeringPage.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SmoothScroll from '../MainDivs/SmoothScroll';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function EngineeringPage() {
  const { t } = useTranslation();
     useEffect(() => {
          document.title = t('engineeringPage.title');
      }, [t]);
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const delayStep = 0.2;
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: cardTitleRef, inView: cardTitleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: extraSectionRef, inView: extraSectionInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: automationRef, inView: automationInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <Header />
      <SmoothScroll>
        <motion.div
          className="engineering-main-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>

        <motion.h1
          ref={titleRef}
          className='engineeringp'
          initial={{ opacity: 0, y: -50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: delayStep }}
          onClick={handleScroll}
        >
          {t('engineering.title')}<br /><span>{t('engineering.subtitle')}</span>
        </motion.h1>
        
        <div className="engineering-cards">
          <motion.div
            ref={cardTitleRef}
            className="engineering-title"
            initial={{ opacity: 0, y: 50 }}
            animate={cardTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: delayStep *2 }}
          >
            <h1>{t('engineering.cards.title')} <span>{t('engineering.cards.subtitle')}</span></h1>
            <p>{t('engineering.cards.description')}</p>
          </motion.div>

          {[1, 2, 3, 4].map((card, index) => {
              const { ref, inView } = useInView({ triggerOnce: true });
           return (
            <motion.div
            key={index}
      className={`engineering-card c${card % 2 === 0 ? '2' : '1'}`}
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: delayStep }}
    >
      <div
      className={`engineering-card-image c${card}`}></div>
      <div className={`engineering-card-description c${card % 2 === 0 ? '2' : '1'}`}>
        <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: delayStep *2 }}
        
        >{t(`engineering.cards.card${card}.title`)}</motion.h1>
        <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: delayStep *4 }}
        >{t(`engineering.cards.card${card}.description`)}</motion.p>
      </div>
    </motion.div>
  );
})}
        </div>

        <motion.div
          className="engineering-extra-section"
          ref={extraSectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={extraSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, }}
        >
          <div className="engineering-extra-content">
            <h1>{t('engineering.extra.title')}</h1>
            <p>{t('engineering.extra.description')}</p>
          </div>
        </motion.div>

        <motion.div
  className="automation-section"
  ref={automationRef}
  initial={{ opacity: 0, y: 50 }}
  animate={automationInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 1 }}
>
  <div className="automation-content">
    <h1>{t('automation.title')}</h1>
    <p>{t('automation.subtitle')}</p>
    <ul className="automation-list">
      {['point1', 'point2', 'point3', 'point4', 'point5', 'point6'].map((point, index) => (
        <motion.li
          key={index}
          className="automation-list-item"
          initial={{ opacity: 0, y: -20}}
          animate={
            automationInView
              ? { opacity: 1, y: 0}
              : {}
          }
          transition={{
            duration: 0.8,
            delay: delayStep * index, // Разная задержка для каждого элемента
          }}
        >
          <span className="checkmark">✓</span>
            {t(`automation.${point}`)}
        </motion.li>
      ))}
    </ul>
  </div>
</motion.div>

        <div className="buttonwrap">
          <motion.div
            ref={buttonRef}
            className="buttoncontacts"
            initial={{ opacity: 0, y: -20 }}
            animate={ buttonInView ?  { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/TankinoxX/contacts">
              {t("contactus")} <FaArrowRightLong />
            </Link>
          </motion.div>
        </div>

        <Footer />
      </SmoothScroll>
    </>
  );
}
