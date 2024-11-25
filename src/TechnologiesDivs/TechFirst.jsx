import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './TechFirst.css';

export default function TechFirst() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.4 } },
  };

  return (
    <div className="techfirst-container">
      <div className="techfirst-content" ref={ref}>
        <motion.h1
          style={{ marginBottom: 100 }}
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
        {t("overThePast")}
        </motion.h1>


        <div className="techfirst-card">
          <motion.div
            className="techfirst-image-placeholder"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="techfirst-image"></div>
          </motion.div>

          <div className="techfirst-description">
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {t("manufacturingTitle")}
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
              }}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {t("manufacturingDescription")}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
