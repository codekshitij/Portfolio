import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardSwap, { Card } from '../CardSwap/CardSwap';
import './project.css';

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
    link: "https://github.com/codekshitij/arit",
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
    link: "https://github.com/codekshitij/f1-fantasy",
    liveLink: "https://f1-fantasy-demo.com"
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
    link: "https://github.com/codekshitij/stats-pandit",
    liveLink: "https://stats-pandit.com"
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
    link: "https://github.com/codekshitij/crux-dashboard",
    liveLink: "https://crux-demo.com"
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
    link: "https://github.com/codekshitij/portfolio",
    liveLink: "https://kshitijmishra.dev"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCardChange = (index) => {
    setActiveTab(index);
  };

  const handleCardClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="browser-tab-projects">
      <div className="projects-container">
        {/* Header */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="projects-title">Featured Projects</h2>
          <div className="projects-line"></div>
          <p className="projects-subtitle">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        <div className="projects-main-layout">
          {/* Left Side - Project Details */}
          <motion.div 
            className="project-details-section"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="project-details-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="project-header-section">
                  <div className="project-icon-large">{projects[activeTab].image}</div>
                  <div className="project-title-info">
                    <h3 className="project-title-large">{projects[activeTab].name}</h3>
                    <div className="project-meta-info">
                      <span className="project-year">{projects[activeTab].year}</span>
                      <span className={`project-status ${projects[activeTab].status.toLowerCase()}`}>
                        <span className="status-dot"></span>
                        {projects[activeTab].status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="project-description-detailed">
                  {projects[activeTab].description}
                </p>

                <div className="project-tech-section">
                  <h4>Technologies & Features</h4>
                  <div className="tech-grid-showcase">
                    {projects[activeTab].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="tech-item-showcase"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * index, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="project-actions-section">
                  <motion.a
                    href={projects[activeTab].link}
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
                    href={projects[activeTab].liveLink}
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

                <div className="project-navigation">
                  <button 
                    onClick={() => setActiveTab((prev) => (prev - 1 + projects.length) % projects.length)}
                    className="nav-button"
                  >
                    ← Previous
                  </button>
                  <div className="project-counter">
                    {activeTab + 1} / {projects.length}
                  </div>
                  <button 
                    onClick={() => setActiveTab((prev) => (prev + 1) % projects.length)}
                    className="nav-button"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Side - CardSwap with Browser Tab Cards */}
          <motion.div 
            className="browser-cards-section"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div style={{ height: '800px', position: 'relative' }}>
              <CardSwap
                width={700}
                height={600}
                cardDistance={80}
                verticalDistance={90}
                delay={8000} // Increased to 8 seconds
                pauseOnHover={true}
                onCardChange={handleCardChange}
                onCardClick={handleCardClick}
              >
                {projects.map((project, index) => (
                  <Card key={project.id} className="browser-project-card">
                    {/* Browser Tab Header */}
                    <div className="browser-tab-header">
                      <div className="tab-controls">
                        <span className="tab-dot close"></span>
                        <span className="tab-dot minimize"></span>
                        <span className="tab-dot expand"></span>
                      </div>
                      <div className="tab-title-bar">
                        <span className="tab-icon">{project.image}</span>
                        <span className="tab-title">{project.shortName}</span>
                        <span className={`tab-status ${project.status.toLowerCase()}`}>
                          <span className="status-indicator"></span>
                        </span>
                      </div>
                    </div>

                    {/* Browser Content Area */}
                    <div className="browser-content">
                      <div className="browser-url-bar">
                        <div className="url-controls">
                          <span className="url-icon">🔒</span>
                          <span className="url-text">{project.liveLink}</span>
                        </div>
                      </div>

                      <div className="browser-page-content">
                        <div className="page-header">
                          <div className="page-icon">{project.image}</div>
                          <h4 className="page-title">{project.shortName}</h4>
                        </div>

                        <div className="page-details">
                          <div className="detail-item">
                            <span className="detail-label">Status:</span>
                            <span className={`detail-value ${project.status.toLowerCase()}`}>
                              {project.status}
                            </span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Year:</span>
                            <span className="detail-value">{project.year}</span>
                          </div>
                        </div>

                        <div className="page-tech-stack">
                          {project.technologies.slice(0, 4).map(tech => (
                            <span key={tech} className="tech-chip">{tech}</span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="tech-more">+{project.technologies.length - 4}</span>
                          )}
                        </div>

                        <div className="page-actions">
                          <a href={project.link} target="_blank" rel="noopener noreferrer" 
                             onClick={(e) => e.stopPropagation()} className="page-action-btn">
                            Code
                          </a>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                             onClick={(e) => e.stopPropagation()} className="page-action-btn">
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;