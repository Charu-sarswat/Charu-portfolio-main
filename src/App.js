import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App; 