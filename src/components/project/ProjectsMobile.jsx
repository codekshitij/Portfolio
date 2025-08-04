import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectsMobile.css';

const projects = [
  {
    id: 0,
    name: "ARIT - AI Research Impact System",
    shortName: "ARIT",
    description: "AI-powered research impact prediction system processing 200K+ ArXiv papers with citation network analysis using Graph Neural Networks and TensorFlow. Features comprehensive data processing pipeline and temporal-aware analysis system with analytics dashboard.",
    technologies: ["Python", "TensorFlow", "GNN", "ArXiv API", "Analytics", "Dashboard"],
    image: "🔬",
    status: "Active",
    year: "2025",
    link: "https://github.com/codekshitij/ARIT",
    liveLink: "https://arit-demo.com"
  },
  {
    id: 1,
    name: "F1 Fantasy League Platform",
    shortName: "F1 Fantasy",
    description: "Full-stack fantasy sports platform with FastAPI backend, PostgreSQL database, and JWT authentication integrated with Firebase Auth. Built real-time race scoring system using Ergast API integration and created budget-based team management with comprehensive leaderboard functionality.",
    technologies: ["FastAPI", "React", "PostgreSQL", "JWT", "Firebase", "Ergast API"],
    image: "🏎️",
    status: "Complete",
    year: "2024-2025",
    link: "https://github.com/codekshitij/f1-fantasy-frontend",
    liveLink: "https://f1-dream5.vercel.app/"
  },
  {
    id: 2,
    name: "Stats Pandit - Sports Quiz Platform",
    shortName: "Stats Pandit",
    description: "Comprehensive sports trivia application with React + Vite frontend and Firebase backend supporting 5 sports categories with real-time multiplayer quiz system. Built anonymous and Google OAuth authentication with user profile management and responsive UI design.",
    technologies: ["React", "Firebase", "Vite", "Real-time", "Multiplayer", "OAuth"],
    image: "⚽",
    status: "Active",
    year: "2024-Present",
    link: "https://github.com/codekshitij/StatsPandit",
    liveLink: "https://statspandit.netlify.app/"
  },
  {
    id: 3,
    name: "CRUX - Enterprise Dashboard Framework",
    shortName: "CRUX",
    description: "Architected modern React application framework with feature-based folder structure, comprehensive layout system with protected routing middleware. Built modular component architecture supporting Dashboard, Calendar, OKRs modules with responsive CSS Grid-based layout.",
    technologies: ["React", "React Router", "CSS Grid", "Modular Architecture", "Enterprise", "Framework"],
    image: "📊",
    status: "Active",
    year: "2024-Present",
    link: "https://github.com/codekshitij/Veridian",
    liveLink: "https://veridian-eight.vercel.app/"
  },
  {
    id: 4,
    name: "Portfolio Website",
    shortName: "Portfolio",
    description: "Modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark/light theme toggle, and optimized performance with lazy loading. Built with React, Framer Motion, and GSAP for premium user experience.",
    technologies: ["React", "Framer Motion", "GSAP", "CSS3", "Responsive Design", "Performance"],
    image: "🎨",
    status: "Live",
    year: "2024",
    link: "https://github.com/codekshitij/Portfolio",
    liveLink: "https://kmishra.me"
  }
];

const ProjectsMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -swipeThreshold && currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="projects-mobile">
      <div className="projects-mobile-container">
        {/* Header */}
        <motion.div 
          className="projects-mobile-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="projects-mobile-title">Featured Projects</h2>
          <div className="projects-mobile-line"></div>
          <p className="projects-mobile-subtitle">
            Swipe to explore my latest work
          </p>
        </motion.div>

        {/* Swipeable Cards Container */}
        <div className="cards-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="project-card-mobile"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card Header */}
              <div className="card-header">
                <div className="project-icon-container">
                  <span className="project-icon">{projects[currentIndex].image}</span>
                </div>
                <div className="project-info">
                  <h3 className="project-name">{projects[currentIndex].name}</h3>
                  <div className="project-meta">
                    <span className="project-year">{projects[currentIndex].year}</span>
                    <span className={`project-status ${projects[currentIndex].status.toLowerCase()}`}>
                      <span className="status-dot"></span>
                      {projects[currentIndex].status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <p className="project-description">
                  {projects[currentIndex].description}
                </p>

                {/* Tech Stack */}
                <div className="tech-stack-section">
                  <h4 className="tech-stack-title">Tech Stack</h4>
                  <div className="tech-stack-grid">
                    {projects[currentIndex].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="tech-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="card-actions">
                  <motion.a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>📋</span>
                    View Code
                  </motion.a>
                  <motion.a
                    href={projects[currentIndex].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>🚀</span>
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="navigation-dots">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="navigation-arrows">
          <motion.button
            className="nav-arrow prev"
            onClick={prevProject}
            disabled={currentIndex === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          <motion.button
            className="nav-arrow next"
            onClick={nextProject}
            disabled={currentIndex === projects.length - 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </div>

        {/* Project Counter */}
        <div className="project-counter">
          {currentIndex + 1} / {projects.length}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMobile; 