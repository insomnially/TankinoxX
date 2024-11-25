import React from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import Footer from '../Footer/Footer'
import './AboutUs.css'
import Header from '../HeaderAndMain/Header'
import ServicesDiv from '../ServicesDivs/ServicesDiv'

export function Services() {


  return (
    <>
    <Header/>
    <SmoothScroll>
    <ServicesDiv/>
    <Footer/>
    </SmoothScroll>
    </>
  )
}