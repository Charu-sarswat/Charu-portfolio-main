import React from 'react';
import { FaLaptop, FaMobile, FaGlobe, FaRocket, FaBrain, FaGraduationCap, FaUsers } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Soulmegle",
      description: "Built a chat and video call app to connect random or known users based on shared hobbies using a vector similarity algorithm with MongoDB.",
      demoLink: "https://soulmegle.com/",
      videoLink: "https://www.loom.com/share/b1c4ae40a5e241cbbfbf0c533171ddc2",
      sourceCodeLink: "https://github.com/Charu-sarswat/Hobby-matcher",
      icon: <FaRocket />,
      color: "#FF6B6B",
      technologies: ["React", "Node.js + Express", "MongoDB", "WebRTC", "NLP", "Vector Algorithm"]
    },
    {
      id: 2,
      title: "Notelia",
      description: "Notelia is a comprehensive academic and social hub specifically designed for AKTU (Dr. A.P.J. Abdul Kalam Technical University) students and teachers.",
      demoLink: "https://www.notelia.com/",
      icon: <FaGraduationCap />,
      color: "#4ECDC4",
      technologies: ["React", "Node.js + Express", "MongoDB", "WebRTC", "Cloudflare", "Google Analytics"]
    },
    {
      id: 3,
      title: "GitHub Analyzer",
      description: "Built a tool that fetches GitHub user data and visualizes daily commits and repository statistics.",
      demoLink: "https://gitb-analyze.netlify.app/",
      videoLink: "https://www.loom.com/share/2957089a10bd484ea3c660913de2e29c?sid=eba65bd7-6da2-43f7-a178-2e6bc4763c1d",
      sourceCodeLink: "https://github.com/Charu-sarswat/Analyzer",
      icon: <FaGlobe />,
      color: "#45B7D1",
      technologies: ["React", "ShadCN", "Tailwind", "TypeScript"]
    },
    {
      id: 4,
      title: "Quiz App",
      description: "Designed a dynamic quiz application using an external API with a responsive and engaging UI/UX.",
      demoLink: "https://savitaworld.netlify.app/",
      videoLink: "https://drive.google.com/file/d/18ckkPKlgsWO8BZv6eR8Ohp0YFOE31s18/view?usp=sharing",
      sourceCodeLink: "https://github.com/Charu-sarswat/Quiz",
      icon: <FaMobile />, 
      color: "#2563eb", // blue
      technologies: ["React", "Tailwind", "JavaScript"]
    },
    {
      id: 5,
      title: "Virtual Try On",
      description: "An innovative AI-powered virtual clothing try-on platform. Users can virtually try clothes through advanced computer vision and deep learning. Built during a hackathon, featuring real-time garment simulation and seamless UI/UX.",
      demoLink: "https://drive.google.com/drive/folders/1N20iV80GPnwtWxY_yS1Rm5Aos4v_ZyPG?usp=drive_link",
      sourceCodeLink: "https://github.com/Charu-sarswat/Try-Clothes",
      icon: <FaBrain />, 
      color: "#f59e42", // orange
      technologies: ["React", "TensorFlow", "AI/ML", "Computer Vision"]
    },
    {
      id: 6,
      title: "Buyer Lead Management App",
      description: "A modern, professional Next.js application for managing real estate buyer leads with comprehensive features including authentication, CSV import/export, real-time updates, and advanced filtering.",
      demoLink: "https://buyer-app-one.vercel.app/buyers",
      icon: <FaUsers />, 
      color: "#10b981", // green
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js", "Tailwind CSS", "Zod"]
    },
    {
      id: 7,
      title: "Ecommerce Website",
      description: "Ecommerce platform for clothing with ordering and price checking features. Designed for retail shops and malls.",
      demoLink: "https://boisterous-praline-7192f1.netlify.app/",
      sourceCodeLink: "https://github.com/Charu-sarswat/Ecommerce",
      icon: <FaLaptop />, 
      color: "#f43f5e", // rose
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 8,
      title: "Zynextro Website",
      description: "Designed the official website of the Zynextro Technologies LLP.",
      demoLink: "https://www.zynextro.com/",
      icon: <FaGlobe />, 
      color: "#2563eb", // blue
      technologies: ["PHP", "Bootstrap", "MySQL"]
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
            >
              <div className="project-icon" style={{ color: project.color }}>
                {project.icon}
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag" style={{ backgroundColor: `${project.color}15`, color: project.color }}>
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
                    style={{ backgroundColor: project.color }}
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
                    style={{ backgroundColor: project.color }}
                  >
                    Video Demo
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
