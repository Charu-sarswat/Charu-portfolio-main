import React from 'react';
import { FaGlobe, FaRocket, FaGraduationCap, FaBalanceScale, FaCogs, FaTshirt, FaPills } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CRM System",
      description: "Developed a web-based CRM (Customer Relationship Management) system to help businesses manage customers, leads, sales, and daily operations efficiently.",
      videoLink: "https://drive.google.com/file/d/1GX9aqT5gCOM9sjMMoLKabJHnL5AV2qB6/view",
      image: process.env.PUBLIC_URL + "/c.png",
      icon: <FaCogs />,
      color: "#10b981",
      technologies: ["React", "Node.js + Express", "SQL"]
    },
    {
      id: 2,
      title: "Legal Olympiad",
      description: "Designed a dynamic application using an external API with a responsive and engaging UI/UX for Legal Olympiad.",
      demoLink: "https://app.legalolympiad.com/signin",
      image: process.env.PUBLIC_URL + "/le.png",
      icon: <FaBalanceScale />,
      color: "#34d399",
      technologies: ["React", "Tailwind CSS", "JavaScript", "REST APIs"]
    },
    {
      id: 3,
      title: "Notelia",
      description: "Notelia is a comprehensive academic and social hub specifically designed for AKTU (Dr. A.P.J. Abdul Kalam Technical University) students and teachers.",
      demoLink: "https://www.notelia.com/",
      image: process.env.PUBLIC_URL + "/mokeup.png",
      icon: <FaGraduationCap />,
      color: "#22c55e",
      technologies: ["React", "Node.js + Express", "MongoDB", "WebRTC", "Cloudflare", "Google Analytics"]
    },
    {
      id: 4,
      title: "The Orchid Laundry",
      description: "Designed and developed a modern, responsive web platform for premium laundry and dry cleaning services featuring online service booking and pricing.",
      demoLink: "https://theorchidlaundry.com/",
      image: process.env.PUBLIC_URL + "/l.png",
      icon: <FaTshirt />,
      color: "#059669",
      technologies: ["React", "JavaScript", "Tailwind CSS", "UI/UX Design"]
    },
    {
      id: 5,
      title: "Ashirwad Pharma",
      description: "Designed and developed a responsive web platform for pharmaceutical and healthcare services, showcasing medical product catalogs and services.",
      demoLink: "https://ashirwad-fama.netlify.app/",
      image: process.env.PUBLIC_URL + "/as.png",
      icon: <FaPills />, 
      color: "#10b981",
      technologies: ["React", "JavaScript", "Tailwind CSS", "UI/UX Design"]
    },
    {
      id: 6,
      title: "Soulmegle",
      description: "Built a chat and video call app to connect random or known users based on shared hobbies using a vector similarity algorithm with MongoDB.",
      videoLink: "https://www.loom.com/share/b1c4ae40a5e241cbbfbf0c533171ddc2",
      image: process.env.PUBLIC_URL + "/s.png",
      icon: <FaRocket />,
      color: "#00ff87",
      technologies: ["React", "Node.js + Express", "MongoDB", "WebRTC", "NLP", "Vector Algorithm"]
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my key projects and achievements</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
            >
              {project.image ? (
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-card-image" />
                </div>
              ) : (
                <div className="project-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
              )}
              
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                  >
                    Live Demo
                  </a>
                )}
                {project.videoLink && (
                  <a 
                    href={project.videoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link video-link"
                  >
                    Video Demo
                  </a>
                )}
                {project.sourceCodeLink && (
                  <a 
                    href={project.sourceCodeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link source-link"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
