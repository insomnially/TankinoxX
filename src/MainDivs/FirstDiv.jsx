import './FirstDiv.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import '../HeaderAndMain/HeaderAndMain.css'

export default function FirstDiv() {
  const { ref: containerRef1, inView: inView1 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: containerRef2, inView: inView2 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 100,
      smooth: true,
    });
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="imagep" data-scroll-ignore>
        <span className="red1"></span>
        {t('highQualityTitle')}
      </div>
      <motion.div
        className="image"
        ref={imageRef}
        initial={{ opacity: 0 }}
        animate={imageInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="containerfirst"
        id="containerStart"
        ref={containerRef1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="first"
          initial={{ opacity: 0, x: -30 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {t('brandTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {t('brandText')}
          </motion.p>
        </motion.div>
        <motion.div
          className="imagefirst"
          initial={{ opacity: 0, x: 30 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        ></motion.div>
      </motion.div>

      <motion.div
        className="containersecond"
        ref={containerRef2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="imagesecond"
          initial={{ opacity: 0, x: -30 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="second"
          initial={{ opacity: 0, x: 30 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {t('weldingTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {t('weldingText')}
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}
