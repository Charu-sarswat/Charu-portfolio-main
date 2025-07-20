import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
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
              Hello, I'm
            </p>
            
            <h1 className="hero-name">
              Charu
            </h1>
            
            <h2 className="hero-title">
              B.Tech Student & Aspiring Developer
            </h2>
            
            <p className="hero-description">
              Passionate about technology and innovation. Currently pursuing my B.Tech degree 
              with a focus on software development and emerging technologies.
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
        
        <div className="scroll-indicator">
          <div className="scroll-arrow" onClick={() => scrollToSection('#about')}>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 