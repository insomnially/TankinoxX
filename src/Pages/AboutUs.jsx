import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SmoothScroll from '../MainDivs/SmoothScroll';
import Footer from '../Footer/Footer';
import './AboutUs.css';
import Header from '../HeaderAndMain/Header';
import AboutFirst from '../AboutDivs/AboutFirst';
import AboutSecond from '../AboutDivs/AboutSecond';
import AboutThird from '../AboutDivs/AboutThird';

export function About() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('aboutPage.title');
  }, [t]);

  return (
    <>
      <Header />
      <SmoothScroll>
        <AboutFirst />
        <AboutSecond />
        <AboutThird />
        <Footer />
      </SmoothScroll>
    </>
  );
}
