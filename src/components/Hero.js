import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "Hello, I'm Krish Shokeen";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - 100; // Simple fixed offset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background Elements */}
      <div className="morphing-shape morphing-shape-1"></div>
      <div className="morphing-shape morphing-shape-2"></div>
      <div className="morphing-shape morphing-shape-3"></div>
      
      {/* Interactive Particles */}
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Mouse-following gradient */}
      <div 
        className="mouse-gradient"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1), transparent 40%)`
        }}
      ></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="typing-text">{displayText}</span>
        </h1>
        <p className="hero-subtitle scroll-animate">B.Tech CSE Student | Aspiring Full Stack Developer</p>
        <div className="hero-buttons scroll-animate">
          <button 
            className="btn btn-primary glow-effect" 
            onClick={() => scrollToSection('projects')}
          >
            <span>View My Work</span>
            <div className="btn-particles"></div>
          </button>
          <button 
            className="btn btn-secondary glow-effect" 
            onClick={() => scrollToSection('contact')}
          >
            <span>Get In Touch</span>
            <div className="btn-particles"></div>
          </button>
        </div>
      </div>
      
      <div className="hero-image">
        <div className="profile-circle floating">
          <img src="/profile.png" alt="Krish Shokeen" className="profile-img" />
          <div className="profile-glow"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-icon" style={{ top: '20%', left: '15%', animationDelay: '0s' }}>
          <i className="fab fa-react"></i>
        </div>
        <div className="floating-icon" style={{ top: '60%', right: '20%', animationDelay: '2s' }}>
          <i className="fab fa-node-js"></i>
        </div>
        <div className="floating-icon" style={{ bottom: '30%', left: '10%', animationDelay: '4s' }}>
          <i className="fab fa-js-square"></i>
        </div>
        <div className="floating-icon" style={{ top: '40%', right: '10%', animationDelay: '6s' }}>
          <i className="fas fa-database"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;