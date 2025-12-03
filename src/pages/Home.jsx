import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import Gallery from '../components/Gallery'
import heroVideo from '../assets/videos/hero.mp4'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="hero hero-video">
        <video autoPlay muted loop className="hero-video-bg">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Building Excellence</h2>
          <p>Quality Construction, Premium Signage & Custom Metalwork</p>
          <a href="#contact" className="cta-button">
            Get Started
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="services-overview">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-building"></i>
              <h3>Construction</h3>
              <p>
                Expert construction management for residential, commercial, and retail projects with proven track record
                of excellence.
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-sign"></i>
              <h3>Signage</h3>
              <p>
                Custom sign design and manufacturing with 40+ years of expertise in creating impactful visual solutions.
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-hammer"></i>
              <h3>Custom Metals</h3>
              <p>High-quality custom metalwork and architectural elements tailored to your project specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About The Royal Group</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Philosophy</h3>
              <p>
                We believe that every interaction matters. From our clients to our team members, vendors, and the
                communities we serve—everything we do reflects our commitment to excellence and integrity.
              </p>
              <p>
                Founded on principles of respect, courtesy, and professionalism, we deliver projects on time, on spec,
                and on budget. Our values drive us to exceed expectations in every engagement.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h4>40+</h4>
                <p>Years of Experience</p>
              </div>
              <div className="stat">
                <h4>1000+</h4>
                <p>Installation Partners</p>
              </div>
              <div className="stat">
                <h4>30+</h4>
                <p>Year Client Relationships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section id="divisions" className="divisions">
        <div className="container">
          <h2>Our Divisions</h2>
          <div className="divisions-grid">
            {/* Royal Sign Systems */}
            <div className="division-card">
              <div className="division-header">
                <i className="fas fa-lightbulb"></i>
                <h3>Royal Sign Systems</h3>
              </div>
              <p className="division-tagline">Established 1993 | "It's More Than Signs"</p>
              <ul className="division-services">
                <li>
                  <i className="fas fa-check"></i> Custom Sign Design & Manufacturing
                </li>
                <li>
                  <i className="fas fa-check"></i> Site Assessment & Surveying
                </li>
                <li>
                  <i className="fas fa-check"></i> 2D/3D Design & Permitting
                </li>
                <li>
                  <i className="fas fa-check"></i> In-House Fabrication
                </li>
                <li>
                  <i className="fas fa-check"></i> Professional Installation
                </li>
                <li>
                  <i className="fas fa-check"></i> Warranty & Maintenance
                </li>
              </ul>
              <Link to="/divisions/rss" className="learn-more">
                Learn More
              </Link>
            </div>

            {/* Royal Construction Group */}
            <div className="division-card">
              <div className="division-header">
                <i className="fas fa-helmet-safety"></i>
                <h3>Royal Construction Group</h3>
              </div>
              <p className="division-tagline">Leaders in Quality Construction & Design-Build</p>
              <ul className="division-services">
                <li>
                  <i className="fas fa-check"></i> Residential Projects
                </li>
                <li>
                  <i className="fas fa-check"></i> Commercial Construction
                </li>
                <li>
                  <i className="fas fa-check"></i> Retail Development
                </li>
                <li>
                  <i className="fas fa-check"></i> Pre-Construction Planning
                </li>
                <li>
                  <i className="fas fa-check"></i> Construction Management
                </li>
                <li>
                  <i className="fas fa-check"></i> Architectural Modeling
                </li>
              </ul>
              <Link to="/divisions/rcg" className="learn-more">
                Learn More
              </Link>
            </div>

            {/* Royal Custom Metals */}
            <div className="division-card">
              <div className="division-header">
                <i className="fas fa-welding-torch"></i>
                <h3>Royal Custom Metals</h3>
              </div>
              <p className="division-tagline">Premium Metalwork & Architectural Elements</p>
              <ul className="division-services">
                <li>
                  <i className="fas fa-check"></i> Custom Metal Fabrication
                </li>
                <li>
                  <i className="fas fa-check"></i> Architectural Elements
                </li>
                <li>
                  <i className="fas fa-check"></i> Welded Components
                </li>
                <li>
                  <i className="fas fa-check"></i> Structural Steel Work
                </li>
                <li>
                  <i className="fas fa-check"></i> Design Consultation
                </li>
                <li>
                  <i className="fas fa-check"></i> Installation Services
                </li>
              </ul>
              <Link to="/divisions/rcm" className="learn-more">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid-2x3">
            <div className="value-item">
              <i className="fas fa-heart"></i>
              <h4>Integrity</h4>
              <p>Honest, transparent dealings in every project</p>
            </div>
            <div className="value-item">
              <i className="fas fa-star"></i>
              <h4>Excellence</h4>
              <p>Quality that exceeds industry standards</p>
            </div>
            <div className="value-item">
              <i className="fas fa-users"></i>
              <h4>Team Spirit</h4>
              <p>Collaborative approach with clients and partners</p>
            </div>
            <div className="value-item">
              <i className="fas fa-leaf"></i>
              <h4>Sustainability</h4>
              <p>Environmentally responsible practices</p>
            </div>
            <div className="value-item">
              <i className="fas fa-shield-alt"></i>
              <h4>Safety</h4>
              <p>Highest safety standards on all projects</p>
            </div>
            <div className="value-item">
              <i className="fas fa-lightbulb"></i>
              <h4>Innovation</h4>
              <p>Cutting-edge technology and methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <ContactSection />

      {/* Employment Section */}
      <section className="employment">
        <div className="container">
          <h2>Employment</h2>
          <p>To apply for a job with The Royal Group, please send a cover letter together with your C.V. to:</p>
          <a href="mailto:info@theroyalgroup.ca?subject=Job%20Application" className="cta-button">
            info@theroyalgroup.ca
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
