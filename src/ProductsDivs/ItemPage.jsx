import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./ItemPage.css";
import images from './images';
import Header from '../HeaderAndMain/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SmoothScroll from '../MainDivs/SmoothScroll'
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useState } from 'preact/hooks';

export default function ItemPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  
  const {
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
    imgother1, imgother2, imgother3, imgother4, imgother5, imgother6, imgother7, 
    imgother8, imgother9, imgother10, imgother11, imgother12,
  } = images;

  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setCurrentImage(null);
  };

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
      imageother1: imgother2 ,
      galleryImages: [
        images.imagegg1,
        images.imagegg2,
        images.imagegg3,
        images.imagegg4,
        images.imagegg5,
        images.imagegg6,
        images.welding1,
        images.welding2,
        images.welding3,
      ],
    },
    1: {
      title: t('item.title.xxl_tanks'),
      description: t('item.description.xxl_tanks'),
      image: img2,
      imageother1: imgother4,
      galleryImages: [
        images.xxlitem1,
        images.xxlitem2,
        images.xxlitem3,
        images.xxlitem4,
        images.xxlitem5,
        images.xxlitem6,
        images.xxlitem7,
        images.xxlitem8,
        images.xxlitem9,
      ],
    },
    2: {
      title: t('item.title.aseptic_tanks'),
      description: t('item.description.aseptic_tanks'),
      image: img3,
      imageother1: imgother3,
      galleryImages: [
        images.xxlitem1,
      ],
    },
    3: {
      title: t('item.title.insulated_tanks'),
      description: t('item.description.insulated_tanks'),
      image: img4,
      imageother1: imgother5,
      galleryImages: [
        images.xxlitem1,
      ],
    },
    4: {
      title: t('item.title.alcohol_tanks'),
      description: t('item.description.alcohol_tanks'),
      image: img5,
      imageother1: imgother6,
      galleryImages: [
        images.alcoholitem1,
        images.alcoholitem2,
        images.alcoholitem3,
        images.alcoholitem4,
        images.alcoholitem5,
        images.alcoholitem6,
      ],
    },
    5: {
      title: t('item.title.pharmaceutical_tanks'),
      description: t('item.description.pharmaceutical_tanks'),
      image: img6,
      imageother1: imgother7,
      galleryImages: [
        images.xxlitem1,
      ],
    },
    6: {
      title: t('item.title.chemical_tanks'),
      description: t('item.description.chemical_tanks'),
      image: img7,
      imageother1: imgother1,
      galleryImages: [
        images.xxlitem1,
      ],
    },
    7: {
      title: t('item.title.cip_tanks'),
      description: t('item.description.cip_tanks'),
      image: img8,
      imageother1: imgother8,
      galleryImages: [
        images.xxlitem1,
      ],
    },
    8: {
      title: t('item.title.heat_cool_tanks'),
      description: t('item.description.heat_cool_tanks'),
      image: img9,
      imageother1: imgother9,
      galleryImages: [
        images.heatingjacket2,
        images.heatingjacket3,
        images.imagegg4,
        images.imagegg6,
        images.heatingjacket1,
        images.imagegg1,
        images.welding3,
        images.heatingjacketw1,
        images.heatingjacketw2,
      ],
    },
    9: {
      title: t('item.title.flat_tanks'),
      description: t('item.description.flat_tanks'),
      image: img10,
      imageother1: imgother10,
      galleryImages: [
        images.flatitem1,
        images.flatitem2,
        images.flatitem3,
        images.flatitem4,
        images.flatitem5,
        images.flatitem6,
        images.flatitem7,
        images.flatitem8,
        images.flatitem9,
      ],
    },
    10: {
      title: t('item.title.conical_tanks'),
      description: t('item.description.conical_tanks'),
      image: img11,
      imageother1: imgother12,
      galleryImages: [
        images.conicalitem1,
        images.conicalitem2,
        images.conicalitem3,
        images.conicalitem7,
        images.conicalitem8,
        images.conicalitem9,
        images.conicalitem6,
        images.conicalitem4,
        images.conicalitem5,
      ],
    },
    11: {
      title: t('item.title.torospheric_tanks'),
      description: t('item.description.torospheric_tanks'),
      image: img12,
      imageother1: imgother11,
      galleryImages: [
        images.xxlitem1,
      ],
    },
  };

  const item = items[id];

  if (!item) {
    return <h1>{t('item.not_found')}</h1>;
  }

  useEffect(() => {
    document.title = item.title + ' | TANKİNOX'
  }, [t]);

  return (
    <>
      <Header />
      <SmoothScroll>
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

        <motion.h1
          className='itempage-gallery-title'
          initial={{ opacity: 0, y: -20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {t('exampleitempage')}<br/><span>{item.title}</span>
        </motion.h1>

        <motion.div
        className="itempage-gallery"
        initial={{ opacity: 0, x: -20 }}
        animate={contentInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        {item.galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="item-page-item"
            style={{ backgroundImage: `url(${image})` }}
            alt={item.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => handleOpenModal(image)}
          />
        ))}
      </motion.div>

      <Modal open={open} onClose={handleCloseModal} center>
        {currentImage && (
          <img
            src={currentImage}
            alt="Full-size view"
            style={{ maxWidth: "100%", maxHeight: "80vh" }}
          />
        )}
      </Modal>

        <motion.div
          className="buttoncontainer"
          initial={{ opacity: 0, y: 20 }}
          animate={buttonInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="buttoncontacts"
            ref={buttonRef}
            initial={{ opacity: 0, y: -20 }}
            animate={buttonInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: 0 }}
          >
            <Link to="/TankinoxX/contacts">
              {t("contactus")} <FaArrowRightLong />
            </Link>
          </motion.div>
        </motion.div>

        <Footer />
        </SmoothScroll>
    </>
  );
}
