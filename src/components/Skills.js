import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  const skillsData = [
    { name: 'Frontend Development', icon: 'fab fa-html5', level: 'Advanced', description: 'HTML, CSS, JavaScript, React' },
    { name: 'Backend Development', icon: 'fab fa-node-js', level: 'Intermediate', description: 'Node.js, Express.js, REST APIs' },
    { name: 'Database Management', icon: 'fas fa-database', level: 'Intermediate', description: 'MongoDB, Database Design' },
    { name: 'Programming Languages', icon: 'fab fa-java', level: 'Advanced', description: 'Java, JavaScript, Python, C++' },
    { name: 'Cloud Fundamentals', icon: 'fab fa-microsoft', level: 'Certified', description: 'Microsoft Azure (AZ-900)' },
    { name: 'Development Tools', icon: 'fab fa-github', level: 'Intermediate', description: 'GitHub, VS Code, Git' },
    { name: 'Problem Solving', icon: 'fas fa-brain', level: 'Advanced', description: 'Algorithmic Problems, Data Structures' },
    { name: 'Full Stack Development', icon: 'fas fa-layer-group', level: 'Intermediate', description: 'MERN Stack Development' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Stagger animations for child elements
            const children = entry.target.querySelectorAll('.scroll-animate');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="parallax-bg"></div>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card card-3d scroll-animate glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-3d-inner">
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-level">{skill.level}</p>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;