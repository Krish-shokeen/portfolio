import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science (FSD)',
      institution: 'K.R. Mangalam University, Gurugram',
      duration: '2024 - 2028',
      cgpa: '8.27 CGPA'
    },
    {
      degree: 'CBSE Class XII',
      institution: 'RAO MAN SINGH SSS, Najafgarh',
      duration: '2024',
      cgpa: '75.4%'
    },
    {
      degree: 'CBSE Class X',
      institution: 'RAO MAN SINGH SSS, Najafgarh',
      duration: '2022',
      cgpa: '76.2%'
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
    "Dean’s Honor Award – Semester 3",
    "Hack KRMU Hackathon (2024)",
    "ACIC VGU Designathon (2024)",
    "Tech Fusion 3.0 Hackathon (2026)",
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Achievements</h2>
        
        <div className="education-content">
          <div className="education-timeline">
            <h3 className="subsection-title">Academic Background</h3>
            {educationData.map((edu, index) => (
              <div key={index} className="timeline-item">
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
                <div key={index} className="cert-card">
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
                  <li key={index} className="activity-item">
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