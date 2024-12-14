import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "./ThirdDiv.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img1 from "../images/STAINLESSSTEELTANKS.png";
import img2 from "../images/XXLTANKS.png";
import img3 from "../images/ASEPTICTANKS.png";
import img4 from "../images/INSULATEDTANKS.png";
import { useNavigate } from 'react-router-dom';

export default function ThirdDiv() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();
  const itemBackgroundsBlock1 = [img1, img2, img3, img4];

  const items = [
    { id: 0, title: "STAINLESS STEEL TANKS", image: img1 },
    { id: 1, title: "TANKS XXL", image: img2 },
    { id: 2, title: "ASCEPTIC TANKS", image: img3 },
    { id: 3, title: "THERMALLY INSULATED TANKS", image: img4 },
  ];

  return (
    <div className="third-container" ref={ref}>
      <motion.div
        className="third-products"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="products-title1"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {t("ourProducts")}
        </motion.h1>

        <div className="items">
          {items.map((item, index) => (
            <motion.div
              className="item"
              key={item.id}
              style={{
                backgroundImage: `url(${itemBackgroundsBlock1[index % itemBackgroundsBlock1.length]})`,
                backgroundPosition: "center",
                backgroundSize: "90%",
              }}
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => navigate(`products/item/${item.id}`)}
            >
              <h2>{t(`productFirst.item${index + 1}`)}</h2>
            </motion.div>
          ))}
        </div>
        <motion.div
        className="buttonmore"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <Link to="/TankinoxX/products">
          {t('moreproducts')} <FaArrowRightLong />
        </Link>
      </motion.div>
      </motion.div>
      
    </div>
  );
}
