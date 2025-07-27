import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import TextType from '../TextType/TextType';
import './IntroCard.css';

const IntroCard = () => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.5 });
    
    if (cardRef.current) {
      tl.fromTo(cardRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
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
    <motion.div
      ref={cardRef}
      className="intro-card"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={itemVariants} className="card-content">
        <div ref={contentRef} className="letter-content">
          <h2 ref={titleRef} className="letter-greeting">
            Hi, I'm Kshitij Mishra!
          </h2>
          
          <div className="letter-body">
            <TextType
              text={[
                "Welcome to my page",
                "I'm a full-stack developer and Computer Science student at Georgia State University, passionate about building scalable web applications and AI-powered solutions. From real-time multiplayer platforms to enterprise frameworks, I love transforming complex problems into elegant code.\n\nFun fact: I once dreamed of being a cricketer, but as you can clearly see, I'm building software now—so that didn't work out! Jokes apart, I approach development with a sportsman's mentality: always pushing to improve, learning from every iteration, and striving to build better solutions each time.\n\nCurrently seeking software engineering opportunities where I can bring my React, Python, and full-stack expertise to create impactful applications.\n\nLet's build something amazing together."
              ]}
              typingSpeed={30}
              pauseDuration={4000}
              deletingSpeed={50}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              className="typing-content"
              initialDelay={2000}
              onSentenceComplete={(text, index) => {
                // Hide cursor after completion
                setTimeout(() => {
                  const cursor = document.querySelector('.text-type__cursor');
                  if (cursor) {
                    cursor.style.display = 'none';
                  }
                }, 1000);
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroCard; 