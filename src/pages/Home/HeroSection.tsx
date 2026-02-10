import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Rebuilding Syria's Future</h1>
          <p className="hero-subtitle">
            Every €100,000 investment saves 50+ children and transforms communities
          </p>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">€48.7M+</span>
              <span className="stat-label">Impact Generated</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">10,427</span>
              <span className="stat-label">Lives Saved</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Verified</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="#projects" className="hero-btn primary">
              ?? View Real Projects
            </a>
            <a href="#invest" className="hero-btn secondary">
              ?? Invest Starting at €100,000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
