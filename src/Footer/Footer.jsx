import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logofooter"><img src={logo}></img></div>
          <p className="footer-description">
            {t("footerDescription")}
          </p>
        </div>
        <div className="footer-column">
          <ul className='footer-navigation2'>
            <li><Link to="/Tankinox/about">{t("aboutUsfooter")}</Link></li>
            <li><Link to="/Tankinox/careers">{t("careersfooter")}</Link></li>
            <li><Link to="/Tankinox/contacts">{t("contactsfooter")}</Link></li>
          </ul>
          <div className="socials">
            <a href='https://instagram.com' className='social'><FaInstagram /></a>
            <a href='https://instagram.com' className='social'><FaInstagram /></a>
            <a href='https://instagram.com' className='social'><FaInstagram /></a>
            <a href='https://instagram.com' className='social'><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-column">
          <h1>{t("servicesfooter")}</h1>
          <ul>
            <li>{t("winemaking")}</li>
            <li>{t("brewing")}</li>
            <li>{t("chemicalStorage")}</li>
          </ul>
        </div>
        <div className="footer-column">
          <h1>{t("productsfooter")}</h1>
          <ul>
            <li>{t("steelTanks")}</li>
            <li>{t("pressureVessels")}</li>
            <li>{t("customSolutions")}</li>
          </ul>
        </div>
        <div className="footer-column">
          <h1>{t("industries")}</h1>
          <ul>
            <li>{t("foodBeverage")}</li>
            <li>{t("pharmaceutical")}</li>
            <li>{t("energy")}</li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <div className='footer-contact-red'>
          <span className="red2"></span>
          <p>
            <span>{t("addressLine1")}</span><br />
            {t("addressLine2")}
          </p>
        </div>
        <div className="footer-contact-right">
          <span className="red3"></span>
          <p>{t("phone")} <span className='numberfont'>(999) 999-99-99</span></p>
          <p className='footer-contact-right-mail'>{t("email")}</p>
        </div>
      </div>
      <div className="footer-bottom">
        {t("copyright")}
      </div>
    </footer>
  );
}
