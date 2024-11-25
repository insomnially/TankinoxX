import React from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import Footer from '../Footer/Footer'
import './AboutUs.css'
import Header from '../HeaderAndMain/Header'
import CareersDiv from '../CareersDivs/CareersDiv'

export function Careers() {


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