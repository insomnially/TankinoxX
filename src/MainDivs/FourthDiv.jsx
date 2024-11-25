import React, { useState } from 'react';
import './FourthDiv.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import image1 from '../images/imagee8.jpg';
import image2 from '../images/imagee9.jpg';
import image3 from '../images/imagee10.jpg';
import image4 from '../images/imagee11.jpg';
import image5 from '../images/imagee2.jpg';
import image6 from '../images/imagee1.jpg';
import image7 from '../images/imagee3.jpg';
import image8 from '../images/imagee6.jpg';
import image9 from '../images/imagee5.jpg';

export default function FourthDiv() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => setModalImage(imageUrl);

  const closeModal = () => setModalImage(null);

  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9,
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <div className="gallery-container" ref={ref}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            style={{ backgroundImage: `url(${src})` }}
            onClick={() => openModal(src)}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: index * 0.2,
            }}
          ></motion.div>
        ))}
      </div>

      {modalImage && (
        <motion.div
          className="modal"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={modalImage} alt="Full-size" />
            <button className="close-button" onClick={closeModal}>
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
