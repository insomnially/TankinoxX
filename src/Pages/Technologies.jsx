import React, { useEffect } from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import Footer from '../Footer/Footer'
import './AboutUs.css'
import Header from '../HeaderAndMain/Header'
import TechFirst from '../TechnologiesDivs/TechFirst'
import TechSecond from '../TechnologiesDivs/TechSecond'
import { useTranslation } from 'react-i18next'

export function Technologies() {
    const { t } = useTranslation();
      useEffect(() => {
        document.title = t('technologiesPage.title');
      }, [t]);


  return (
    <>
    <Header/>
    <SmoothScroll>
    <TechFirst/>
    <TechSecond/>
    <Footer/>
    </SmoothScroll>
    </>
  )
}