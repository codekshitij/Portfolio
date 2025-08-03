import React, { useEffect, useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import './ThankYou.css';

const ThankYou = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowConfetti(true);
          // Stop confetti after 5 seconds
          setTimeout(() => setShowConfetti(false), 5000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="thank-you-section" ref={sectionRef}>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          colors={['#3b82f6', '#2563eb', '#1d4ed8', '#10b981', '#8b5cf6', '#f59e0b']}
        />
      )}
      <div className="thank-you-container">
        <motion.div
          className="thank-you-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="thank-you-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Thank You!
          </motion.h1>
          
          <motion.p
            className="thank-you-message"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            Thanks for exploring my portfolio!
          </motion.p>
          
          <motion.div
            className="thank-you-emoji"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: isVisible ? 1 : 0, rotate: isVisible ? 0 : -180 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
          >
            🎉
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou; 