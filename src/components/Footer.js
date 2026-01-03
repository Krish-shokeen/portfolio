import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/krishshokeen', label: 'LinkedIn' },
    { icon: 'fab fa-github', href: 'https://github.com/krish-shokeen', label: 'GitHub' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/krish_shokeen_27', label: 'Instagram' },
    { icon: 'fas fa-coffee', href: 'https://buymeacoffee.com/krish_shokeen', label: 'Buy Me a Coffee' },
    { icon: 'fas fa-envelope', href: 'mailto:krishshokeen55@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Krish Shokeen</h3>
            <p>B.Tech CSE Student | Aspiring Full Stack Developer</p>
            <p>Building innovative solutions with modern technologies</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Krish Shokeen. All rights reserved.</p>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="footer-social-link" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

