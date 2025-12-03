import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <h1>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              THE ROYAL GROUP
            </Link>
          </h1>
        </div>
        <button className="menu-toggle" id="menuToggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/divisions" onClick={closeMenu}>
              Divisions
            </Link>
          </li>
          <li>
            <a href="/#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
