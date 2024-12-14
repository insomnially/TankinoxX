import React from 'react';
import './TechSecond.css';
import { IoCheckmark } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

export default function TechSecond() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: '100%', transition: { duration: 2, ease: 'easeInOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="techsecond-container"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.h2
        variants={itemVariants}
      >
        {t('mainadvantageheader')}
      </motion.h2>
      <div className="techsecond-list-container">
        <motion.span
          className="vertical-line"
          variants={lineVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        ></motion.span>

        <ul className="techsecond-list">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.li key={i} variants={itemVariants}>
              <span style={{ marginRight: 40 }} className="check-icon">
                <IoCheckmark />
              </span>
              <div>
                <h3>{t(`advantage${i}Title`)}</h3>
                <p>{t(`advantage${i}Description`)}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
