import React, { useState } from 'react';
import './HeaderAndMain.css';
import { IoMdMenu } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Preloader from '../MainDivs/Preloader';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeLanguage = (lng) => {
    setIsLoading(true);
    i18n.changeLanguage(lng).then(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {isLoading && <Preloader />}
      <div className="header">
        <ul>
          <li><Link to="/TankinoxX/about">{t('about')}</Link></li>
          <li><Link to="/TankinoxX/technologies">{t('technologies')}</Link></li>
          <li><Link to="/TankinoxX/products">{t('products')}</Link></li>
          <li className="logo"><Link to="/TankinoxX">TANKINOX</Link></li>
          <li><Link to="/TankinoxX/services">{t('services')}</Link></li>
          <li><Link to="/TankinoxX/careers">{t('careers')}</Link></li>
          <li><Link to="/TankinoxX/contacts">{t('contacts')}</Link></li>
          <li>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              defaultValue={i18n.language}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="ro">RO</option>
            </select>
          </li>
          <div
            className={`menuall ${menuOpen ? 'menu-open' : ''}`}
            onClick={toggleMenu}
          >
            <IoMdMenu className="menu-icon" />
            <FaArrowLeft className="arrow-icon" />
          </div>
        </ul>
      </div>
      <div className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/TankinoxX/about">{t('about')}</Link></li>
          <li><Link to="/TankinoxX/technologies">{t('technologies')}</Link></li>
          <li><Link to="/TankinoxX/products">{t('products')}</Link></li>
          <li><Link to="/TankinoxX/services">{t('services')}</Link></li>
          <li><Link to="/TankinoxX/contacts">{t('contacts')}</Link></li>
          <li><Link to="/TankinoxX/careers">{t('careers')}</Link></li>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="ro">RO</option>
          </select>
        </ul>
      </div>
    </div>
  );
}
