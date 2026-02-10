// src/pages/HomePage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const goToDonatePage = () => {
    navigate('/donate');
  };

  return (
    <div className="App">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Oasis Capital Foundation</h1>
              <p className="hero-subtitle">Hope, Home, Education for Every Child</p>
              <p className="hero-description">
                Transforming lives of orphaned, impoverished children through 
                sustainable support for housing, education, healthcare, and 
                holistic development.
              </p>
              <div className="hero-buttons">
                <button onClick={goToDonatePage} className="btn btn-primary">Donate Now</button>
                <a href="#stories" className="btn btn-secondary">Meet Our Children</a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section id="mission" className="section mission-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Sacred Mission</h2>
              <p className="section-subtitle">Every Child Deserves a Home, Education, and Hope</p>
            </div>
            <div className="mission-content">
              <div className="mission-text">
                <h3>Why We Exist</h3>
                <p>
                  <strong>Oasis Capital Foundation</strong> was born from a simple truth: 
                  every child deserves safety, love, education, and opportunity. 
                  We focus exclusively on orphaned, abandoned, and impoverished children 
                  who have nowhere else to turn.
                </p>
                <p>
                  Our work provides not just temporary aid, but <strong>lifelong transformation</strong> 
                  through comprehensive support systems that address housing, education, 
                  healthcare, nutrition, and emotional well-being.
                </p>
                <div className="mission-quote">
                  "We don't just build houses; we build futures. We don't just provide meals; 
                  we nourish dreams. We don't just educate; we empower generations."
                </div>
              </div>
              <div className="mission-stats">
                <div className="stat">
                  <span className="stat-number">10,000+</span>
                  <span className="stat-label">Children Supported</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Orphanages & Homes Built</span>
                </div>
                <div className="stat">
                  <span className="stat-number">25,000+</span>
                  <span className="stat-label">Children in School</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5M+</span>
                  <span className="stat-label">Meals Provided Annually</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="section programs-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Life-Changing Programs</h2>
              <p className="section-subtitle">Holistic Support for Every Child's Journey</p>
            </div>
            <div className="programs-grid">
              {programs.map((program, index) => (
                <div key={index} className="program-card">
                  <div className="program-icon">{program.icon}</div>
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                  <div className="program-impact">
                    <strong>Current Impact:</strong> {program.impact}
                  </div>
                  <button onClick={goToDonatePage} className="program-link">Support This Program →</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Children's Stories */}
        <section id="stories" className="section stories-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Changed Lives, Brighter Futures</h2>
              <p className="section-subtitle">Meet the Children You're Helping</p>
            </div>
            <div className="stories-grid">
              {childrenStories.map((story, index) => (
                <div key={index} className="story-card">
                  <div className="story-image" style={{ background: story.color }}>
                    <div className="story-age">{story.age}</div>
                  </div>
                  <div className="story-content">
                    <h3 className="story-name">{story.name}</h3>
                    <div className="story-location">{story.location}</div>
                    <p className="story-bio">{story.bio}</p>
                    <div className="story-transformation">
                      <div className="before">
                        <strong>Before Oasis:</strong> {story.before}
                      </div>
                      <div className="after">
                        <strong>Now:</strong> {story.after}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urgent Needs */}
        <section id="needs" className="section needs-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Urgent Needs Right Now</h2>
              <p className="section-subtitle">Your Support Makes Immediate Impact</p>
            </div>
            <div className="needs-grid">
              {urgentNeeds.map((need, index) => (
                <div key={index} className="need-card" style={{ borderLeftColor: need.color }}>
                  <div className="need-header">
                    <span className="need-priority">PRIORITY {need.priority}</span>
                    <h3 className="need-title">{need.title}</h3>
                  </div>
                  <p className="need-description">{need.description}</p>
                  <div className="need-details">
                    <div className="need-cost">
                      <strong>Cost:</strong> {need.cost}
                    </div>
                    <div className="need-impact">
                      <strong>Children Impacted:</strong> {need.children}
                    </div>
                  </div>
                  <button onClick={goToDonatePage} className="need-btn">Fund This Need</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Help */}
        <section id="help" className="section help-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How You Can Help</h2>
              <p className="section-subtitle">Every Contribution Changes a Life</p>
            </div>
            <div className="help-options">
              <div className="help-card">
                <h3>💰 Monthly Support</h3>
                <p>Sustain a child's education, meals, and healthcare</p>
                <div className="help-amounts">
                  {['€100,000/month', '€250,000/month', '€500,000/month', '€1,000,000/month'].map((amount, idx) => (
                    <button key={idx} className="amount-btn">{amount}</button>
                  ))}
                </div>
              </div>
              
              <div className="help-card">
                <h3>🏠 Sponsor a Home</h3>
                <p>Fund housing for orphaned children</p>
                <div className="help-feature">
                  <strong>€100,000</strong> - Provides beds for 10 children
                </div>
                <div className="help-feature">
                  <strong>€250,000</strong> - Funds housing for 5 children annually
                </div>
                <div className="help-feature">
                  <strong>€1,000,000</strong> - Builds a new children's home
                </div>
              </div>
              
              <div className="help-card">
                <h3>🎓 Education Fund</h3>
                <p>Support a child's schooling from primary to university</p>
                <div className="education-levels">
                  <div className="level">
                    <span>Primary School: €100,000/year</span>
                  </div>
                  <div className="level">
                    <span>High School: €250,000/year</span>
                  </div>
                  <div className="level">
                    <span>University: €500,000/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified Donation Form on Home Page */}
        <section id="donate" className="section donate-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Ready to Make a Difference?</h2>
              <p className="section-subtitle">Click below to access our secure donation page</p>
            </div>
            <div className="donation-content">
              <div className="quick-donation-options">
                <div className="quick-amounts">
                  <button onClick={() => { setSelectedAmount(100000); goToDonatePage(); }} className="quick-amount">
                    €100,000
                  </button>
                  <button onClick={() => { setSelectedAmount(250000); goToDonatePage(); }} className="quick-amount">
                    €250,000
                  </button>
                  <button onClick={() => { setSelectedAmount(500000); goToDonatePage(); }} className="quick-amount">
                    €500,000
                  </button>
                  <button onClick={() => { setSelectedAmount(1000000); goToDonatePage(); }} className="quick-amount">
                    €1,000,000
                  </button>
                </div>
                
                <button onClick={goToDonatePage} className="btn btn-donate-large">
                  <span className="donate-icon">💝</span>
                  Go to Complete Donation Page
                  <span className="arrow">→</span>
                </button>
                
                <div className="payment-options-preview">
                  <h4>Available Payment Methods:</h4>
                  <div className="payment-methods-icons">
                    <span className="payment-icon">🏦</span>
                    <span className="payment-icon">₿</span>
                    <span className="payment-icon">💎</span>
                    <span className="payment-icon">⚡</span>
                  </div>
                  <p className="payment-methods-text">Bank Transfer • Bitcoin • USDT (TRC20/ERC20)</p>
                </div>
              </div>
              
              <div className="donation-impact-preview">
                <h3>See Your Impact Instantly</h3>
                <div className="impact-examples">
                  <div className="impact-item">
                    <div className="impact-icon">🎒</div>
                    <div className="impact-text">
                      <strong>€100,000</strong>
                      <span>School supplies for 250 children</span>
                    </div>
                  </div>
                  <div className="impact-item">
                    <div className="impact-icon">🍎</div>
                    <div className="impact-text">
                      <strong>€150,000</strong>
                      <span>Nutritious meals for a month</span>
                    </div>
                  </div>
                  <div className="impact-item">
                    <div className="impact-icon">🏥</div>
                    <div className="impact-text">
                      <strong>€200,000</strong>
                      <span>Medical check-ups for 46 children</span>
                    </div>
                  </div>
                  <div className="impact-item">
                    <div className="impact-icon">🛏️</div>
                    <div className="impact-text">
                      <strong>€500,000</strong>
                      <span>Safe bed and bedding</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Contact */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Get Involved Beyond Donations</h2>
              <p className="section-subtitle">Volunteer, Partner, Advocate</p>
            </div>
            <div className="contact-options">
              <div className="contact-card">
                <h3>🤲 Volunteer</h3>
                <p>Share your skills and time</p>
                <ul>
                  <li>Teaching and tutoring</li>
                  <li>Construction and renovation</li>
                  <li>Medical and healthcare</li>
                  <li>Administrative support</li>
                </ul>
                <button className="contact-link">Join as Volunteer</button>
              </div>
              
              <div className="contact-card">
                <h3>🤝 Corporate Partnership</h3>
                <p>Align your business with purpose</p>
                <ul>
                  <li>Employee matching programs</li>
                  <li>CSR initiatives</li>
                  <li>Sponsorship opportunities</li>
                  <li>Pro-bono services</li>
                </ul>
                <button className="contact-link">Partner With Us</button>
              </div>
              
              <div className="contact-card">
                <h3>📢 Advocate</h3>
                <p>Spread awareness and mobilize support</p>
                <ul>
                  <li>Fundraising campaigns</li>
                  <li>Social media advocacy</li>
                  <li>Community events</li>
                  <li>Educational workshops</li>
                </ul>
                <button className="contact-link">Become an Advocate</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// ==================== COMPONENTS ====================

// 1. Navigation Component
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  
  const goToDonatePage = () => {
    navigate('/donate');
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Mission', href: '#mission' },
    { label: 'Programs', href: '#programs' },
    { label: 'Stories', href: '#stories' },
    { label: 'Urgent Needs', href: '#needs' },
    { label: 'Donate', href: '#donate' },
    { label: 'Get Involved', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="#home" className="brand-logo">
            <span className="logo-icon">🏠</span>
            Oasis Capital Foundation
          </a>
        </div>
        <div className="navbar-menu">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
        <button onClick={goToDonatePage} className="btn-donate-nav">Donate Now</button>
        <button className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

// 2. FAQ Section Component
const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'Is 100% of my donation dedicated to children?',
      answer: 'Yes, 100% of every donation goes directly to children\'s programs. Administrative costs are covered by corporate donations and special funds.'
    },
    {
      question: 'How can I verify where my donation went?',
      answer: 'Every 6 months we send you a detailed report with photos, videos, and quantitative indicators. You can track your donation on our transparency portal.'
    },
    {
      question: 'Can I dedicate my donation to a specific child?',
      answer: 'Yes, we offer a "Child Sponsorship" program where you can follow the growth and success of the child you help, with regular communication.'
    },
    {
      question: 'What are the tax benefits for donations?',
      answer: 'In most countries, donations to 501(c)(3) foundations like ours are tax deductible. We provide an official receipt for tax purposes.'
    },
    {
      question: 'Do you accept cryptocurrency donations?',
      answer: 'Yes, we accept Bitcoin, Ethereum, USDT and many other cryptocurrencies. Crypto donations offer full transparency and low transfer fees.'
    },
    {
      question: 'How long does it take for donations to reach children?',
      answer: 'Urgent donations reach within 24 hours through our emergency programs. Regular donations are distributed weekly for our ongoing programs.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions (FAQ)</h2>
          <p className="section-subtitle">Important information for our donors</p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3. Gallery Section Component
const GallerySection: React.FC = () => {
  const photos = [
    { id: 1, title: 'New School', category: 'Education', color: '#0a5c36' },
    { id: 2, title: 'Children\'s Home', category: 'Housing', color: '#2b6cb0' },
    { id: 3, title: 'Nutritious Food', category: 'Nutrition', color: '#ff6b6b' },
    { id: 4, title: 'Medical Check-up', category: 'Healthcare', color: '#ffa726' },
    { id: 5, title: 'Professional Training', category: 'Training', color: '#805ad5' },
    { id: 6, title: 'Daily Activities', category: 'Activities', color: '#1a936f' },
    { id: 7, title: 'Community Celebrations', category: 'Community', color: '#e53e3e' },
    { id: 8, title: 'Graduation Success', category: 'Graduation', color: '#0a5c36' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Education', 'Housing', 'Nutrition', 'Healthcare', 'Training', 'Activities', 'Community', 'Graduation'];

  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">See your impact on children\'s lives</p>
        </div>
        
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="gallery-item">
              <div 
                className="photo-placeholder"
                style={{ background: `linear-gradient(135deg, ${photo.color} 0%, ${photo.color}99 100%)` }}
              >
                <div className="photo-overlay">
                  <h3>{photo.title}</h3>
                  <span className="photo-category">{photo.category}</span>
                </div>
                <div className="photo-icon">📸</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Footer Component
const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const goToDonatePage = () => {
    navigate('/donate');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="logo-icon">🏠</span>
              Oasis Capital Foundation
            </h3>
            <p className="footer-description">
              Providing homes, education, and hope to orphaned, abandoned, 
              and impoverished children worldwide. Every child deserves a 
              safe home and a bright future.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <a href="#mission" className="footer-link">Our Mission</a>
            <a href="#programs" className="footer-link">Programs</a>
            <a href="#stories" className="footer-link">Success Stories</a>
            <button onClick={goToDonatePage} className="footer-link">Donate</button>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Financials</h4>
            <button className="footer-link">Annual Reports</button>
            <button className="footer-link">Financial Statements</button>
            <button className="footer-link">Transparency</button>
            <button className="footer-link">Impact Metrics</button>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="contact-info">
              <p>📍 Global Headquarters</p>
              <p>📧 children@oasiscapital.foundation</p>
              <p>📞 +1 (800) CHILD-HOPE</p>
              <p>🕒 24/7 Emergency Line</p>
            </div>
            <div className="newsletter">
              <p>Subscribe for updates</p>
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Oasis Capital Foundation. 
            Registered 501(c)(3) Charity. EIN: 12-3456789
          </p>
          <p className="footer-transparency">
            ⭐ 100% Transparency | 💯 Every Dollar to Children | 🔒 Secure Donations
          </p>
        </div>
      </div>
    </footer>
  );
};

// ==================== DATA ====================

// Programs Data
const programs = [
  {
    icon: '🏠',
    title: 'Safe Homes Program',
    description: 'Building and maintaining secure, loving homes for orphaned and abandoned children',
    impact: '150+ homes established, 2,500+ children sheltered'
  },
  {
    icon: '🎓',
    title: 'Education Initiative',
    description: 'Full scholarships, school supplies, tutoring, and vocational training',
    impact: '5,000+ children in school, 250+ university students'
  },
  {
    icon: '🍎',
    title: 'Nutrition & Healthcare',
    description: 'Daily nutritious meals, medical check-ups, and mental health support',
    impact: '1M+ meals served annually, 10,000+ medical visits'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Reunification',
    description: 'Supporting vulnerable families to stay together through crisis',
    impact: '500+ families reunited, preventing separation'
  },
  {
    icon: '🛠️',
    title: 'Life Skills & Training',
    description: 'Vocational training, job placement, and independent living skills',
    impact: '750+ youth trained, 300+ employed'
  },
  {
    icon: '🚨',
    title: 'Emergency Response',
    description: 'Immediate aid for children in crisis situations and disasters',
    impact: '24/7 emergency services, rapid deployment teams'
  }
];

// Children Stories Data
const childrenStories = [
  {
    name: 'Amina, 8 years',
    age: '8',
    location: 'Syria → Safe Home Lebanon',
    bio: 'Found alone after conflict, severely malnourished',
    before: 'Living in ruins, no family, no school',
    after: 'Thriving in 3rd grade, loves art and dreams of being a doctor',
    color: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)'
  },
  {
    name: 'Samuel, 14 years',
    age: '14',
    location: 'Kenya → Oasis Boarding School',
    bio: 'Orphaned by HIV/AIDS, caring for younger siblings',
    before: 'Forced to beg, siblings starving',
    after: 'Top of his class, all siblings in school together',
    color: 'linear-gradient(135deg, #0a5c36 0%, #1a936f 100%)'
  },
  {
    name: 'Layla, 6 years',
    age: '6',
    location: 'Afghanistan → Girls Education Program',
    bio: 'Girls education banned in her village',
    before: 'Hidden at home, denied basic rights',
    after: 'First girl from her village to read and write',
    color: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)'
  },
  {
    name: 'Maria, 12 years',
    age: '12',
    location: 'Romania → Education Program',
    bio: 'Orphaned, living with elderly grandmother',
    before: 'No access to school, forced to work',
    after: 'Top student in mathematics, dreams of engineering',
    color: 'linear-gradient(135deg, #805ad5 0%, #6b46c1 100%)'
  },
  {
    name: 'David, 16 years',
    age: '16',
    location: 'Uganda → Vocational Training',
    bio: 'Street child for 5 years, no family',
    before: 'Surviving on streets, no education',
    after: 'Learning carpentry, building his future',
    color: 'linear-gradient(135deg, #0a5c36 0%, #1a936f 100%)'
  },
  {
    name: 'Sofia, 9 years',
    age: '9',
    location: 'Ukraine → Emergency Shelter',
    bio: 'Displaced by conflict, separated from family',
    before: 'Living in basement, traumatized',
    after: 'In safe shelter, receiving therapy and education',
    color: 'linear-gradient(135deg, #2b6cb0 0%, #3182ce 100%)'
  }
];

// Urgent Needs Data
const urgentNeeds = [
  {
    priority: '1',
    title: 'Winter Shelter Expansion',
    description: 'Emergency beds for 200 children facing winter without shelter',
    cost: '€500,000',
    children: '200 children',
    color: '#ff6b6b'
  },
  {
    priority: '2',
    title: 'Malnutrition Emergency Kit',
    description: 'Therapeutic food for severely malnourished children',
    cost: '€250,000',
    children: '500 children',
    color: '#ffa726'
  },
  {
    priority: '3',
    title: 'School Year Supplies',
    description: 'Books, uniforms, and supplies for new school year',
    cost: '€350,000',
    children: '1,000 children',
    color: '#0a5c36'
  },
  {
    priority: '4',
    title: 'Medical Emergency Fund',
    description: 'Life-saving surgeries and critical treatments',
    cost: '€750,000',
    children: '50 children',
    color: '#2b6cb0'
  }
];

export default HomePage;