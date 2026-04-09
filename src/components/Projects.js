import React, { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projectsData = [
    {
      title: 'GreenCart',
      description: 'An e-commerce grocery platform with cart system, product listing, and backend APIs. Features OTP-based authentication and secure login for enhanced user experience.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      github: 'https://github.com/Krish-shokeen/GreenCart',
      demo: 'https://greencart-1-s3ka.onrender.com/',
      icon: 'fas fa-shopping-cart',
      status: 'Completed'
    },
    {
      title: 'SkyVault',
      description: 'A simplified cloud file storage system similar to Google Drive. Users can upload, download, view, and delete files securely through a web interface with user authentication and cloud storage integration.',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'AWS S3'],
      github: '',
      demo: 'https://sky-vault-three.vercel.app/',
      icon: 'fas fa-cloud-upload-alt',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card scroll-animate">
              <div className="project-card-inner">
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <i className={project.icon}></i>
                  <div className="project-shine"></div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        <span className="tech-tag-text">{tech}</span>
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                        <span>GitHub</span>
                      </a>
                    )}
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
                <div className="project-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;