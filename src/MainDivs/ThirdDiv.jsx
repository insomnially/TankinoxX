import React from 'react';
import './ThirdDiv.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

export default function ThirdDiv() {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const products = [
    t('stainlessSteelTanks'),
    t('tanksXXL'),
    t('asepticTanks'),
    t('processStorageTanks'),
    t('cipStations'),
    t('tanksXXL'),
    t('stainlessSteelTanks'),
    t('tanksXXL'),
    t('asepticTanks'),
    t('processStorageTanks'),
  ];

  return (
    <div className="third-container" ref={ref}>
      <motion.div
        className="third-products"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="productspan">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          ></motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t('ourProducts')}
          </motion.h1>
        </div>
        <div className="items">
          {products.map((item, index) => (
            <motion.div
              className="item"
              key={index}
              initial={{ opacity: 0, y: -30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
