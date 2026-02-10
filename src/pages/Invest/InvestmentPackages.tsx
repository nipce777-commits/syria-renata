import React from 'react';
import './InvestmentPackages.css';
import { investmentPackages, InvestmentPackage } from '../../utils/constants';

const InvestmentPackages = () => {
  const handleInvestClick = (packageId: number) => {
    // Redirect to VIP contact form
    window.location.href = '/vip-contact';
  };

  return (
    <div className="investment-packages-container">
      <div className="packages-header">
        <h2 className="section-title">ELITE INVESTMENT TIERS</h2>
        <p className="section-subtitle">Minimum Investment: €100,000</p>
        <p className="section-description">
          Transform lives in Syria with verified, transparent impact.
          Every euro is blockchain-tracked in real-time.
        </p>
      </div>

      <div className="packages-grid">
        {investmentPackages.map((pkg: InvestmentPackage) => (
          <div
            key={pkg.id}
            className={`package-card ${pkg.recommended ? 'recommended' : ''}`}
          >
            {pkg.recommended && (
              <div className="recommended-badge">⭐ MOST IMPACTFUL</div>
            )}

            <div className="package-header">
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-price">{pkg.price}</div>
            </div>

            <p className="package-description">{pkg.description}</p>

            <div className="impact-statement">
              <span className="impact-icon">🎯</span>
              <span className="impact-text">{pkg.impact}</span>
            </div>

            <ul className="package-features">
              {pkg.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className="invest-button"
              onClick={() => handleInvestClick(pkg.id)}
            >
              {pkg.id === 1 ? 'Start at €100,000' : 'Invest Now'}
            </button>

            {pkg.id === 1 && (
              <div className="minimum-notice">
                Minimum Entry Level
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="transparency-guarantee">
        <h3>🔒 100% TRANSPARENCY GUARANTEE</h3>
        <div className="guarantee-grid">
          <div className="guarantee-item">
            <div className="guarantee-icon">🔗</div>
            <div className="guarantee-text">Blockchain-Verified</div>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon">📡</div>
            <div className="guarantee-text">Live GPS Tracking</div>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon">📊</div>
            <div className="guarantee-text">Real-time Dashboards</div>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon">👁️</div>
            <div className="guarantee-text">24/7 Live Camera Feeds</div>
          </div>
        </div>
      </div>

      <div className="vip-notice">
        <h4>⚡ FOR SERIOUS INVESTORS ONLY</h4>
        <p>
          All investments are handled through our VIP portal with dedicated relationship managers.
          Schedule a meeting with our CEO to discuss your legacy impact.
        </p>
        <button className="vip-contact-btn">
          📞 Contact VIP Team
        </button>
      </div>
    </div>
  );
};

export default InvestmentPackages;
