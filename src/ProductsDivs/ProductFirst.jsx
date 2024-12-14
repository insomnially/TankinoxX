import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "./ProductFirst.css";
import img1 from '../images/STAINLESSSTEELTANKS.png';
import img2 from '../images/XXLTANKS.png';
import img3 from '../images/ASEPTICTANKS.png';
import img4 from '../images/INSULATEDTANKS.png';
import img5 from '../images/ALCOHOLTANKS.png';
import img6 from '../images/PHARMACOSMTANKS.png';
import img7 from '../images/CHEMICALPHARMATANKS.png';
import img8 from '../images/CIPSTATIONTANKS.png';
import img9 from '../images/HEATCOOLTANKS.png';
import img10 from '../images/FLATTANKS.png';
import img11 from '../images/CONICALTANKS.png';
import img12 from '../images/TOROSPHERETANKS.png';
import welding from '../images/welding.png'
import welds from '../images/welds.png'
import { useNavigate } from 'react-router-dom';
import distortion from '../images/distortion.png'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function ProductFirst() {
  const { t } = useTranslation();
  const navigate = useNavigate();


  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: itemsRef, inView: itemsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: advantagesRef, inView: advantagesInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: contactsRef, inView: contactsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const itemBackgroundsBlock1 = [img1, img2, img3, img4];
  const itemBackgroundsBlock2 = [img5, img6, img7, img8, img9, img10, img11, img12];  
  const advantages = [1, 2, 3];

  const staticText = t("animatedText.staticText");
  const animatedParts = t("animatedText.animatedParts", { returnObjects: true });

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsBlock1 = [
    { id: 0, title: "STAINLESS STEEL TANKS", image: img1 },
    { id: 1, title: "TANKS XXL", image: img2 },
    { id: 2, title: "ASCEPTIC TANKS", image: img3 },
    { id: 3, title: "THERMALLY INSULATED TANKS", image: img4 },
  ];

  const itemsBlock2 = [
    { id: 4, title: "ALCOHOL TANKS", image: img5 },
    { id: 5, title: "PHARMA TANKS", image: img6 },
    { id: 6, title: "CHEMICAL TANKS", image: img7 },
    { id: 7, title: "CIP STATIONS", image: img8 },
    { id: 8, title: "HEAT TANKS", image: img9 },
    { id: 9, title: "FLAT TANKS", image: img10 },
    { id: 10, title: "CONICAL TANKS", image: img11 },
    { id: 11, title: "TOROSPHERIC TANKS", image: img12 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedParts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [animatedParts]);

  return (
    <>
      <div className="productsfirst-container">
        <motion.h1
          className="products-title"
          ref={titleRef}
          initial={{ opacity: 0, x: -50 }}
          animate={titleInView ? { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } } : {}}
        >
          {t("productFirst.title")}
        </motion.h1>

        <div className="products-items" ref={itemsRef}>
    {itemsBlock1.map((item, index) => (
    <motion.div
      className="product-item"
      key={item.id}
      style={{
        backgroundImage: `url(${itemBackgroundsBlock1[index % itemBackgroundsBlock1.length]})`,
        backgroundPosition: "center",
        transition: '0s'
      }}
      initial={{ opacity: 0, y: -50 }}
      animate={itemsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.3 + index * 0.2}}
      onClick={() => navigate(`item/${item.id}`)}
    >
      
      <h1>{t(`productFirst.item${index + 1}`)}</h1>
    </motion.div>
  ))}
</div>

      </div>

      <div className="productsfirst-container2" ref={techRef}>
        <motion.div
          className="product-first1-image"
          initial={{ opacity: 0, x: 50 }}
          animate={techInView ? { opacity: 1, x: 0, transition: { duration: 1 } } : {}}
        ></motion.div>
        <motion.div
          className="product-first-description"
          initial={{ opacity: 0, x: -50 }}
          animate={techInView ? { opacity: 1, x: 0, transition: { duration: 1.2 } } : {}}
        >
          <h1>{t("productFirst.technologyTitle")}</h1>
          <p>{t("productFirst.technologyDescription")}</p>
        </motion.div>
      </div>
      <motion.h1
        className="products-title2"
        ref={processRef}
        initial={{ opacity: 0, y: 20 }}
        animate={processInView ? { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } } : {}}
      >
        {t("productFirst.processTitle")}
      </motion.h1>
      <div className="productsfirst-container3">
      {itemsBlock2.map((item, index) => (
    <motion.div
      className="product-item"
      key={`block2-${index}`}
      style={{
        backgroundImage: `url(${itemBackgroundsBlock2[index % itemBackgroundsBlock2.length]})`,
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={processInView ? { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 + index * 0.2 } } : {}}
      onClick={() => navigate(`item/${item.id}`)}
    >
            <h1>{t(`productFirst.processItem${index + 1}`)}</h1>
          </motion.div>
        ))}
      </div>
        <div className="productsfirst-container5">
        </div>
      <div className="productsfirst-container4" ref={advantagesRef}>
        <motion.h1
          className="products-title3"
          initial={{ opacity: 0, y: 20 }}
          animate={advantagesInView ? { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } } : {}}
        >
          {t("productFirst.advantagesTitle")}
        </motion.h1>
        <div className="products-first-items">
  {advantages.map((_, index) => (
    <motion.div
      className="product-first-item"
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={advantagesInView ? { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 + index * 0.2 } } : {}}
    >
      <div
        className="product-first-image"
        style={{
          backgroundImage: `url(${[welding, welds, distortion][index]})`,
          backgroundPosition: 'center',
        }}
      ></div>
      <h1>{t(`productFirst.advantage${index + 1}Title`)}</h1>
      <p>{t(`productFirst.advantage${index + 1}Description`)}</p>
    </motion.div>
  ))}
</div>
      </div>

      <div className="products-first-container6">
      <div className="animated-text-container">
      <h1>
        {staticText}&nbsp;
        <AnimatePresence mode="wait">
          <motion.span
            key={animatedParts[currentIndex]}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.5 }}
            style={{ color: "red", fontWeight: "1" }}
          >
            {animatedParts[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </h1>
    </div>
        <motion.div
        className="products-first-left1"
        ref={leftRef}
        initial={{ opacity: 0, x: -50 }}
        animate={leftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
      </motion.div>

      <motion.div
        className="products-first-right1"
        ref={rightRef}
        initial="hidden"
        animate={rightInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
        >
          {t("productFirst.rightDescription")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {t("productFirst.rightFactorsTitle")}
        </motion.h1>

        <ul>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t("productFirst.factor1")}
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {t("productFirst.factor2")}
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {t("productFirst.factor3")}
          </motion.li>
        </ul>

        <motion.div
          ref={contactsRef}
          className="buttoncontacts"
          initial={{ opacity: 0, x: -20 }}
          animate={contactsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <Link to="/TankinoxX/contacts">
            {t("contactus")} <FaArrowRightLong />
          </Link>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
}
