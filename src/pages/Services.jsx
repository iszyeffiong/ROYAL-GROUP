import React, { useEffect } from 'react'
import ContactSection from '../components/ContactSection'
import engineerImg from '../assets/images/construction/engineer.jpg'

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Hero Section with Image Background */}
      <section className="hero" style={{
        backgroundImage: `url(${engineerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>Our Services</h2>
          <p>Comprehensive Solutions Across All Three Divisions</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-overview">
        <div className="container">
          <h2>What We Offer</h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', 
            color: '#666', 
            marginBottom: '3rem',
            lineHeight: '1.6'
          }}>
            The Royal Group provides comprehensive services across construction, signage, and custom metalwork. 
            Our integrated approach ensures quality and consistency across all projects.
          </p>

          {/* Construction Services */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ 
              color: 'var(--primary)', 
              marginBottom: '2rem', 
              fontSize: 'clamp(1.3rem, 4vw, 1.8rem)'
            }}>
              <i className="fas fa-helmet-safety" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>
              Construction Services
            </h3>
            <div className="services-grid">
              <div className="service-card">
                <i className="fas fa-home"></i>
                <h3>Residential Projects</h3>
                <p>Expert residential construction from foundation to completion with attention to detail and quality.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-building"></i>
                <h3>Commercial Construction</h3>
                <p>Large-scale commercial projects with proven track record of on-time, on-budget delivery.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-store"></i>
                <h3>Retail Development</h3>
                <p>Specialized retail construction with focus on customer experience and brand presentation.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-clipboard"></i>
                <h3>Pre-Construction Planning</h3>
                <p>Comprehensive planning and pre-construction services to ensure project success.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-hard-hat"></i>
                <h3>Construction Management</h3>
                <p>Full-service construction management with expert oversight and quality control.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-cube"></i>
                <h3>Architectural Modeling</h3>
                <p>Advanced 3D modeling and architectural visualization for project planning.</p>
              </div>
            </div>
          </div>

          {/* Signage Services */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ 
              color: 'var(--primary)', 
              marginBottom: '2rem', 
              fontSize: 'clamp(1.3rem, 4vw, 1.8rem)'
            }}>
              <i className="fas fa-sign" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>
              Signage Services
            </h3>
            <div className="services-grid">
              <div className="service-card">
                <i className="fas fa-pencil-ruler"></i>
                <h3>Custom Sign Design</h3>
                <p>Innovative design solutions tailored to your brand identity and business needs.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-cogs"></i>
                <h3>Manufacturing</h3>
                <p>In-house fabrication with state-of-the-art equipment and skilled craftspeople.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-map-pin"></i>
                <h3>Site Assessment</h3>
                <p>Professional site surveying and assessment for optimal signage placement.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-drafting-compass"></i>
                <h3>2D/3D Design & Permitting</h3>
                <p>Complete design documentation and permit acquisition services.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-tools"></i>
                <h3>Professional Installation</h3>
                <p>Expert installation by certified professionals with safety as top priority.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-wrench"></i>
                <h3>Maintenance & Support</h3>
                <p>Ongoing maintenance and warranty support for all signage installations.</p>
              </div>
            </div>
          </div>

          {/* Custom Metals Services */}
          <div>
            <h3 style={{ 
              color: 'var(--primary)', 
              marginBottom: '2rem', 
              fontSize: 'clamp(1.3rem, 4vw, 1.8rem)'
            }}>
              <i className="fas fa-welding-torch" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>
              Custom Metals Services
            </h3>
            <div className="services-grid">
              <div className="service-card">
                <i className="fas fa-hammer"></i>
                <h3>Metal Fabrication</h3>
                <p>Precision metal fabrication for custom and architectural applications.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-fire"></i>
                <h3>Welding Services</h3>
                <p>Expert welding and metal joining using industry-leading techniques.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-crown"></i>
                <h3>Architectural Elements</h3>
                <p>Custom architectural metalwork that enhances design and functionality.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-industry"></i>
                <h3>Structural Steel Work</h3>
                <p>Heavy-duty structural steel fabrication and installation services.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-lightbulb"></i>
                <h3>Design Consultation</h3>
                <p>Expert consultation for metalwork design and material selection.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-tools"></i>
                <h3>Installation Services</h3>
                <p>Professional installation and finishing of all metalwork projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}

export default Services
