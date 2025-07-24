import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-bg-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">
              Hello, I'm <span className="hero-fullname">Charu Sarswat</span>
            </p>
            
            <h2 className="hero-title">
              Full Stack Developer, CTO & Co-founder Persist Venture(USA)
            </h2>
            
            <p className="hero-description">
              Building the future of social connection as CTO & co-founder of Soulmegle. Expert in scalable web apps, passionate about tech, startups, and turning ideas into reality.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('#projects')}
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
        
        <div className="hero-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="mailto:charu@example.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero; 