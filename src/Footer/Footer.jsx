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
          <div className="logofooter"><Link to='/TankinoxX'><img src={logo}></img></Link></div>
          <p className="footer-description">
            {t("footerDescription")}
          </p>
        </div>
        <div className="footer-column">
          <ul className='footer-navigation2'>
            <li><Link to="/TankinoxX/about">{t("aboutUsfooter")}</Link></li>
            <li><Link to="/TankinoxX/careers">{t("careersfooter")}</Link></li>
            <li><Link to="/TankinoxX/contacts">{t("contactsfooter")}</Link></li>
          </ul>
          <div className="socials">
            <a href='https://instagram.com' className='social'><FaInstagram /></a>
            <a href='https://instagram.com' className='social'><FaInstagram /></a>
            <a href='https://instagram.com' className='social'><FaInstagram /></a>
            <a href='https://instagram.com' className='social'><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-column">
          <h1><Link to='/TankinoxX/services'>{t("servicesfooter")}</Link></h1>
          <ul>
            <li><Link to='/TankinoxX/services/engineering'>{t("fifth.engineering")}</Link></li>
            <li><Link to='/TankinoxX/services/welding'>{t("fifth.welding")}</Link></li>
            <li><Link to='/TankinoxX/services/cutting-and-stamping'>{t("fifth.stamping")}</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h1><Link to='/TankinoxX/products'>{t("productsfooter")}</Link></h1>
          <ul>
            <li style={{textTransform: 'uppercase'}}><Link to='/TankinoxX/products/item/0'>{t("productFirst.item1")}</Link></li>
            <li style={{textTransform: 'uppercase'}}><Link to='/TankinoxX/products/item/1'>{t("productFirst.item2")}</Link></li>
            <li style={{textTransform: 'uppercase'}}><Link to='/TankinoxX/products/item/2'>{t("productFirst.item3")}</Link></li>
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
