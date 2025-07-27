import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Resume',
      url: 'https://drive.google.com/file/d/1KjO0lq4hqCswAH8nFUV1xejvY55kBSHb/view?usp=sharing',
      icon: '/assets/resume.svg',
      isButton: false
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kshitij27/',
      icon: '/assets/LI-In-Bug.png',
      isButton: false
    },
    {
      name: 'GitHub',
      url: 'https://github.com/codekshitij',
      icon: '/assets/github-mark-white.png',
      isButton: false
    }
  ];

  return (
    <motion.nav
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="logo-icon">KM</div>
          <span className="logo-text">Kshitij</span>
        </motion.div>

        <div className="nav-links">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`nav-link ${item.isButton ? 'nav-button' : ''}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={item.icon} alt={item.name} className="nav-icon" />
              <span className="nav-text">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 