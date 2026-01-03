import React, { useState, useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: 'B.Tech in Computer Science (FSD)',
      institution: 'K.R. Mangalam University, Gurugram',
      duration: '2024 - 2028',
      cgpa: '8.1 CGPA',
      icon: 'fas fa-graduation-cap'
    },
    {
      degree: 'CBSE Class XII',
      institution: 'RAO MAN SINGH SSS, Najafgarh',
      duration: '2024',
      cgpa: '75.4%',
      icon: 'fas fa-school'
    },
    {
      degree: 'CBSE Class X',
      institution: 'RAO MAN SINGH SSS, Najafgarh',
      duration: '2022',
      cgpa: '76.2%',
      icon: 'fas fa-school'
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      icon: 'fab fa-microsoft'
    },
    {
      name: 'IT Fundamentals',
      issuer: 'Udemy',
      icon: 'fas fa-certificate'
    }
  ];

  const activities = [
    'Participated in Hackathons at KR Mangalam University, Gurugram',
    'Participated in Hackathon at VGU Jaipur'
  ];

  return (
    <section id="education" className="education" ref={educationRef}>
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-content">
          <div className="education-timeline">
            <h3 className="subsection-title">Academic Background</h3>
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className={`timeline-item ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-icon">
                  <i className={edu.icon}></i>
                </div>
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                  <div className="timeline-meta">
                    <span className="duration">{edu.duration}</span>
                    <span className="grade">{edu.cgpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-section">
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`cert-card ${isVisible ? 'fade-in-up' : ''}`}
                  style={{ animationDelay: `${(index + 3) * 0.2}s` }}
                >
                  <div className="cert-icon">
                    <i className={cert.icon}></i>
                  </div>
                  <div className="cert-content">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="activities-section">
              <h3 className="subsection-title">Activities</h3>
              <ul className="activities-list">
                {activities.map((activity, index) => (
                  <li 
                    key={index}
                    className={`activity-item ${isVisible ? 'fade-in-up' : ''}`}
                    style={{ animationDelay: `${(index + 5) * 0.2}s` }}
                  >
                    <i className="fas fa-trophy"></i>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;