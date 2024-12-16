import React ,{ useEffect } from 'react';
import Header from '../HeaderAndMain/Header';
import Footer from '../Footer/Footer';
import SmoothScroll from '../MainDivs/SmoothScroll';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import './WeldingPage.css';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function WeldingPage() {
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

    useEffect(() => {
        document.title = t('weldingPage.title');
    }, [t]);

    return (
        <>
            <Header />
            <SmoothScroll>
                <motion.div
                    className="welding-main-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.h1
                    className='weldingp'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    onClick={handleScroll}
                >
                    {t('weldingPage.title1')}<br/>
                </motion.h1>

                <div className="welding-container">
                    <div className="welding-start-container">
        <motion.div
          className="welding-main-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1>{t('weldingPage.services.title')}</h1>
          <p>{t('weldingPage.services.description')}</p>
        </motion.div>

        <motion.h1
          className='welding-title1'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('weldingPage.services.metalsTitle')}
        </motion.h1>

        <div className="welding-items">
          <motion.div
            className="welding-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="welding-item-image s1"></div>
            <p>{t('weldingPage.services.metal1')}</p>
          </motion.div>

          <motion.div
            className="welding-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="welding-item-image s2"></div>
            <p>{t('weldingPage.services.metal2')}</p>
          </motion.div>

          <motion.div
            className="welding-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="welding-item-image s3"></div>
            <p>{t('weldingPage.services.metal3')}</p>
          </motion.div>

          <motion.div
            className="welding-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="welding-item-image s4"></div>
            <p>{t('weldingPage.services.metal4')}</p>
          </motion.div>
                    </div>
                    </div>
                    </div>
                    <motion.div
          className="welding-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1>{t('weldingPage.advantages.title')}</h1>
        </motion.div>
                    <div className="welding-tig-container">
          <div className="welding-title">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('weldingPage.tigWig.title')}
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('weldingPage.tigWig.description')}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('weldingPage.tigWig.types')}
            </motion.p>
          </div>

          <div className="welding-items2">
            <motion.div
              className="welding-item2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="welding-item-image2 t1"></div>
              <p>{t('weldingPage.tigWig.manual')}</p>
            </motion.div>
            <motion.div
              className="welding-item2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="welding-item-image2 t2"></div>
              <p>{t('weldingPage.tigWig.semiauto')}</p>
            </motion.div>
            <motion.div
              className="welding-item2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="welding-item-image2 t3"></div>
              <p>{t('weldingPage.tigWig.auto')}</p>
            </motion.div>
          </div>
        </div>
                    <div className="welding-mig-container">
                    <div className="welding-start1-container">
        <motion.div
          className="welding-mig-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1>{t('weldingPage.mig.migTitle')}</h1>
          <p>{t('weldingPage.mig.migDescription')}</p>
        </motion.div>

        <motion.p
          className="welding-item-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('weldingPage.mig.migAdvantages')}
        </motion.p>

        <div className="welding-items3">
          <div className="welding-items3-left">
            <motion.div
              className="welding-item3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="welding-item-image2 m1"></div>
              <p>{t('weldingPage.mig.advantage1')}</p>
            </motion.div>
            <motion.div
              className="welding-item3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="welding-item-image2 m2"></div>
              <p>{t('weldingPage.mig.advantage2')}</p>
            </motion.div>
          </div>
          <div className="welding-items3-right">
            <motion.div
              className="welding-item3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="welding-item-image2 m3"></div>
              <p>{t('weldingPage.mig.advantage3')}</p>
            </motion.div>
            <motion.div
              className="welding-item3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="welding-item-image2 m4"></div>
              <p>{t('weldingPage.mig.advantage4')}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    <motion.div
            className="welding-border c1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1>{t('weldingPage.plasmaWelding.mainText')}</h1>
          </motion.div>
          <motion.div
            className="welding-plasma-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="welding-plasma-start-container">
              <motion.div
                className="welding-plasma-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h1>{t('weldingPage.plasmaWelding.title')}</h1>
                <p>{t('weldingPage.plasmaWelding.description')}</p>
              </motion.div>
              <motion.p
                className="welding-item-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t('weldingPage.plasmaWelding.advantages')}
              </motion.p>
              <div className="welding-items4">
                <motion.div
                  className="welding-item4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="welding-item-image2 p1"></div>
                  <p>{t('weldingPage.plasmaWelding.advantage1')}</p>
                  <span>{t('weldingPage.plasmaWelding.advantage1Description')}</span>
                </motion.div>
                <motion.div
                  className="welding-item4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="welding-item-image2 p2"></div>
                  <p>{t('weldingPage.plasmaWelding.advantage2')}</p>
                  <span>{t('weldingPage.plasmaWelding.advantage2Description')}</span>
                </motion.div>
                <motion.div
                  className="welding-item4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="welding-item-image2 p3"></div>
                  <p>{t('weldingPage.plasmaWelding.advantage3')}</p>
                  <span>{t('weldingPage.plasmaWelding.advantage3Description')}</span>
                </motion.div>
              </div>
            </div>
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