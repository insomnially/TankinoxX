import React from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import FirstDiv from '../MainDivs/FirstDiv'
import SecondDiv from '../MainDivs/SecondDiv'
import ThirdDiv from '../MainDivs/ThirdDiv'
import FourthDiv from '../MainDivs/FourthDiv'
import FifthDiv from '../MainDivs/FifthDiv'
import Footer from '../Footer/Footer'
import Header from '../HeaderAndMain/Header'

export function MainPage() {


  return (
    <>
    <Header/>
    <SmoothScroll>
    <FirstDiv/>
    <SecondDiv/>
    <ThirdDiv/>
    <FourthDiv/>
    <FifthDiv/>
    <Footer/>
    </SmoothScroll>
    </>
  )
}