import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{t('welcome')}</h1>
        <p>Building sustainable investments for a brighter future in Syria</p>
        <button className="hero-button">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;