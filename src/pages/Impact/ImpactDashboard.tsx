import React, { useState, useEffect } from 'react';
import './ImpactDashboard.css';

const ImpactDashboard: React.FC = () => {
  const [realTimeStats, setRealTimeStats] = useState({
    livesImpacted: 10427,
    schoolsBuilt: 8,
    hospitalsOperational: 3,
    familiesSupported: 2456,
    mealsProvided: 1254890,
    cleanWaterAccess: 12500
  });

  const [donationsToday, setDonationsToday] = useState([
    { donor: 'Bill & Melinda Gates Foundation', amount: 2500000, date: 'Today' },
    { donor: 'Sheik Mohammed bin Rashid', amount: 1000000, date: 'Today' },
    { donor: 'Anonymous (Swiss Bank)', amount: 500000, date: 'Today' }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeStats(prev => ({
        ...prev,
        livesImpacted: prev.livesImpacted + Math.floor(Math.random() * 10),
        mealsProvided: prev.mealsProvided + Math.floor(Math.random() * 100)
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const impactMetrics = [
    { 
      icon: '👨‍👩‍👧‍👦', 
      label: 'Lives Impacted', 
      value: realTimeStats.livesImpacted.toLocaleString(),
      color: '#4CAF50'
    },
    { 
      icon: '🏫', 
      label: 'Schools Built', 
      value: realTimeStats.schoolsBuilt,
      color: '#2196F3'
    },
    { 
      icon: '🏥', 
      label: 'Hospitals Operational', 
      value: realTimeStats.hospitalsOperational,
      color: '#FF5252'
    },
    { 
      icon: '🏠', 
      label: 'Families Supported', 
      value: realTimeStats.familiesSupported.toLocaleString(),
      color: '#FF9800'
    },
    { 
      icon: '🍲', 
      label: 'Meals Provided', 
      value: realTimeStats.mealsProvided.toLocaleString(),
      color: '#9C27B0'
    },
    { 
      icon: '💧', 
      label: 'Clean Water Access (Liters)', 
      value: realTimeStats.cleanWaterAccess.toLocaleString(),
      color: '#00BCD4'
    }
  ];

  return (
    <div className="impact-dashboard">
      <div className="dashboard-header">
        <h1>📈 REAL-TIME IMPACT DASHBOARD</h1>
        <p className="dashboard-subtitle">Live tracking of every euro invested in Syria</p>
        <div className="live-badge">
          <span className="live-dot"></span> LIVE UPDATING EVERY 5 SECONDS
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stats-summary">
          <div className="summary-card total-impact">
            <h3>TOTAL IMPACT</h3>
            <div className="summary-value">€48,750,000</div>
            <div className="summary-label">Since 2023</div>
          </div>
          <div className="summary-card active-projects">
            <h3>ACTIVE PROJECTS</h3>
            <div className="summary-value">12</div>
            <div className="summary-label">Across Syria</div>
          </div>
          <div className="summary-card donor-count">
            <h3>ELITE DONORS</h3>
            <div className="summary-value">47</div>
            <div className="summary-label">€100,000+ Investments</div>
          </div>
          <div className="summary-card verification-rate">
            <h3>VERIFICATION RATE</h3>
            <div className="summary-value">100%</div>
            <div className="summary-label">Blockchain Confirmed</div>
          </div>
        </div>

        <div className="real-time-metrics">
          <h2>🔄 Real-Time Impact Metrics</h2>
          <div className="metrics-grid">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div 
                  className="metric-icon"
                  style={{ backgroundColor: metric.color }}
                >
                  {metric.icon}
                </div>
                <div className="metric-content">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
                <div className="metric-trend">
                  ↗️ <span className="trend-text">Live</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-sections">
          <div className="section recent-donations">
            <h3>💰 Recent Major Donations</h3>
            <div className="donations-list">
              {donationsToday.map((donation, index) => (
                <div key={index} className="donation-item">
                  <div className="donor-info">
                    <div className="donor-name">{donation.donor}</div>
                    <div className="donation-date">{donation.date}</div>
                  </div>
                  <div className="donation-amount">
                    €{donation.amount.toLocaleString()}
                  </div>
                  <div className="donation-status">
                    <span className="status-badge confirmed">✅ Confirmed</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="view-all-btn">View All 47 Donors →</button>
          </div>

          <div className="section geographic-impact">
            <h3>🌍 Geographic Impact</h3>
            <div className="regions-list">
              <div className="region-item">
                <span className="region-name">Aleppo</span>
                <div className="region-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '85%' }}></div>
                  </div>
                  <span className="progress-text">85% rebuilt</span>
                </div>
              </div>
              <div className="region-item">
                <span className="region-name">Damascus</span>
                <div className="region-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '92%' }}></div>
                  </div>
                  <span className="progress-text">92% operational</span>
                </div>
              </div>
              <div className="region-item">
                <span className="region-name">Idlib</span>
                <div className="region-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '45%' }}></div>
                  </div>
                  <span className="progress-text">45% supported</span>
                </div>
              </div>
              <div className="region-item">
                <span className="region-name">Homs</span>
                <div className="region-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '78%' }}></div>
                  </div>
                  <span className="progress-text">78% recovered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blockchain-section">
          <h3>🔗 Blockchain Verification</h3>
          <div className="blockchain-info">
            <div className="blockchain-item">
              <div className="blockchain-label">Network:</div>
              <div className="blockchain-value">Ethereum Mainnet</div>
            </div>
            <div className="blockchain-item">
              <div className="blockchain-label">Total Transactions:</div>
              <div className="blockchain-value">1,247 verified</div>
            </div>
            <div className="blockchain-item">
              <div className="blockchain-label">Last Verification:</div>
              <div className="blockchain-value">2 minutes ago</div>
            </div>
            <div className="blockchain-item">
              <div className="blockchain-label">Smart Contract:</div>
              <div className="blockchain-value">
                <code>0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7</code>
              </div>
            </div>
          </div>
          <button className="verify-btn">🔍 Verify on Etherscan</button>
        </div>

        <div className="cta-section">
          <h2>Ready to Create Your Impact?</h2>
          <p>Join our elite group of 47 donors transforming Syria.</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">💰 Invest Starting at €100,000</button>
            <button className="cta-btn secondary">📞 Schedule CEO Meeting</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;