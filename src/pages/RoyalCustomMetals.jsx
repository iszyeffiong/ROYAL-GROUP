import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import blueprintImg from '../assets/images/construction/blueprint.jpg'

function RoyalCustomMetals() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Hero Section with Image */}
      <section className="hero" style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 95, 0.6) 0%, rgba(196, 30, 58, 0.6) 100%), url(${blueprintImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>Royal Custom Metals</h2>
          <p>Premium Metalwork & Architectural Elements</p>
        </div>
      </section>

      {/* Overview */}
      <section className="services-overview">
        <div className="container">
          <h2>About Royal Custom Metals</h2>
          <div style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9' }}>
              Royal Custom Metals is our specialized division dedicated to creating exceptional custom metalwork and
              architectural elements. We combine traditional welding craftsmanship with cutting-edge fabrication
              technology to deliver premium solutions for your projects.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginTop: '1rem' }}>
              Whether you need structural steel work, ornamental metalwork, or complex architectural elements, our team
              delivers precision and artistry in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-overview" style={{ background: 'white' }}>
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-welding-torch"></i>
              <h3>Custom Fabrication</h3>
              <p>Precision metal fabrication tailored to your exact specifications and design requirements.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-hammer"></i>
              <h3>Architectural Elements</h3>
              <p>Custom architectural metalwork that enhances building aesthetics and functionality.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-tools"></i>
              <h3>Welded Components</h3>
              <p>High-quality welded assemblies and structural components with expert craftsmanship.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-industry"></i>
              <h3>Structural Steel Work</h3>
              <p>Heavy structural steel fabrication and assembly for industrial and commercial projects.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-pencil-ruler"></i>
              <h3>Design Consultation</h3>
              <p>Expert consultation to optimize your metalwork design for strength, aesthetics, and cost.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-truck"></i>
              <h3>Installation Services</h3>
              <p>Professional installation of all custom metal work by experienced technicians.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Capabilities */}
      <section className="services-overview">
        <div className="container">
          <h2>Materials & Capabilities</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              marginTop: '2rem',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <i className="fas fa-cogs" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>
                Materials We Work With
              </h3>
              <ul style={{ listStyle: 'none', fontSize: '1.05rem' }}>
                <li style={{ padding: '0.7rem 0', borderBottom: '1px solid var(--border)', color: '#666' }}>
                  <i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '0.5rem' }}></i>
                  Mild Steel
                </li>
                <li style={{ padding: '0.7rem 0', borderBottom: '1px solid var(--border)', color: '#666' }}>
                  <i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '0.5rem' }}></i>
                  Stainless Steel
                </li>
                <li style={{ padding: '0.7rem 0', borderBottom: '1px solid var(--border)', color: '#666' }}>
                  <i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '0.5rem' }}></i>
                  Aluminum
                </li>
                <li style={{ padding: '0.7rem 0', borderBottom: '1px solid var(--border)', color: '#666' }}>
                  <i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '0.5rem' }}></i>
                  Copper & Brass
                </li>
                <li style={{ padding: '0.7rem 0', color: '#666' }}>
                  <i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '0.5rem' }}></i>
                  Custom Alloys
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <i className="fas fa-toolbox" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>
                Advanced Equipment
              </h3>
              <ul style={{ listStyle: 'none', fontSize: '1.05rem' }}>
                <li style={{ padding: '0.7rem 0', borderBottom: '1px solid var(--border)', color: '#666' }}>
                  <i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '0.5rem' }}></i>
                  CNC Cutting Systems
                </li>
                <li style={{ padding: '0.7rem 0', borderBottom: '1px solid var(--border)', color: '#666' }}>
                  <i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '0.5rem' }}></i>
                  Plasma Cutters
                </li>
                <li style={{ padding: '0.7rem 0', borderBottom: '1px solid var(--border)', color: '#666' }}>
                  <i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '0.5rem' }}></i>
                  Welding Equipment
                </li>
                <li style={{ padding: '0.7rem 0', borderBottom: '1px solid var(--border)', color: '#666' }}>
                  <i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '0.5rem' }}></i>
                  Bending & Forming Machinery
                </li>
                <li style={{ padding: '0.7rem 0', color: '#666' }}>
                  <i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '0.5rem' }}></i>
                  Finishing & Coating Systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="services-overview" style={{ background: 'white' }}>
        <div className="container">
          <h2>Why Choose Royal Custom Metals</h2>
          <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--light)', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                  <i className="fas fa-star" style={{ marginRight: '0.5rem' }}></i>
                  Expert Craftsmanship
                </h4>
                <p style={{ color: '#666' }}>Skilled metalworkers with decades of combined experience.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'var(--light)', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                  <i className="fas fa-cog" style={{ marginRight: '0.5rem' }}></i>
                  Modern Technology
                </h4>
                <p style={{ color: '#666' }}>State-of-the-art equipment for precision and consistency.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'var(--light)', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                  <i className="fas fa-bolt" style={{ marginRight: '0.5rem' }}></i>
                  Quality Assurance
                </h4>
                <p style={{ color: '#666' }}>Rigorous testing and inspection on every project.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'var(--light)', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                  <i className="fas fa-clock" style={{ marginRight: '0.5rem' }}></i>
                  On-Time Delivery
                </h4>
                <p style={{ color: '#666' }}>Efficient project management for timely completion.</p>
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

export default RoyalCustomMetals
