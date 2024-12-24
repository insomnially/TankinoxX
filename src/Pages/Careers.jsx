import React from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import Footer from '../Footer/Footer'
import './AboutUs.css'
import Header from '../HeaderAndMain/Header'
import CareersDiv from '../CareersDivs/CareersDiv'
import { useEffect } from 'preact/hooks'
import { useTranslation } from 'react-i18next';


export function Careers() {
  const { t } = useTranslation();
    useEffect(() => {
      document.title = t('careersPage.title');
    }, [t]);


  return (
    <>
    <Header/>
    <SmoothScroll>
    <CareersDiv/>
    <Footer/>
    </SmoothScroll>
    </>
  )
}