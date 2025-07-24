import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: <FaHome style={{marginRight: '0.5em'}} /> },
    { name: 'About', href: '#about', icon: <FaUser style={{marginRight: '0.5em'}} /> },
    { name: 'Skills', href: '#skills', icon: <FaCode style={{marginRight: '0.5em'}} /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram style={{marginRight: '0.5em'}} /> },
    { name: 'Experience', href: '#experience', icon: <FaBriefcase style={{marginRight: '0.5em'}} /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope style={{marginRight: '0.5em'}} /> }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home">Portfolio</a>
          </motion.div>

          <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.icon}{item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 