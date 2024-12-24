import React, { useEffect } from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import Footer from '../Footer/Footer'
import Header from '../HeaderAndMain/Header'
import ProductFirst from '../ProductsDivs/ProductFirst'
import { useTranslation } from 'react-i18next'

export function Projects() {
      const { t } = useTranslation();
        useEffect(() => {
          document.title = t('projectsPage.title');
        }, [t]);


  return (
    <>
    <Header/>
    <SmoothScroll>
    <ProductFirst/>
    <Footer/>
    </SmoothScroll>
    </>
  )
}