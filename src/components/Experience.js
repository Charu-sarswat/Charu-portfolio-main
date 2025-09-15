import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCertificate, FaCog, FaCode, FaBuilding, FaMedal, FaAward, FaLightbulb } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 3,
      type: 'leadership',
      title: 'Chief Technical Officer & Co-founder(Soulmegle)',
      company: 'Persist Venture (USA)',
      duration: 'February 2025 - August 2025 [Full time]',
      description: 'Full-Stack web developer (Persist Ventures) serving as Chief Technical Officer and co-founder of the (Soulmegle Project).',
      technologies: ['Full-Stack Development', 'Leadership', 'Business Strategy', 'Web Development'],
      achievements: [
        'Co-founded technology startup',
        'Leading technical strategy and development',
        'Managing full-stack web development projects'
      ],
      certificate: 'https://drive.google.com/file/d/1KzDPH28T7MrrnlTuGnb7UhhkYujAfMI5/view?usp=drive_link',
      recommendation: 'https://drive.google.com/file/d/1QBQuPMv1FXF2Ox_9r6Mn3phMHoPjNi4q/view?usp=drive_link',
      color: '#F59E0B'
    },
    {
      id: 1,
      type: 'internship',
      title: 'Embedded System Developer',
      company: 'Emertex (Bangalore)',
      duration: 'January 2025 – March 2025',
      description: 'Built an SDLC-based real-time embedded system project using core C programming concepts.',
      technologies: ['C Programming', 'Embedded Systems', 'SDLC', 'Real-time Systems'],
      achievements: [
        'Developed real-time embedded system project',
        'Applied SDLC methodology in development',
        'Utilized core C programming concepts'
      ],
      certificate: 'https://drive.google.com/file/d/1bbBlJYDww7-9_xzL7FR6ayGdUH0o1wWy/view?usp=sharing',
      color: '#4F46E5'
    },
    {
      id: 2,
      type: 'internship',
      title: 'Full-Stack Developer Intern',
      company: 'SmartInternz',
      duration: 'January 2025 – March 2025',
      description: 'Developed a real-time social media app as a full-stack developer using MongoDB, React, Node.js, and Express.',
      technologies: ['MongoDB', 'React', 'Node.js', 'Express', 'Full-Stack Development'],
      achievements: [
        'Built real-time social media application',
        'Implemented full-stack development solutions',
        'Used modern web technologies stack'
      ],
      certificate: 'https://f90xpzjw.r.ap-south-1.awstrack.me/L0/https:%2F%2Fskillwallet.smartinternz.com%2Fcertificate%2Fvirtual-internship%2Fe29b722e35040b88678e25a1ec032a21/2/01090195eff0a44f-0abe7e24-802c-4d94-9967-c51b2ced9652-000000/9uNJxvlIBmB52mqlQy4pYiNjqws=200',
      color: '#10B981'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Patent Published',
      description: 'Published a Patent on "Accident Control System"',
      year: 'April 2024',
      icon: <FaLightbulb />,
      color: '#FFD700'
    },
    {
      id: 2,
      title: 'International AI Hackathon Winner',
      description: 'Won International AI Software Hackathon (USA)',
      year: '2024',
      icon: <FaTrophy />,
      color: '#FF6B6B'
    },
    {
      id: 3,
      title: 'Silver Medal - Science Exhibition',
      description: 'Silver Medal at Jawaharlal Nehru Science Exhibition and Project Competition',
      year: '2024',
      icon: <FaMedal />,
      color: '#C0C0C0'
    },
    {
      id: 4,
      title: 'Digital India Debate Champion',
      description: 'Rank 1 in District and Rank 2 in Zone in the "Digital India" Debate Competition',
      year: '2024',
      icon: <FaAward />,
      color: '#4ECDC4'
    },
    {
      id: 5,
      title: 'National Talent Search Qualified',
      description: 'National Talent Search (NTS) Qualified',
      year: '2018',
      icon: <FaCertificate />,
      color: '#45B7D1'
    },
    {
      id: 6,
      title: 'Embedded Systems Certification',
      description: 'Completed embedded system development training at Emertex',
      year: '2025',
      icon: <FaCog />,
      color: '#96CEB4'
    },
    {
      id: 7,
      title: 'SmartInternz Certification',
      description: 'Full-stack development internship certification',
      year: '2025',
      icon: <FaCode />,
      color: '#FFEAA7'
    },
    {
      id: 8,
      title: 'Startup Leadership',
      description: 'Co-founder and CTO at Persist Venture',
      year: '2025',
      icon: <FaBuilding />,
      color: '#DDA0DD'
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'internship':
        return <FaBriefcase />;
      case 'leadership':
        return <FaBuilding />;
      case 'project':
        return <FaGraduationCap />;
      case 'academic':
        return <FaGraduationCap />;
      default:
        return <FaBriefcase />;
    }
  };

  const ExperienceCard = ({ experience, index }) => (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="experience-header">
        <div className="experience-icon" style={{ color: experience.color }}>
          {getIcon(experience.type)}
        </div>
        <div className="experience-info">
          <h3>{experience.title}</h3>
          <p className="company">{experience.company}</p>
          <p className="duration">{experience.duration}</p>
        </div>
      </div>
      
      <div className="experience-content">
        <p className="description">{experience.description}</p>
        
        <div className="technologies">
          <h4>Technologies Used:</h4>
          <div className="tech-tags">
            {experience.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="achievements">
          <h4>Key Achievements:</h4>
          <ul>
            {experience.achievements.map((achievement, achievementIndex) => (
              <li key={achievementIndex}>{achievement}</li>
            ))}
          </ul>
        </div>

        {(experience.certificate || experience.recommendation) && (
          <div className="certificate-link">
            {experience.certificate && (
              <a 
                href={experience.certificate} 
                target="_blank" 
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                <FaCertificate />
                View Certificate
              </a>
            )}
            {experience.recommendation && (
              <a 
                href={experience.recommendation} 
                target="_blank" 
                rel="noopener noreferrer"
                className="certificate-btn"
                style={{ marginLeft: experience.certificate ? '1rem' : '0' }}
              >
                <FaCertificate />
                View Recommendation
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );

  const AchievementCard = ({ achievement, index }) => (
    <motion.div
      className="achievement-card"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="achievement-icon" style={{ color: achievement.color, borderColor: achievement.color }}>
        {achievement.icon}
      </div>
      <div className="achievement-content">
        <h4>{achievement.title}</h4>
        <p>{achievement.description}</p>
        <span 
          className="achievement-year" 
          style={{ 
            background: `linear-gradient(135deg, ${achievement.color} 0%, ${achievement.color}80 100%)`,
            boxShadow: `0 4px 15px ${achievement.color}40`
          }}
        >
          {achievement.year}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience & Achievements</h2>
          <p className="section-subtitle">My professional journey and accomplishments</p>
        </motion.div>

        <div className="experience-content">
          <motion.div
            className="experience-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Work Experience</h3>
            <div className="experience-timeline">
              {experiences.map((experience, index) => (
                <ExperienceCard key={experience.id} experience={experience} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="achievements-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Achievements & Certifications</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <AchievementCard key={achievement.id} achievement={achievement} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 