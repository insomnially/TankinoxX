import React, {useEffect} from 'react'
import SmoothScroll from '../MainDivs/SmoothScroll'
import Footer from '../Footer/Footer'
import Header from '../HeaderAndMain/Header'
import ContactsDiv from '../ContactsDivs/ContactsDiv'
import { useTranslation } from 'react-i18next'

export function Contacts() {
    const { t } = useTranslation();
      useEffect(() => {
        document.title = t('contactsPage.title');
      }, [t]);


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