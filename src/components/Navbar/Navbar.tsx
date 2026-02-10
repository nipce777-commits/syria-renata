// src/components/Navbar/Navbar.tsx
import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'projects', label: 'Projects' },
    { id: 'invest', label: 'Investments' },
    { id: 'transparency', label: 'Transparency' },
    { id: 'impact', label: 'Impact' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="logo-link"
          >
            Syria Renata
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id} className="navbar-item">
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="nav-link"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Optional) */}
        <button className="mobile-menu-btn" aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

// KY ËSHTË EKSPORTI QË MUNGON - SHTOJE KËTË RRESHT
export default Navbar;