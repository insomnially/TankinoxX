import React from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import Footer from '../Footer/Footer'
import './AboutUs.css'
import Header from '../HeaderAndMain/Header'
import TechFirst from '../TechnologiesDivs/TechFirst'
import TechSecond from '../TechnologiesDivs/TechSecond'

export function Technologies() {


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