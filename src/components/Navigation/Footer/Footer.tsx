import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Syria Renata Foundation</h3>
          <p>100% Transparent humanitarian platform</p>
          <p>Minimum Investment: €100,000</p>
        </div>
        
        <div className="footer-section">
          <h4>?? Blockchain Verification</h4>
          <div className="blockchain-info">
            <p>Every transaction verified on Ethereum</p>
            <code className="blockchain-address">
              0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7
            </code>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>?? VIP Contact</h4>
          <p>vip@syriarenata.global</p>
          <p>+41 22 123 4567 (Switzerland)</p>
          <p>24/7 Dedicated Relationship Managers</p>
        </div>
        
        <div className="footer-bottom">
          <div className="security-badges">
            <span className="badge">?? Bank-Level Security</span>
            <span className="badge">?? GDPR Compliant</span>
            <span className="badge">???? Swiss Privacy Laws</span>
          </div>
          <p>© 2024 Syria Renata Foundation • Saving Children's Lives in Syria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
