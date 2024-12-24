import React, { useEffect } from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import Footer from '../Footer/Footer'
import Header from '../HeaderAndMain/Header'
import ProductFirst from '../ProductsDivs/ProductFirst'
import { useTranslation } from 'react-i18next'

export function Products() {
      const { t } = useTranslation();
        useEffect(() => {
          document.title = t('productsPage.title');
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