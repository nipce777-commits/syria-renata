import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/Navigation/Footer/Footer';

// Pages
import Home from './pages/Home/HeroSection';
import ProjectsGrid from './pages/Projects/ProjectsGrid';
import ImpactDashboard from './pages/Impact/ImpactDashboard';
import InvestmentPackages from './pages/Invest/InvestmentPackages';
import VIPContactForm from './pages/VIP/VIPContactForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsGrid />} />
            <Route path="/impact" element={<ImpactDashboard />} />
            <Route path="/invest" element={<InvestmentPackages />} />
            <Route path="/vip-contact" element={<VIPContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;