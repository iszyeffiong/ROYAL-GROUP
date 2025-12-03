import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import vintageNeon from '../assets/images/signage/vintage-neon.jpg'
import blueprintImg from '../assets/images/construction/blueprint.jpg'
import installationImg from '../assets/images/construction/installation.jpg'

function RoyalSignSystems() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Hero Section with Image */}
      <section className="hero" style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 95, 0.6) 0%, rgba(196, 30, 58, 0.6) 100%), url(${vintageNeon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>Royal Sign Systems</h2>
          <p>40+ Years of Custom Signage Excellence</p>
        </div>
      </section>

      {/* Overview */}
      <section className="services-overview">
        <div className="container">
          <h2>About Royal Sign Systems</h2>
          <div style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9' }}>
              Established in 1993, Royal Sign Systems (RSS) was founded with one mission: to bring real, high-quality
              signage solutions to North America. Our passion for excellence has driven us from day one and continues to
              guide every project we undertake.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginTop: '1rem' }}>
              We believe it's more than signs. We believe that every interaction with a potential client, every team
              member, vendor, and the communities we serve matters. This philosophy shapes how we conduct business and
              deliver exceptional results.
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
              <i className="fas fa-pencil-ruler"></i>
              <h3>Custom Design</h3>
              <p>From concept to execution, our design team creates custom sign solutions that reflect your brand identity.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-map"></i>
              <h3>Site Assessment</h3>
              <p>Comprehensive surveying and analysis to determine optimal signage placement and specifications.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-file-contract"></i>
              <h3>Permitting</h3>
              <p>We handle all zoning, code compliance, and permit requirements so you don't have to.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-industry"></i>
              <h3>In-House Manufacturing</h3>
              <p>State-of-the-art facilities for fabrication using advanced technology and skilled craftsmen.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-tools"></i>
              <h3>Professional Installation</h3>
              <p>Network of 1,000+ qualified installation partners across North America.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-wrench"></i>
              <h3>Warranty & Maintenance</h3>
              <p>One-year warranty on all service work plus ongoing maintenance and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Turn-Key Approach */}
      <section className="services-overview">
        <div className="container">
          <h2>Our Turn-Key Approach</h2>
          <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
                  Comprehensive Assessment
                </h4>
                <p>Site assessment and surveying tailored to your needs</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
                  Design & Engineering
                </h4>
                <p>2D/3D designs and engineering calculations</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
                  Fabrication
                </h4>
                <p>In-house manufacturing with quality control</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
                  Installation
                </h4>
                <p>Professional installation by qualified teams</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
                  Project Management
                </h4>
                <p>Dedicated managers with 20+ years experience</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
                  Ongoing Support
                </h4>
                <p>Maintenance and support after installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="services-overview" style={{ background: 'white' }}>
        <div className="container">
          <h2>Materials & Equipment</h2>
          <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <div style={{ background: 'var(--light)', padding: '2rem', borderRadius: '10px' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>We Work With</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <strong style={{ color: 'var(--secondary)' }}>Materials</strong>
                  <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                    <li style={{ padding: '0.5rem 0' }}>• Plastics & Composites</li>
                    <li style={{ padding: '0.5rem 0' }}>• Aluminum & ACM</li>
                    <li style={{ padding: '0.5rem 0' }}>• Structural Steel</li>
                    <li style={{ padding: '0.5rem 0' }}>• Polycarbonates</li>
                  </ul>
                </div>
                <div>
                  <strong style={{ color: 'var(--secondary)' }}>Equipment</strong>
                  <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                    <li style={{ padding: '0.5rem 0' }}>• Sheet Metal Bending Machinery</li>
                    <li style={{ padding: '0.5rem 0' }}>• Water-Jet Cutting</li>
                    <li style={{ padding: '0.5rem 0' }}>• 3D Routers</li>
                    <li style={{ padding: '0.5rem 0' }}>• Channel-Letter Machines</li>
                  </ul>
                </div>
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

export default RoyalSignSystems
