import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
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
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
      },
    },
  };

  const frontendSkills = ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind", "Vite"];
  const backendSkills = ["Python", "FastAPI", "Node.js", "Express", "PostgreSQL", "MongoDB"];
  const toolsSkills = ["Git", "AWS", "Firebase", "Docker", "TensorFlow", "Figma"];

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Terrace",
      period: "May 2025 – Aug 2025",
      location: "Remote",
      points: [
        "Integrated QuickBooks API with React Native platform for agricultural businesses",
        "Designed comprehensive API system with modular plugin architecture",
        "Implemented role-based access control system",
        "Developed HARVEST page interface with enhanced inventory management"
      ]
    },
    {
      title: "Software Developer Intern", 
      company: "Department of Physics GSU",
      period: "Aug 2023 – Aug 2024",
      location: "Atlanta, Georgia",
      points: [
        "Built data processing pipeline for NASA satellite data into structured CSV files",
        "Developed backend API using Expo and Next.js for real-time solar flare analysis",
        "Created multi-satellite data stream visualization system"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Niyo Solutions Inc.",
      period: "May 2023 – Aug 2023", 
      location: "Remote",
      points: [
        "Contributed to React-based web application development",
        "Engineered user authentication system using AWS services",
        "Built user preference feature enabling personalized experiences"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="intro">
      <div className="intro-container">
        <motion.div
          className="intro-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="intro-header" variants={cardVariants}>
            <h2 ref={titleRef} className="intro-title">
              About Me
            </h2>
            <div className="intro-line"></div>
          </motion.div>

          {/* About Me Section */}
          <motion.div className="about-section" variants={cardVariants}>
            <div className="about-card">
              <div ref={contentRef} className="about-text">
                <p>
                  I'm actively seeking software engineering opportunities where I can apply my passion for full-stack development 
                  and problem-solving. With hands-on experience in React, Python, and AI technologies, I'm looking to join a team 
                  where I can contribute to building innovative solutions while continuing to grow as a developer. I thrive in 
                  collaborative environments and am excited to tackle complex challenges that make a real impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="two-column-grid">
            
            {/* Education Card */}
            <motion.div variants={cardVariants}>
              <div className="education-card">
                <h3 className="section-title">Education</h3>
                <div className="education-content">
                  <h4 className="university-name">Georgia State University</h4>
                  <p className="degree-title">Bachelor of Science in Computer Science, Data Science</p>
                  <p className="education-period">Aug 2022 – May 2026</p>
                  <div className="gpa-section">
                    <span className="gpa-value">3.9</span>
                    <span className="gpa-total">/ 4.00 GPA</span>
                  </div>
                  <p className="education-description">
                    Focusing on software engineering, algorithms, data science, and web development. 
                    Maintaining strong academic performance while building practical projects and gaining industry experience.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hobbies Card */}
            <motion.div variants={cardVariants}>
              <div className="hobbies-card">
                <h3 className="section-title">Hobbies & Interests</h3>
                
                <div className="hobbies-grid">
                  <motion.div 
                    className="hobby-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="hobby-icon">🏏</span>
                    <span className="hobby-text">Cricket</span>
                  </motion.div>
                  
                  <motion.div 
                    className="hobby-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="hobby-icon">💻</span>
                    <span className="hobby-text">Coding</span>
                  </motion.div>
                  
                  <motion.div 
                    className="hobby-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="hobby-icon">🎮</span>
                    <span className="hobby-text">Gaming</span>
                  </motion.div>
                  
                  <motion.div 
                    className="hobby-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="hobby-icon">📚</span>
                    <span className="hobby-text">Reading</span>
                  </motion.div>
                  
                  <motion.div 
                    className="hobby-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="hobby-icon">🎵</span>
                    <span className="hobby-text">Music</span>
                  </motion.div>
                  
                  <motion.div 
                    className="hobby-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="hobby-icon">✈️</span>
                    <span className="hobby-text">Travel</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section - Full Width */}
          <motion.div variants={cardVariants}>
            <div className="skills-card">
              <h3 className="section-title">Skills</h3>
              
              <div className="skills-three-columns">
                {/* Frontend Column */}
                <motion.div 
                  className="skill-column"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="skill-column-header">
                    <div className="skill-icon frontend-icon">🎨</div>
                    <h4 className="category-title frontend">Frontend</h4>
                  </div>
                  <div className="skill-column-tags">
                    {frontendSkills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="skill-tag-vertical frontend"
                        whileHover={{ scale: 1.05, x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Backend Column */}
                <motion.div 
                  className="skill-column"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="skill-column-header">
                    <div className="skill-icon backend-icon">⚙️</div>
                    <h4 className="category-title backend">Backend</h4>
                  </div>
                  <div className="skill-column-tags">
                    {backendSkills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="skill-tag-vertical backend"
                        whileHover={{ scale: 1.05, x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Tools & Others Column */}
                <motion.div 
                  className="skill-column"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="skill-column-header">
                    <div className="skill-icon tools-icon">🛠️</div>
                    <h4 className="category-title tools">Tools & Others</h4>
                  </div>
                  <div className="skill-column-tags">
                    {toolsSkills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="skill-tag-vertical tools"
                        whileHover={{ scale: 1.05, x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={cardVariants}>
            <div className="experience-section">
              <div className="experience-card">
                <h3 className="section-title">Experience</h3>
                
                <div className="experience-timeline">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="experience-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="experience-header">
                        <div>
                          <h4 className="job-title">{exp.title}</h4>
                          <p className="company-name">{exp.company}</p>
                          <p className="job-location">{exp.location}</p>
                        </div>
                        <span className="job-period">{exp.period}</span>
                      </div>
                      
                      <ul className="experience-points">
                        {exp.points.map((point, pointIndex) => (
                          <li key={pointIndex}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;