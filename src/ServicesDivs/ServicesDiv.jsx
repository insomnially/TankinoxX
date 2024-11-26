import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './ServicesDiv.css';

export default function ServicesDiv() {
  const { t } = useTranslation();

  return (
    <div className="services-container">
      <div className="services-items">
        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>{t('services1.engineering')}</h1>
        </motion.div>

        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1>{t('services1.welding')}</h1>
        </motion.div>

        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1>{t('services1.assembly')}</h1>
        </motion.div>

        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h1>{t('services1.thermal')}</h1>
        </motion.div>

        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h1>{t('services1.stamping')}</h1>
        </motion.div>

        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h1>{t('services1.engineering')}</h1>
        </motion.div>

        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h1>{t('services1.welding')}</h1>
        </motion.div>

        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h1>{t('services1.assembly')}</h1>
        </motion.div>

        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h1>{t('services1.thermal')}</h1>
        </motion.div>

        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <h1>{t('services1.stamping')}</h1>
        </motion.div>

        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <h1>{t('services1.engineering')}</h1>
        </motion.div>

        <motion.div
          className="services-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <h1>{t('services1.welding')}</h1>
        </motion.div>
      </div>
    </div>
  );
}
