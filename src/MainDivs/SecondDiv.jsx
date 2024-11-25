import React from 'react';
import './SecondDiv.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

export default function SecondDiv() {
  const { t } = useTranslation();

  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className='second-container'>
        <div className="second-content">
            <div className="second-left" ref={leftRef}>
                <motion.h1
                    className='h1second-main'
                    initial={{ opacity: 0, y: 50 }}
                    animate={leftInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {t('weldingTitle')}
                </motion.h1>
                <div className="second-left-bottom">
                    <motion.span
                        className='span1'
                        initial={{ opacity: 0, x: -30 }}
                        animate={leftInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 1 }}
                    ></motion.span>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={leftInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        {t('weldingText')}
                    </motion.p>
                    <div className='second-left-bottom-2'>
                        <motion.span
                            className='span2'
                            initial={{ opacity: 0, x: 30 }}
                            animate={leftInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1, delay: 1.5 }}
                        ></motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={leftInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.7 }}
                        >
                            {t('outputProductTitle')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={leftInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            {t('outputProductText')}
                        </motion.p>
                    </div>
                </div>
            </div>
            <motion.div
                ref={rightRef}
                initial={{ opacity: 0, y: 20 }}
                animate={rightInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 2.1 }} 
                className="second-right"
            ></motion.div>
        </div>
    </div>
  );
}
