import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [counters, setCounters] = useState({ experience: 0, projects: 0, technologies: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const aboutRef = useRef(null);

  const targetValues = {
    experience: 1,
    projects: 2,
    technologies: 8
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate counters
          const animateCounter = (key, target) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCounters(prev => ({ ...prev, [key]: target }));
                clearInterval(timer);
              } else {
                setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
              }
            }, 30);
          };

          Object.keys(targetValues).forEach(key => {
            animateCounter(key, targetValues[key]);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <div className="about-highlight">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="about-paragraph">
                I'm a <span className="highlight">B.Tech CSE (FSD)</span> student at KR Mangalam University passionate about building tech that solves real-world problems. 
                I've worked on projects using <span className="highlight">HTML, CSS, JavaScript, React, Node.js, MongoDB</span> and I'm eager to grow in software development.
              </p>
              <p className="about-paragraph">
                I enjoy learning new technologies, collaborating on teams, and applying my skills in internships or real-world challenges. 
                As an aspiring <span className="highlight">Software Engineer</span> with strong skills in full stack development and cloud fundamentals, I'm experienced in 
                building real-world <span className="highlight">MERN projects</span>, developing <span className="highlight">REST APIs</span>, and solving algorithmic problems.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3 className="stat-number">{counters.experience}+</h3>
                <p className="stat-label">Years Experience</p>
                <div className="stat-glow"></div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h3 className="stat-number">{counters.projects}+</h3>
                <p className="stat-label">Projects Completed</p>
                <div className="stat-glow"></div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="stat-number">{counters.technologies}+</h3>
                <p className="stat-label">Technologies</p>
                <div className="stat-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;