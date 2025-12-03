import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import engineerImg from '../assets/images/construction/engineer.jpg'

function RoyalConstructionGroup() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Hero Section with Image */}
      <section className="hero" style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 95, 0.6) 0%, rgba(196, 30, 58, 0.6) 100%), url(${engineerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>Royal Construction Group</h2>
          <p>Leaders in Quality Construction & Design-Build</p>
        </div>
      </section>

      {/* Overview */}
      <section className="services-overview">
        <div className="container">
          <h2>About Royal Construction Group</h2>
          <div style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9' }}>
              Royal Construction Group is a diversified, nationally recognized firm with extensive experience in
              construction, commercial development, retail, institutional, infrastructure, and industrial projects
              across North America.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginTop: '1rem' }}>
              We are committed to sustainable business management, technological leadership, and continuously improving
              efficiency and economic value for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="services-overview" style={{ background: 'white' }}>
        <div className="container">
          <h2>Our Mission, Vision & Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ padding: '2rem', background: 'var(--light)', borderRadius: '10px', borderLeft: '4px solid var(--secondary)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                <i className="fas fa-bullseye" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>
                Mission
              </h3>
              <p>
                Develop infrastructure and complex services to improve quality of life, provide professional
                development opportunities, and generate value for clients, partners, and shareholders.
              </p>
            </div>
            <div style={{ padding: '2rem', background: 'var(--light)', borderRadius: '10px', borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                <i className="fas fa-eye" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i>
                Vision
              </h3>
              <p>
                Become a leading international reference group undertaking innovative, high-value projects while
                growing sustainably and profitably while respecting the environment.
              </p>
            </div>
            <div style={{ padding: '2rem', background: 'var(--light)', borderRadius: '10px', borderLeft: '4px solid var(--success)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                <i className="fas fa-heart" style={{ marginRight: '0.5rem', color: 'var(--success)' }}></i>
                Core Values
              </h3>
              <p>Team spirit • Excellence • Innovation • Adaptability • Safety • Quality • Integrity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-overview">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-blueprint"></i>
              <h3>Pre-Construction Planning</h3>
              <p>Comprehensive planning and architectural modeling to ensure project success from the start.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-chart-gantt"></i>
              <h3>Construction Management</h3>
              <p>Expert project oversight, scheduling, and coordination throughout construction phases.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-building"></i>
              <h3>Residential Construction</h3>
              <p>Quality residential projects built with precision and attention to detail.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-store"></i>
              <h3>Commercial Development</h3>
              <p>Large-scale commercial projects delivered on time and within budget.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-shopping-cart"></i>
              <h3>Retail Construction</h3>
              <p>Specialized retail environments designed for optimal customer experience.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-landmark"></i>
              <h3>Institutional Projects</h3>
              <p>Complex institutional and infrastructure projects with precision and excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="services-overview" style={{ background: 'white' }}>
        <div className="container">
          <h2>Why Choose Royal Construction Group</h2>
          <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>National Recognition</h4>
                <p style={{ color: '#666' }}>
                  Proven track record of excellence across diverse project types and sectors.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Sustainable Practices</h4>
                <p style={{ color: '#666' }}>
                  Commitment to environmentally responsible and sustainable construction methods.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Technological Leadership</h4>
                <p style={{ color: '#666' }}>
                  Continuous investment in innovative technologies and modern construction techniques.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Efficiency & Value</h4>
                <p style={{ color: '#666' }}>Dedicated to improving efficiency and delivering exceptional economic value.</p>
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

export default RoyalConstructionGroup
