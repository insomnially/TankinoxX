import React from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import Footer from '../Footer/Footer'
import Header from '../HeaderAndMain/Header'
import ContactsDiv from '../ContactsDivs/ContactsDiv'

export function Contacts() {


  return (
    <>
    <Header/>
    <SmoothScroll>
    <ContactsDiv/>
    <Footer/>
    </SmoothScroll>
    </>
  )
}