import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import constructionVideo from '../assets/videos/construction.mp4'

function Divisions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const divisions = [
    {
      name: 'Royal Sign Systems',
      established: 'Established 1993',
      tagline: '"It\'s More Than Signs"',
      icon: 'fas fa-lightbulb',
      description: 'With over 30 years of expertise, Royal Sign Systems specializes in custom sign design, manufacturing, and installation. We bring real, high-quality signage solutions to businesses across North America.',
      services: [
        'Custom Sign Design & Manufacturing',
        'Site Assessment & Surveying',
        '2D/3D Design & Permitting',
        'In-House Fabrication',
        'Professional Installation',
        'Warranty & Maintenance'
      ],
      link: '/divisions/rss',
      color: 'var(--primary)'
    },
    {
      name: 'Royal Construction Group',
      established: 'Leaders in Quality Construction',
      tagline: 'Design-Build & Project Management',
      icon: 'fas fa-helmet-safety',
      description: 'A diversified, nationally recognized firm with extensive experience in residential, commercial, retail, and institutional construction projects. We deliver projects on time, on spec, and on budget.',
      services: [
        'Residential Projects',
        'Commercial Construction',
        'Retail Development',
        'Pre-Construction Planning',
        'Construction Management',
        'Architectural Modeling'
      ],
      link: '/divisions/rcg',
      color: 'var(--secondary)'
    },
    {
      name: 'Royal Custom Metals',
      established: 'Premium Metalwork Division',
      tagline: 'Architectural Elements & Fabrication',
      icon: 'fas fa-welding-torch',
      description: 'Specialized division dedicated to creating exceptional custom metalwork and architectural elements. We combine traditional craftsmanship with cutting-edge fabrication technology.',
      services: [
        'Custom Metal Fabrication',
        'Architectural Elements',
        'Welded Components',
        'Structural Steel Work',
        'Design Consultation',
        'Installation Services'
      ],
      link: '/divisions/rcm',
      color: 'var(--accent)'
    }
  ]

  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="hero hero-video">
        <video autoPlay muted loop className="hero-video-bg">
          <source src={constructionVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Our Divisions</h2>
          <p>Three Specialized Companies, One Unified Vision</p>
        </div>
      </section>

      {/* Divisions Overview */}
      <section className="services-overview">
        <div className="container">
          <h2>Integrated Solutions Across Multiple Industries</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '3rem' }}>
            The Royal Group operates three specialized divisions, each with deep expertise in their respective fields. 
            Together, we provide comprehensive solutions for construction, signage, and metalwork projects.
          </p>

          {/* Divisions Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {divisions.map((division, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
              }}>
                {/* Header */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  color: 'white',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <i className={`${division.icon}`} style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}></i>
                  <h3 style={{ marginBottom: '0.5rem' }}>{division.name}</h3>
                  <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{division.established}</p>
                  <p style={{ fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.5rem' }}>{division.tagline}</p>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {division.description}
                  </p>

                  <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1rem' }}>Services:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    {division.services.map((service, i) => (
                      <li key={i} style={{ color: '#666', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                        <i className="fas fa-check" style={{ position: 'absolute', left: 0, color: 'var(--secondary)' }}></i>
                        {service}
                      </li>
                    ))}
                  </ul>

                  <Link to={division.link} style={{
                    display: 'inline-block',
                    padding: '0.8rem 1.5rem',
                    background: 'var(--primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    textAlign: 'center',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--secondary)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--primary)'
                  }}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="values">
        <div className="container">
          <h2>Why Choose Our Divisions?</h2>
          <div className="values-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="value-item">
              <i className="fas fa-check-circle"></i>
              <h4>Specialized Expertise</h4>
              <p>Each division focuses deeply on their specialty</p>
            </div>
            <div className="value-item">
              <i className="fas fa-link"></i>
              <h4>Integrated Services</h4>
              <p>Divisions work together for complete solutions</p>
            </div>
            <div className="value-item">
              <i className="fas fa-award"></i>
              <h4>Proven Track Record</h4>
              <p>Decades of successful projects and satisfied clients</p>
            </div>
            <div className="value-item">
              <i className="fas fa-cogs"></i>
              <h4>Advanced Technology</h4>
              <p>Cutting-edge equipment and methodologies</p>
            </div>
            <div className="value-item">
              <i className="fas fa-handshake"></i>
              <h4>Partnership Focus</h4>
              <p>We treat every client as a valued partner</p>
            </div>
            <div className="value-item">
              <i className="fas fa-shield-alt"></i>
              <h4>Safety & Quality</h4>
              <p>Industry-leading standards across all operations</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Divisions
