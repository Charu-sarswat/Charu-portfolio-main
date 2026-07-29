import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaJava, FaDatabase, FaCode, FaLaptop, FaTools, FaBrain
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCplusplus, SiGithub, SiVisualstudiocode, SiTypescript } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const languages = [
    { name: 'HTML', icon: <FaHtml5 />, level: 90, color: '#10b981' },
    { name: 'CSS', icon: <FaCss3Alt />, level: 85, color: '#00ff87' },
    { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#22c55e' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#34d399' },
    { name: 'React', icon: <FaReact />, level: 85, color: '#059669' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: '#10b981' },
    { name: 'Express', icon: <SiExpress />, level: 80, color: '#00ff87' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 75, color: '#22c55e' },
    { name: 'SQL', icon: <FaDatabase />, level: 75, color: '#34d399' },
    { name: 'Java', icon: <FaJava />, level: 70, color: '#059669' },
    { name: 'Python (Basic)', icon: <FaPython />, level: 60, color: '#10b981' },
    { name: 'C++ (Basic)', icon: <SiCplusplus />, level: 60, color: '#00ff87' }
  ];

  const tools = [
    { name: 'VS Code', icon: <SiVisualstudiocode />, level: 90, color: '#10b981' },
    { name: 'GitHub', icon: <SiGithub />, level: 85, color: '#00ff87' },
    { name: 'Cursor', icon: <FaCode />, level: 85, color: '#22c55e' },
    { name: 'CodeSpace', icon: <FaLaptop />, level: 75, color: '#34d399' },
    { name: 'Windsurf', icon: <FaTools />, level: 75, color: '#059669' },
    { name: 'Copilot', icon: <FaBrain />, level: 80, color: '#10b981' },
    { name: 'ChatGPT', icon: <FaBrain />, level: 85, color: '#00ff87' },
    { name: 'GorkAI', icon: <FaBrain />, level: 75, color: '#22c55e' },
    { name: 'Loveable', icon: <FaTools />, level: 70, color: '#34d399' }
  ];

  const coreSkills = [
    'Data Structures & Algorithms (DSA)',
    'Object-Oriented Programming (OOPs)',
    'Operating Systems',
    'DBMS',
    'Computer Networks',
    'Scalable System Design',
    'Full-Stack Development',
    'API Development',
    'Database Design',
    'Real-time Systems'
  ];

  const SkillCard = ({ skill, index }) => (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="skill-icon" style={{ color: skill.color }}>
        {skill.icon}
      </div>
      <div className="skill-info">
        <h4>{skill.name}</h4>
        <div className="skill-bar">
          <div 
            className="skill-progress" 
            style={{ 
              width: `${skill.level}%`,
              background: `linear-gradient(135deg, ${skill.color} 0%, #059669 100%)`
            }}
          ></div>
        </div>
        <span className="skill-level">{skill.level}%</span>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">My technical skills and competencies</p>
        </motion.div>

        <div className="skills-content">
          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Languages & Frameworks</h3>
            <div className="skills-grid">
              {languages.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Development Tools & AI Platforms</h3>
            <div className="skills-grid">
              {tools.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="core-skills-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Core CS Competencies</h3>
            <div className="core-skills-grid">
              {coreSkills.map((skill, index) => (
                <motion.div 
                  key={skill} 
                  className="core-skill-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;