import React from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import Footer from '../Footer/Footer'
import Header from '../HeaderAndMain/Header'
import ProductFirst from '../ProductsDivs/ProductFirst'

export function Products() {


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