import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DonatePage from './pages/DonatePage';
import './App.css'; // VETËM KËTU - MOS SHTO TJERA

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          {/* Mos harro rrugët e tjera nëse ke */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;