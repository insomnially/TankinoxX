import React from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import Footer from '../Footer/Footer'
import './AboutUs.css'
import Header from '../HeaderAndMain/Header'
import AboutFirst from '../AboutDivs/AboutFirst'
import AboutSecond from '../AboutDivs/AboutSecond'
import AboutThird from '../AboutDivs/AboutThird'

export function About() {


  return (
    <>
    <Header/>
    <SmoothScroll>
    <AboutFirst/>
    <AboutSecond/>
    <AboutThird/>
    <Footer/>
    </SmoothScroll>
    </>
  )
}