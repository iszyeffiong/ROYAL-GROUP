import React from 'react'
import ContactForm from './ContactForm'

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Head Office</h4>
                <p>
                  3650/15 Weston Road
                  <br />
                  North York, ON M9L 1W2
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:info@theroyalgroup.ca">info@theroyalgroup.ca</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Tel</h4>
                <p>
                  <a href="tel:+1-416-743-0505">416-743-0505</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-fax"></i>
              <div>
                <h4>Fax</h4>
                <p>416-744-0202</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
