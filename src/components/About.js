import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
import './About.css';

const About = () => {
  const personalInfo = [
    { icon: <FaUser />, label: 'Name', value: 'Charu' },
    { icon: <FaGraduationCap />, label: 'Degree', value: 'B.Tech in Computer Science' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Ghaziabad, India' },
    { icon: <FaCalendarAlt />, label: 'Graduation', value: '2026 (Expected)' }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'Raj Kumar Goel Institute of Technology, Ghaziabad',
      year: 'Nov 2022 – May 2026',
      description: 'Current CGPA: 8.7',
      highlights: ['Data Structures & Algorithms', 'Web Development', 'Database Management', 'Software Engineering']
    },
    {
      degree: 'Class XII',
      field: 'Science',
      institution: 'Sarswati Inter College, Hathras',
      year: 'July 2020 - April 2021',
      description: 'Percentage: 82%',
      highlights: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science']
    },
    {
      degree: 'Class X',
      field: 'General',
      institution: 'RC Girls Inter College, Hathras',
      year: 'July 2018 - April 2019',
      description: 'Percentage: 88%',
      highlights: ['Science', 'Mathematics', 'English', 'Social Studies']
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate developer with a drive for innovation and excellence</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              A passionate B.Tech student with 8.7 CGPA, specializing in full-stack development and machine learning. 
              I create innovative solutions and contribute to open-source projects.
            </p>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="personal-info">
              <h3>Personal Information</h3>
              <div className="info-grid">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="info-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Education Journey</h3>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="education-content">
                  <div className="education-header">
                    <h4>{edu.degree}</h4>
                    <span className="education-badge">{edu.description}</span>
                  </div>
                  <p className="education-field">{edu.field}</p>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-year">{edu.year}</p>
                  <div className="education-highlights">
                    <h5>Key Focus Areas:</h5>
                    <div className="highlights-grid">
                      {edu.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">{highlight}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 