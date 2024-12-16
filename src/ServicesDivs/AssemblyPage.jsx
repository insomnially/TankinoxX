import React, { useEffect } from 'react';
import Header from '../HeaderAndMain/Header';
import Footer from '../Footer/Footer';
import './AssemblyPage.css';
import SmoothScroll from '../MainDivs/SmoothScroll';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function AssemblyPage() {
    const { t } = useTranslation();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    useEffect(() => {
        document.title = t('assemblyPage.title');
    }, [t]);

    return (
        <>
            <Header />
            <SmoothScroll>
                <motion.div
                    className="assembly-main-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                ></motion.div>

                <motion.h1
                    className='assemblyp'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    {t('assemblyPage.mainTitle')}<br/>
                    <span>{t('assemblyPage.subtitle')}</span>
                </motion.h1>

                <div className="assembly-cards">
                    <motion.div
                        className="assembly-card c1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="assembly-card-image c1"></div>
                        <div className="assembly-description c1">
                            <h1>{t('assemblyPage.cards.c1.title')}</h1>
                            <p>{t('assemblyPage.cards.c1.description')}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="assembly-card c2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="assembly-card-image c2"></div>
                        <div className="assembly-description c2">
                            <h1>{t('assemblyPage.cards.c2.title')}</h1>
                            <p>{t('assemblyPage.cards.c2.description')}</p>
                        </div>
                    </motion.div>
                </div>

                <div className="assembly-div">
                    <div className="assembly-div-descriptions">
                        <motion.div
                            className="assembly-div-description c1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h1>{t('assemblyPage.safety.title')}</h1>
                            <p>{t('assemblyPage.safety.description')}</p>
                        </motion.div>
                        <motion.div
                            className="assembly-div-description c2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h1>{t('assemblyPage.installation.title')}</h1>
                            <p>{t('assemblyPage.installation.description')}</p>
                            <ul>
                                <li>{t('assemblyPage.installation.items.0')}</li>
                                <li>{t('assemblyPage.installation.items.1')}</li>
                                <li>{t('assemblyPage.installation.items.2')}</li>
                                <li>{t('assemblyPage.installation.items.3')}</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="assembly-div-description c3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h1>{t('assemblyPage.efficiency.title')}</h1>
                            <p>{t('assemblyPage.efficiency.description')}</p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="assembly-border"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h1>{t('assemblyPage.testing')}</h1>
                </motion.div>

                <motion.div
                    className="assembly-div2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="assembly-title">
                        <h1>{t('assemblyPage.kipia.title')}</h1>
                        <p>{t('assemblyPage.kipia.description1')}</p>
                        <p className='t-assembly'>{t('assemblyPage.kipia.description2')}</p>
                    </div>

                    <motion.div
                        className="assembly-kipia"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <motion.ul
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <motion.li>{t('assemblyPage.kipia.items.0')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.items.1')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.items.2')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.items.3')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.items.4')}</motion.li>
                        </motion.ul>

                        <motion.p>{t('assemblyPage.kipia.tracking')}</motion.p>

                        <motion.ul>
                            <motion.li>{t('assemblyPage.kipia.trackingItems.0')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.trackingItems.1')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.trackingItems.2')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.trackingItems.3')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.trackingItems.4')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.trackingItems.5')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.trackingItems.6')}</motion.li>
                        </motion.ul>

                        <motion.p>{t('assemblyPage.kipia.equipment')}</motion.p>

                        <motion.ul>
                            <motion.li>{t('assemblyPage.kipia.equipmentItems.0')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.equipmentItems.1')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.equipmentItems.2')}</motion.li>
                            <motion.li>{t('assemblyPage.kipia.equipmentItems.3')}</motion.li>
                        </motion.ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="buttonwrap1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="buttoncontacts">
                        <Link to="/TankinoxX/contacts">
                            {t('contactus')} <FaArrowRightLong />
                        </Link>
                    </div>
                </motion.div>

                <Footer />
            </SmoothScroll>
        </>
    );
}
