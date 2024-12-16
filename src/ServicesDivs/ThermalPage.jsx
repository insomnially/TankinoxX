import React from 'react';
import Header from '../HeaderAndMain/Header';
import Footer from '../Footer/Footer';
import SmoothScroll from '../MainDivs/SmoothScroll';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import './ThermalPage.css';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function ThermalPage() {
    const { t } = useTranslation();
    const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true, threshold: 0.2 });
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

    return (
        <>
            <Header />
            <SmoothScroll>
                <motion.div
                    className="thermal-main-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                <motion.h1
                    className='thermalp'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    onClick={handleScroll}
                    variants={fadeInUp}
                >
                    {t('thermal.title')}<br/>
                    <span> {t('thermal.subtitle')}</span>
                </motion.h1>

                <div className="thermal-control">
                    <motion.h1
                        ref={buttonRef}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        {t('thermal.temperatureControl')}
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        {t('thermal.description')}
                    </motion.p>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        {t('thermal.materials')}
                    </motion.p>

                    <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <motion.li variants={fadeInUp}><FaArrowRightLong /> {t('thermal.materialsList.item1')}</motion.li>
                        <motion.li variants={fadeInUp}><FaArrowRightLong /> {t('thermal.materialsList.item2')}</motion.li>
                        <motion.li variants={fadeInUp}><FaArrowRightLong /> {t('thermal.materialsList.item3')}</motion.li>
                        <motion.li variants={fadeInUp}><FaArrowRightLong /> {t('thermal.materialsList.item4')}</motion.li>
                    </motion.ul>
                </div>

                <motion.div
                    className="thermal-control-extension"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    {t('thermal.additionalInfo')}
                </motion.div>

                <motion.div
                    className="thermal-control-extension2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        {t('thermal.cladding.title')}
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        {t('thermal.cladding.description')}
                    </motion.p>

                    <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <motion.li variants={fadeInUp}><FaArrowRightLong /> {t('thermal.cladding.materials.item1')}</motion.li>
                        <motion.li variants={fadeInUp}><FaArrowRightLong /> {t('thermal.cladding.materials.item2')}</motion.li>
                        <motion.li variants={fadeInUp}><FaArrowRightLong /> {t('thermal.cladding.materials.item3')}</motion.li>
                    </motion.ul>
                </motion.div>

                <div className="buttonwrap1">
                    <motion.div
                        ref={buttonRef}
                        className="buttoncontacts"
                        initial="hidden"
                        animate={buttonInView ? "visible" : "hidden"}
                        variants={fadeInUp}
                    >
                        <Link to="/TankinoxX/contacts">
                            {t('contactus')} <FaArrowRightLong />
                        </Link>
                    </motion.div>
                </div>
                <Footer />
            </SmoothScroll>
        </>
    );
}
