import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaJava, FaDatabase, FaGitAlt, FaDocker, FaAws, FaFigma,
  FaCode, FaLaptop, FaTools, FaBrain
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiRedux, SiTypescript, SiPhp, SiWordpress, SiCplusplus, SiGithub, SiVisualstudiocode } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const languages = [
    { name: 'HTML', icon: <FaHtml5 />, level: 90, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, level: 85, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, level: 80, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 75, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, level: 75, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 70, color: '#47A248' },
    { name: 'SQL', icon: <FaDatabase />, level: 70, color: '#4479A1' },
    { name: 'Java', icon: <FaJava />, level: 70, color: '#ED8B00' },
    { name: 'Python', icon: <FaPython />, level: 60, color: '#3776AB' },
    { name: 'C++', icon: <SiCplusplus />, level: 55, color: '#00599C' },
    { name: 'PHP', icon: <SiPhp />, level: 65, color: '#777BB4' },
    { name: 'WordPress', icon: <SiWordpress />, level: 60, color: '#21759B' }
  ];

  const tools = [
    { name: 'VS Code', icon: <SiVisualstudiocode />, level: 90, color: '#007ACC' },
    { name: 'GitHub', icon: <SiGithub />, level: 85, color: '#181717' },
    { name: 'Cursor', icon: <FaCode />, level: 80, color: '#00D4AA' },
    { name: 'CodeSpace', icon: <FaLaptop />, level: 75, color: '#6366F1' },
    { name: 'Windsurf', icon: <FaTools />, level: 70, color: '#EC4899' },
    { name: 'Copilot', icon: <FaBrain />, level: 80, color: '#10A37F' },
    { name: 'ChatGPT', icon: <FaBrain />, level: 85, color: '#FF6B6B' },
    { name: 'GorkAI', icon: <FaBrain />, level: 70, color: '#8B5CF6' },
    { name: 'Loveable', icon: <FaTools />, level: 65, color: '#F59E0B' }
  ];

  const coreSkills = [
    'Data Structures',
    'Algorithms',
    'Problem Solving',
    'Web Development',
    'Full-Stack Development',
    'API Development',
    'Database Design',
    'Version Control',
    'Responsive Design',
    'UI/UX Design'
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
              background: `linear-gradient(135deg, ${skill.color} 0%, ${skill.color}80 100%)`
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
            <h3>Programming Languages & Technologies</h3>
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
            <h3>Development Tools & AI</h3>
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
            <h3>Core Skills & Expertise</h3>
            <div className="core-skills-grid">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="core-skill-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
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