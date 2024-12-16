import React, { useEffect } from 'react';
import Header from '../HeaderAndMain/Header';
import Footer from '../Footer/Footer';
import './CuttingPage.css';
import SmoothScroll from '../MainDivs/SmoothScroll';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';


export default function CuttingPage() {
    const { t } = useTranslation();
    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.2 });


    const handleScroll = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    };
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    useEffect(() => {
        document.title = t('cuttingPage.title');
    }, [t]);

    return (
        <>
            <Header />
            <SmoothScroll>
                <motion.div
                    className="cutting-main-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                ></motion.div>

                <motion.h1
                    ref={titleRef}
                    className='engineeringp'
                    initial={{ opacity: 0, y: -50 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    onClick={handleScroll}
                >
                    {t('cuttingPage.cuttingp')}<br />
                    <span>{t('cuttingPage.cuttingpbr')}</span>
                </motion.h1>

                <div className="cutting-container">
                    <div className="cutting-main-title">
                    <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}>
                    {t('cuttingPage.mainTitle')}</motion.h1></div>
                    <div className="cutting-guillotine-max">
                    <div className="cutting-guillotine-title">
                    <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}>
                        {t('cuttingPage.guillotineTitle')}</motion.h1></div>
                    <div className="cutting-guillotine">
                    <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}>
                    {t('cuttingPage.guillotineDescription')}</motion.p></div>
                        <motion.p
                         className='cutting-guillotine-max-title'
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         variants={fadeInUp}>
                         {t('cuttingPage.guillotinemaxTitle')}</motion.p>
                        <div className='cutting-guillotine-items'>
                          <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} 
                        className="cutting-guillotine-item">
                            <div className="cutting-guillotine-item-image s"></div><p>{t('cuttingPage.guillotineItems.item1')}</p></motion.div>
                          <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                          className="cutting-guillotine-item"><div className="cutting-guillotine-item-image u"></div><p>{t('cuttingPage.guillotineItems.item2')}</p></motion.div>
                          <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                          className="cutting-guillotine-item"><div className="cutting-guillotine-item-image o"></div><p>{t('cuttingPage.guillotineItems.item3')}</p></motion.div>
                          <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                          className="cutting-guillotine-item"><div className="cutting-guillotine-item-image a"></div><p>{t('cuttingPage.guillotineItems.item4')}</p></motion.div>
                          <motion.h1
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={fadeInUp} 
                          >{t('cuttingPage.guillotineItems.to8mm')}</motion.h1>
                        </div>
                        <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} 
                        className='guillotine-title1'>{t('cuttingPage.guillotineTitle1')}</motion.h1>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} 
                        className="guillotine-svg">
                            <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp} 
                            className='m4'>{t('cuttingPage.guillotinemax4')}</motion.p>
                            <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp} 
                            className='m3'>{t('cuttingPage.guillotinemax3')}</motion.p>
                        </motion.div>
                    </div>
                    <div className="coordinate-container">
                      <div className="coordinate-maintitle">
                      <motion.h1
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      >{t('cuttingPage.coordinatemainTitle')}</motion.h1>
                      <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      >{t('cuttingPage.coordinatemainDescription')}</motion.p>
                      </div>
                      <motion.p 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className='coordinate-max'>{t('cuttingPage.coordinateMax')}</motion.p>
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className="cutting-guillotine-item"><div className="cutting-guillotine-item-image m"/><p>{t('cuttingPage.coordinateitemP')}<br/><span>{t('cuttingPage.coordinateitemSpan')}</span></p>
                      </motion.div>
                      <motion.h1
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className='guillotine-title1'>{t('cuttingPage.guillotineTitle1')}</motion.h1>
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className="guillotine-svg">
                            <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp} 
                            className='m4'>{t('cuttingPage.coordinatemax2')}</motion.p>
                            <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp} 
                            className='m3'>{t('cuttingPage.coordinatemax1')}</motion.p>
                        </motion.div>
                    </div>
                    <div className="coordinate-container p">
                      <div className="coordinate-maintitle">
                        <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} 
                        >{t('cuttingPage.plasmamainTitle')}</motion.h1>
                        <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} 
                        >{t('cuttingPage.plasmamainDescription')}</motion.p>
                      </div>
                      <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className='coordinate-max'>{t('cuttingPage.coordinateMax')}</motion.p>
                      <div className='cutting-guillotine-items p'>
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className="cutting-guillotine-item"><div className="cutting-guillotine-item-image c1"></div><p>{t('cuttingPage.guillotineItems.item2')}<br/><span>{t('cuttingPage.coordinatemaxspan1')}</span></p></motion.div>
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className="cutting-guillotine-item"><div className="cutting-guillotine-item-image c2"></div><p>{t('cuttingPage.guillotineItems.item1')}<br/><span>{t('cuttingPage.coordinatemaxspan2')}</span></p></motion.div>
                </div>
                <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp} 
                className='guillotine-title1'>{t('cuttingPage.guillotineTitle1')}</motion.h1>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp} 
                className="guillotine-svg">
                            <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp} 
                            className='m4'>{t('cuttingPage.plasmamax1')}</motion.p>
                            <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp} 
                            className='m3'>{t('cuttingPage.plasmamax2')}</motion.p>
                        </motion.div>
                </div>
                <div className="coordinate-container c">
                <div className="coordinate-maintitle">
                        <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} 
                        >{t('cuttingPage.oxygenmainTitle')}</motion.h1>
                        <p>{t('cuttingPage.oxygenmainDescription')}</p>
                      </div>
                      <div className='cutting-guillotine-items c'>
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className="cutting-guillotine-item c1"><div className="cutting-guillotine-item-image c1"></div><p>{t('cuttingPage.oxygenItems.item1p')}<br/><small>{t('cuttingPage.oxygenItems.item1small')}</small></p></motion.div>
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className="cutting-guillotine-item c1"><div className="cutting-guillotine-item-image c2"></div><p>{t('cuttingPage.oxygenItems.item2p')}<br/><small>{t('cuttingPage.oxygenItems.item2small')}</small></p></motion.div>
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className="cutting-guillotine-item c1"><div className="cutting-guillotine-item-image c1"></div><p>{t('cuttingPage.oxygenItems.item3p')}<br/><small>{t('cuttingPage.oxygenItems.item3small')}</small></p></motion.div>
                </div>
                </div>
                <div className="coordinate-container p">
                <div className="coordinate-maintitle">
                        <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} 
                        >{t('cuttingPage.stampingmainTitle')}</motion.h1>
                        <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} 
                        >{t('cuttingPage.stampingmainDescription')}</motion.p>
                        <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} 
                        style={{marginTop: 50}} className='guillotine-title1'>{t('cuttingPage.stampingTitle')}</motion.h1>
                <div className="coordinate-maintitle">
                <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp} 
                >{t('cuttingPage.stampingTitle1')}</motion.p>
                </div>
                      </div>
                      <div className='cutting-guillotine-items c'>
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className="cutting-guillotine-item c1"><div className="cutting-guillotine-item-image co1"></div><p>{t('cuttingPage.stampingItems.item1p')}<br/><small>{t('cuttingPage.stampingItems.item1small')}</small></p></motion.div>
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className="cutting-guillotine-item c1"><div className="cutting-guillotine-item-image co2"></div><p>{t('cuttingPage.stampingItems.item2p')}<br/><small>{t('cuttingPage.stampingItems.item2small')}</small></p></motion.div>
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp} 
                      className="cutting-guillotine-item c1"><div className="cutting-guillotine-item-image co3"></div><p>{t('cuttingPage.stampingItems.item3p')}<br/><small>{t('cuttingPage.stampingItems.item3small')}</small></p></motion.div>
                </div>
                </div>
                
          <div className="buttonwrap1">
            <motion.div
              ref={buttonRef}
              className="buttoncontacts"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp} 
            >
              <Link to="/TankinoxX/contacts">
                {t('contactus')} <FaArrowRightLong />
              </Link>
            </motion.div>
          </div>
                </div>
                <Footer />
            </SmoothScroll>
        </>
    );
}
