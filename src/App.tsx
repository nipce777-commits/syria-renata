import React from 'react';
import './App.css';

// Import components
import ProjectsGrid from './pages/Projects/ProjectsGrid';
import ImpactDashboard from './pages/Impact/ImpactDashboard';
import VIPContactForm from './pages/VIP/VIPContactForm';
import InvestmentPackages from './pages/Invest/InvestmentPackages';
import Footer from './components/Navigation/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>?? SYRIA RENATA FOUNDATION</h1>
        <p className="subtitle">100% Transparent Platform for Syrian Children</p>
        <div className="blockchain-badge">
          ?? Every Euro Verified on Ethereum Blockchain
        </div>
        
        <nav className="main-nav">
          <a href="#projects">?? Projects</a>
          <a href="#impact">?? Impact</a>
          <a href="#invest">?? Invest (€100k+)</a>
          <a href="#vip">?? VIP Contact</a>
        </nav>
      </header>
      
      <main className="app-main">
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">€48.7M+</div>
            <div className="stat-label">Total Impact</div>
          </div>
          <div className="stat">
            <div className="stat-number">10,427</div>
            <div className="stat-label">Lives Saved</div>
          </div>
          <div className="stat">
            <div className="stat-number">47</div>
            <div className="stat-label">Elite Donors</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Verified</div>
          </div>
        </div>
        
        <section id="projects">
          <ProjectsGrid />
        </section>
        
        <section id="impact">
          <ImpactDashboard />
        </section>
        
        <section id="invest">
          <InvestmentPackages />
        </section>
        
        <section id="vip">
          <VIPContactForm />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
