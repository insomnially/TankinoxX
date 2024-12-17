import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./ItemPage.css";
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
import imgother2 from '../images/otherstainless.png'
import imgother1 from '../images/chemicalother.png';
import imgother3 from '../images/otheraseptic.png';
import imgother4 from '../images/otherxxl.png';
import imgother5 from '../images/otherinsulated.png';
import imgother6 from '../images/alcohol.png';
import imgother7 from '../images/otherpharma.png';
import imgother8 from '../images/othercip.png';
import imgother9 from '../images/otherheating.png';
import imgother10 from '../images/otherflat.png';
import imgother11 from '../images/othertor.png';
import imgother12 from '../images/othercone.png';
import Header from '../HeaderAndMain/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SmoothScroll from '../MainDivs/SmoothScroll';

export default function ItemPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: detailsRef, inView: detailsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const items = {
    0: {
      title: t('item.title.stainless_steel_tanks'),
      description: t('item.description.stainless_steel_tanks'),
      image: img1,
      imageother1: imgother2 
    },
    1: {
      title: t('item.title.xxl_tanks'),
      description: t('item.description.xxl_tanks'),
      image: img2,
      imageother1: imgother4
    },
    2: {
      title: t('item.title.aseptic_tanks'),
      description: t('item.description.aseptic_tanks'),
      image: img3,
      imageother1: imgother3
    },
    3: {
      title: t('item.title.insulated_tanks'),
      description: t('item.description.insulated_tanks'),
      image: img4,
      imageother1: imgother5
    },
    4: {
      title: t('item.title.alcohol_tanks'),
      description: t('item.description.alcohol_tanks'),
      image: img5,
      imageother1: imgother6
    },
    5: {
      title: t('item.title.pharmaceutical_tanks'),
      description: t('item.description.pharmaceutical_tanks'),
      image: img6,
      imageother1: imgother7
    },
    6: {
      title: t('item.title.chemical_tanks'),
      description: t('item.description.chemical_tanks'),
      image: img7,
      imageother1: imgother1
    },
    7: {
      title: t('item.title.cip_tanks'),
      description: t('item.description.cip_tanks'),
      image: img8,
      imageother1: imgother8
    },
    8: {
      title: t('item.title.heat_cool_tanks'),
      description: t('item.description.heat_cool_tanks'),
      image: img9,
      imageother1: imgother9
    },
    9: {
      title: t('item.title.flat_tanks'),
      description: t('item.description.flat_tanks'),
      image: img10,
      imageother1: imgother10
    },
    10: {
      title: t('item.title.conical_tanks'),
      description: t('item.description.conical_tanks'),
      image: img11,
      imageother1: imgother12
    },
    11: {
      title: t('item.title.torospheric_tanks'),
      description: t('item.description.torospheric_tanks'),
      image: img12,
      imageother1: imgother11
    },
  };

  const item = items[id];

  if (!item) {
    return <h1>{t('item.not_found')}</h1>;
  }

  return (
    <>
      <Header />
      <motion.h1
        className="item-title"
        ref={titleRef}
        initial={{ opacity: 0, y: -20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {item.title}
      </motion.h1>
      <div className="item-page">
        <motion.div
          className="item-content"
          ref={contentRef}
          initial={{ opacity: 0, x: -20 }}
          animate={contentInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="item-description">
            {item.description}
          </p>
          <motion.div
            className="item-details"
            ref={detailsRef}
            initial={{ opacity: 0, x: -20 }}
            animate={detailsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>{t('item.material.title')}</h3>
            <p>AISI 304<br />(EN 1.4301, X5CrNi18-10)</p>
            <p>AISI 316L<br />(EN 1.4404, X2CrNiMo18-13)</p>
            <p>{t('item.material.details')}</p>
            <h3>{t('item.surface.title')}</h3>
            <p>{t('item.surface.options.twob')}</p>
            <p>{t('item.surface.options.twor')}</p>
            <p>{t('item.surface.options.grinding')}</p>
            <p>{t('item.surface.options.satin')}</p>
            <p>{t('item.surface.options.decorative')}</p>
          </motion.div>
          <motion.div
  className="item-container"
  ref={contentRef}
  initial={{ opacity: 0, x: -20 }}
  animate={contentInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <motion.h1
    className="item-highlight"
    initial={{ opacity: 0, x: -20 }}
    animate={contentInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
    {t('item.products_unique')}
  </motion.h1>
  <motion.div
    className="item-description-block"
    initial={{ opacity: 0, x: -20 }}
    animate={contentInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay: 1.0 }}
  >
    <p>{item.description}</p>
    <p>{t('item.tankinox_info_part_1')}</p>
  </motion.div>
</motion.div>

        </motion.div>
        
        <motion.div
          className="item-image"
          ref={imageRef}
          initial={{ opacity: 0, x: 20 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <img src={item.image} alt={item.title} />
          {item.imageother1 && <img src={item.imageother1} alt={item.title} />}
        </motion.div>
      </div>
      <div className="buttoncontainer">
      <motion.div
        className="buttoncontacts"
        ref={buttonRef}
        initial={{ opacity: 0, y: -20 }}
        animate={buttonInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: .5 }}
      >
        <Link to="/TankinoxX/contacts">
          {t("contactus")} <FaArrowRightLong />
        </Link>
      </motion.div>
      </div>
      <Footer />
    </>
  );
}
