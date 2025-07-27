import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import GridDistortion from '../GridDistortion/GridDistortion';
import './Intro.css';

const Intro = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="intro">
      <div className="grid-distortion-background">
        <GridDistortion
          imageSrc="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
          grid={20}
          mouse={0.15}
          strength={0.3}
          relaxation={0.8}
          className="intro-distortion"
        />
      </div>
      <div className="intro-container">
        <motion.div
          className="intro-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="intro-header">
            <h2 ref={titleRef} className="intro-title">
              About Me
            </h2>
            <div className="intro-line"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="intro-text-section">
            <div ref={contentRef} className="intro-text">
              <p>
                I'm a passionate Full Stack Developer with a love for creating 
                beautiful, functional, and user-centered digital experiences. 
                With expertise in modern web technologies, I bring ideas to life 
                through clean code and innovative solutions.
              </p>
              
              <p>
                My journey in web development started with curiosity and has evolved 
                into a passion for building applications that not only work flawlessly 
                but also provide exceptional user experiences. I believe in writing 
                code that's not just functional, but also maintainable and scalable.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="intro-stats">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro; 