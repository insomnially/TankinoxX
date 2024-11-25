import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "./ProductFirst.css";

export default function ProductFirst() {
  const { t } = useTranslation();
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: itemsRef, inView: itemsInView } = useInView({ triggerOnce: true });
  const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true });
  const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true });
  const { ref: advantagesRef, inView: advantagesInView } = useInView({ triggerOnce: true });

  return (
    <>
      <div className="productsfirst-container">
        <motion.h1
          className="products-title"
          ref={titleRef}
          initial={{ opacity: 0, x: -50 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t("productFirst.title")}
        </motion.h1>
        <div className="products-items" ref={itemsRef}>
          {["STAINLESS STEEL TANKS", "TANKS XXL", "ASEPTIC TANKS", "CIP STATIONS"].map((item, index) => (
            <motion.div
              className="product-item"
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={itemsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
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
          animate={techInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        ></motion.div>
        <motion.div
          className="product-first-description"
          initial={{ opacity: 0, x: -50 }}
          animate={techInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h1>{t("productFirst.technologyTitle")}</h1>
          <p>{t("productFirst.technologyDescription")}</p>
        </motion.div>
      </div>

      <motion.h1
        className="products-title2"
        ref={processRef}
        initial={{ opacity: 0, x: -50 }}
        animate={processInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {t("productFirst.processTitle")}
      </motion.h1>
      <div className="productsfirst-container3">
        {["STAINLESS STEEL TANKS", "TANKS XXL", "ASEPTIC TANKS", "CIP STATIONS", "STAINLESS STEEL TANKS", "TANKS XXL", "ASEPTIC TANKS", "CIP STATIONS"].map((item, index) => (
          <motion.div
            className="product-item"
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={processInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1>{t(`productFirst.processItem${index + 1}`)}</h1>
          </motion.div>
        ))}
      </div>

      <div className="productsfirst-container4" ref={advantagesRef}>
        <motion.h1
          style={{ fontSize: 50, fontWeight: 1 }}
          className="products-title3"
          initial={{ opacity: 0, y: 20 }}
          animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {t("productFirst.advantagesTitle")}
        </motion.h1>
        <div className="products-first-items">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              className="product-first-item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
            >
              <div className="product-first-image"></div>
              <h1>{t(`productFirst.advantage${index + 1}Title`)}</h1>
              <p>{t(`productFirst.advantage${index + 1}Description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
