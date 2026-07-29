import React from 'react';
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
              Full Stack Developer at Notelia Pvt Ltd
            </h2>
            
            <p className="hero-description">
              Full Stack Web Developer with experience at Notelia and Persist Ventures (USA). Skilled in building scalable web applications, real-time communication platforms (WebRTC), CRM/ERP systems, and vector search algorithms.
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
      </div>
    </section>
  );
};

export default Hero;