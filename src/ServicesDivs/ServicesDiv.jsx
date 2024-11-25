import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesDiv.css';

export default function ServicesDiv() {
  const { t } = useTranslation();

  return (
    <>
      <div className="services-container">
        <div className="services-items">
          <div className="services-item"><h1>{t('services1.engineering')}</h1></div>
          <div className="services-item"><h1>{t('services1.welding')}</h1></div>
          <div className="services-item"><h1>{t('services1.assembly')}</h1></div>
          <div className="services-item"><h1>{t('services1.thermal')}</h1></div>
          <div className="services-item"><h1>{t('services1.stamping')}</h1></div>
          <div className="services-item"><h1>{t('services1.engineering')}</h1></div>
          <div className="services-item"><h1>{t('services1.welding')}</h1></div>
          <div className="services-item"><h1>{t('services1.assembly')}</h1></div>
          <div className="services-item"><h1>{t('services1.thermal')}</h1></div>
          <div className="services-item"><h1>{t('services1.stamping')}</h1></div>
          <div className="services-item"><h1>{t('services1.engineering')}</h1></div>
          <div className="services-item"><h1>{t('services1.welding')}</h1></div>
        </div>
      </div>
    </>
  );
}
