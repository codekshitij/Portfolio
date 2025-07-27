import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import LightRays from '../LightRays/LightRays';
import BlurText from '../ui/BlurText/BlurText';
import useTimeGreeting from '../../hooks/useTimeGreeting';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const timeGreeting = useTimeGreeting();
  const helloRef = useRef(null);
  const greetingRef = useRef(null);

  useEffect(() => {
    // Slower GSAP animation for the greeting text
    const tl = gsap.timeline({ delay: 1 });
    
    if (helloRef.current) {
      tl.fromTo(helloRef.current, 
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power2.out" }
      );
    }
    
    if (greetingRef.current) {
      tl.fromTo(greetingRef.current, 
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power2.out" },
        "-=1.5"
      );
    }
  }, [timeGreeting]);

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
              <h1 ref={helloRef} className="main-greeting">HELLO!</h1>
              <h2 ref={greetingRef} className="time-greeting">{timeGreeting}</h2>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="info-section">
            <div className="info-line">
              <BlurText
                text="I'm Kshitij Mishra"
                delay={100}
                stepDuration={0.4}
                overallDelay={1}
                animateBy="chars"
                direction="top"
                onAnimationComplete={handleNameAnimationComplete}
                className="name"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 