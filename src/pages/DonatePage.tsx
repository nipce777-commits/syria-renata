import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './DonatePage.css';

const DonatePage: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const warImages = [
    {
      url: "https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg",
      title: "MINIMUM DONATION: 100,000 €",
      description: "Provides full medical treatment for 50+ severely wounded children"
    },
    {
      url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      title: "MINIMUM DONATION: 100,000 €", 
      description: "Rebuilds 20+ family homes destroyed by conflict"
    }
  ];

  const donationUrl = "https://www.paypal.com/donate?business=support@oasiscapitalfoundation.com&currency_code=EUR&amount=100000";

  return (
    <div className="donate-page">
      <div className="hero-section">
        <div className="hero-image-container">
          <img 
            src={warImages[activeImage].url}
            alt="Syrian Humanitarian Crisis"
            className="hero-image"
          />
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>OASIS CAPITAL FOUNDATION</h1>
              <h2>SYRIA RECONSTRUCTION INITIATIVE</h2>
              
              <div className="donation-minimum-card">
                <div className="minimum-label">MAJOR DONATION PROGRAM</div>
                <div className="minimum-amount">100,000 € MINIMUM</div>
                <div className="minimum-note">For large-scale humanitarian projects</div>
              </div>
              
              <p className="hero-description">
                Strategic partnership for rebuilding Syria's infrastructure and communities
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="donation-container">
        <h2 className="section-title">MAJOR HUMANITARIAN PROJECTS</h2>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">🏥</div>
            <h3>FIELD HOSPITAL COMPLEX</h3>
            <div className="project-amount">500,000 €</div>
            <ul className="project-details">
              <li>Emergency surgical units</li>
              <li>Pediatric care wing</li>
              <li>Medical supply warehouse</li>
              <li>Ambulance fleet (5 vehicles)</li>
            </ul>
          </div>
          
          <div className="project-card">
            <div className="project-icon">🏫</div>
            <h3>EDUCATION CAMPUS</h3>
            <div className="project-amount">250,000 €</div>
            <ul className="project-details">
              <li>Primary & secondary school</li>
              <li>Vocational training center</li>
              <li>Library and computer lab</li>
              <li>Sports facilities</li>
            </ul>
          </div>
          
          <div className="project-card">
            <div className="project-icon">🏠</div>
            <h3>HOUSING DEVELOPMENT</h3>
            <div className="project-amount">1,000,000 €</div>
            <ul className="project-details">
              <li>50 family apartments</li>
              <li>Community center</li>
              <li>Water purification plant</li>
              <li>Solar power system</li>
            </ul>
          </div>
        </div>

        <div className="donation-methods">
          <div className="method-section">
            <h3>WIRE TRANSFER</h3>
            <div className="bank-details-card">
              <div className="bank-row">
                <span className="bank-label">Bank:</span>
                <span className="bank-value">Swiss Humanitarian Bank AG</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">IBAN:</span>
                <span className="bank-value">CH93 0076 2011 6238 5295 7</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">SWIFT/BIC:</span>
                <span className="bank-value">UBSWCHZH80A</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">Account Name:</span>
                <span className="bank-value">Oasis Capital Foundation Syria Fund</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">Minimum Transfer:</span>
                <span className="bank-value highlight">100,000 €</span>
              </div>
            </div>
          </div>
          
          <div className="method-section">
            <h3>CRYPTOCURRENCY</h3>
            <div className="crypto-card">
              <div className="qr-container">
                <QRCode 
                  value="bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=100000&label=Syria%20Relief%20100k"
                  size={180}
                  bgColor="#000"
                  fgColor="#fff"
                  level="H"
                />
              </div>
              <div className="crypto-addresses">
                <div className="crypto-address">
                  <strong>Bitcoin (BTC):</strong>
                  <code>1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</code>
                </div>
                <div className="crypto-address">
                  <strong>Ethereum (ETH):</strong>
                  <code>0x742d35Cc6634C0532925a3b844Bc9e</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-card">
          <h3>FOR MAJOR DONATIONS & STRATEGIC PARTNERSHIPS</h3>
          <div className="contact-email">support@oasiscapitalfoundation.com</div>
          <div className="contact-note">
            Exclusively handling donations of 100,000 € and above for Syria reconstruction
          </div>
        </div>
      </div>

      <footer className="donate-footer">
        <div className="footer-content">
          <div className="footer-left">
            <h4>Oasis Capital Foundation</h4>
            <p>Large-Scale Humanitarian Reconstruction in Syria</p>
          </div>
          <div className="footer-right">
            <p>© {new Date().getFullYear()} Oasis Capital Foundation</p>
            <p>501(c)(3) Non-Profit Organization | EIN: 12-3456789</p>
            <p>Minimum Donation Requirement: 100,000 €</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonatePage;