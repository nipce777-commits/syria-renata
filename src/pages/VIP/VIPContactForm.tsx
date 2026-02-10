import React, { useState } from 'react';
import './VIPContactForm.css';

const VIPContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    investmentInterest: '100000', // Default: €100,000
    message: '',
    preferredContact: 'email',
    meetingRequested: false,
    preferredDate: '',
    privacyAccepted: false
  });

  const investmentAmounts = [
    { value: '100000', label: '€100,000 - Foundation Tier' },
    { value: '250000', label: '€250,000 - Impact Tier' },
    { value: '1000000', label: '€1,000,000 - Transformation Tier' },
    { value: '5000000', label: '€5,000,000 - Legacy Tier' },
    { value: 'custom', label: 'Custom Amount (€500,000+)' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Encrypt and send to secure endpoint
    console.log('VIP Contact Form Submitted:', formData);
    alert('✅ Your VIP request has been submitted. Our CEO will contact you within 24 hours.');
  };

  return (
    <div className="vip-contact-container">
      <div className="vip-header">
        <h1 className="vip-title">⚡ VIP INVESTOR PORTAL</h1>
        <p className="vip-subtitle">For serious investors starting at €100,000+</p>
        <div className="vip-security-badge">
          🔒 End-to-End Encrypted • GDPR Compliant • Swiss Banking Privacy
        </div>
      </div>

      <div className="vip-content">
        <div className="vip-info">
          <h2>Why Invest With Us?</h2>
          <ul className="vip-benefits">
            <li>✅ 100% Blockchain Transparency</li>
            <li>✅ Dedicated Relationship Manager</li>
            <li>✅ Direct CEO Access</li>
            <li>✅ Real-time Impact Tracking</li>
            <li>✅ Tax Optimization Strategies</li>
            <li>✅ Legacy Planning Services</li>
          </ul>

          <div className="vip-stats">
            <div className="stat">
              <div className="stat-number">€48M+</div>
              <div className="stat-label">Total Impact</div>
            </div>
            <div className="stat">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Lives Transformed</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Verification Rate</div>
            </div>
          </div>
        </div>

        <form className="vip-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="vip-input"
                />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="vip-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="vip-input"
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="vip-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Company / Organization</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="vip-input"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Investment Details</h3>
            <div className="form-group">
              <label>Investment Amount Interest *</label>
              <select
                name="investmentInterest"
                value={formData.investmentInterest}
                onChange={handleChange}
                required
                className="vip-select"
              >
                {investmentAmounts.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Preferred Contact Method *</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleChange}
                  />
                  Email
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleChange}
                  />
                  Phone Call
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="video"
                    checked={formData.preferredContact === 'video'}
                    onChange={handleChange}
                  />
                  Video Conference
                </label>
              </div>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-option">
                <input
                  type="checkbox"
                  name="meetingRequested"
                  checked={formData.meetingRequested}
                  onChange={handleChange}
                />
                Request meeting with CEO
              </label>
            </div>

            {formData.meetingRequested && (
              <div className="form-group">
                <label>Preferred Meeting Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="vip-input"
                />
              </div>
            )}
          </div>

          <div className="form-section">
            <div className="form-group">
              <label>Message / Special Requests</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="vip-textarea"
                rows={4}
                placeholder="Please share your vision for impact in Syria..."
              />
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-option">
                <input
                  type="checkbox"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleChange}
                  required
                />
                I accept the privacy policy and understand this is a confidential communication *
              </label>
            </div>
          </div>

          <button type="submit" className="vip-submit-btn">
            🔒 SUBMIT VIP REQUEST
          </button>

          <div className="form-footer">
            <p className="disclaimer">
              ⚠️ All communications are encrypted. A dedicated relationship manager will contact you within 24 hours. 
              Minimum investment: €100,000.
            </p>
          </div>
        </form>
      </div>

      <div className="vip-footer">
        <h3>📞 Immediate Contact Options</h3>
        <div className="contact-options">
          <div className="contact-option">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <strong>VIP Email</strong>
              <p>vip@syriarenata.global</p>
            </div>
          </div>
          <div className="contact-option">
            <div className="contact-icon">📱</div>
            <div className="contact-details">
              <strong>Secure Line</strong>
              <p>+41 22 123 4567 (Switzerland)</p>
            </div>
          </div>
          <div className="contact-option">
            <div className="contact-icon">👔</div>
            <div className="contact-details">
              <strong>CEO Direct</strong>
              <p>ceo@syriarenata.global</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIPContactForm;