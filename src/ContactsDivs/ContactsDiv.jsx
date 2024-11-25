import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './ContactsDiv.css';
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function ContactsDiv() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="contacts-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="contacts-wrapper">

        <motion.div className="contacts-right" variants={containerVariants}>
          <motion.h1 variants={childVariants}>{t('otherContacts')}</motion.h1>
          <div className="contacts-right-socials">
            <motion.a href="https://www.instagram.com/" variants={childVariants}>
              <FaInstagram /> {t('instagram')}: @Tankinox
            </motion.a>
            <motion.a href="https://www.telegram.org/" variants={childVariants}>
              <FaTelegram /> {t('telegram')}: @Tankinox
            </motion.a>
            <motion.a href="https://www.youtube.com/" variants={childVariants}>
              <FaYoutube /> {t('youtube')}: @Tankinox
            </motion.a>
            <motion.a href="https://www.whatsapp.com/" variants={childVariants}>
              <IoLogoWhatsapp /> {t('whatsapp')}: @Tankinox
            </motion.a>
          </div>
        </motion.div>

        <motion.div className="contacts-left" variants={containerVariants}>
          <motion.h1 variants={childVariants}>{t('phonecontacts')}</motion.h1>
          <motion.p className="phone-number" variants={childVariants}>
            +373 (999) 999-99-99
          </motion.p>

          <motion.h1 variants={childVariants}>{t('workingHours')}</motion.h1>
          <motion.p variants={childVariants}>{t('workingTime')}</motion.p>

          <motion.h1 variants={childVariants}>{t('address')}</motion.h1>
          <motion.p variants={childVariants}>{t('addressDetails')}</motion.p>
        </motion.div>

        <motion.div
          className="map"
          style={{ position: 'relative', overflow: 'hidden' }}
          variants={containerVariants}
        >
          <a
            href="https://yandex.ru/maps/10487/bucharest/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: 0 }}
          ></a>
          <a
            href="https://yandex.ru/maps/geo/2216914704/?ll=26.023494%2C44.437921&utm_medium=mapframe&utm_source=maps&z=11.89"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: 14 }}
          ></a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=26.023494%2C44.437921&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMjE2OTE0NzA0EhRSb23Dom5pYSwgQnVjdXJlyJl0aSIKDczR0EEVXrYxQg%2C%2C&z=11.89"
            width="600"
            height="400"
            frameBorder="0"
            allowFullScreen={true}
            style={{ position: 'relative' }}
          ></iframe>
          <motion.h1 variants={childVariants}>
            {t('onMaps')}
          </motion.h1>
        </motion.div>
      </div>
    </motion.div>
  );
}
