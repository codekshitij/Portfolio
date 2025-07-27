import React from 'react';
import { motion } from 'framer-motion';
import LightRays from '../LightRays/LightRays';
import BlurText from '../ui/BlurText/BlurText';
import useTimeGreeting from '../../hooks/useTimeGreeting';
import IntroCard from '../IntroCard/IntroCard';
import './Hero.css';

const Hero = () => {
  const timeGreeting = useTimeGreeting();



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleNameAnimationComplete = () => {
    console.log('Name animation completed!');
  };

  return (
    <section className="hero">
      <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      
      <div className="hero-content">
        <motion.div
          className="welcome-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="greeting-section">
            <div className="greeting-line">
              <div className="main-greeting">
                {"HELLO!".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.5 + (index * 0.2)
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="time-greeting">
                {timeGreeting.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 1 + (index * 0.2)
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="info-section">
            <IntroCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 