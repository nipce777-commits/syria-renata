import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Syria Renata</h3>
            <p>Building a better future through sustainable investments</p>
          </div>
          
          <div className="footer-section">
            <h4>{t('contact')}</h4>
            <p>Email: info@syrilarenata.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Syria Renata. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;