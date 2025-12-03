import React from 'react'
import { Link } from 'react-router-dom'

function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Service Inquiry - ${formData.service}`
    const body = `Name: ${formData.name}%0DEmail: ${formData.email}%0DService: ${formData.service}%0DMessage:%0D${formData.message}`
    window.location.href = `mailto:info@theroyalgroup.ca?subject=${subject}&body=${body}`
    setFormData({ name: '', email: '', service: '', message: '' })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="">Select a Service</option>
        <option value="construction">Construction</option>
        <option value="signage">Signage</option>
        <option value="metals">Custom Metals</option>
        <option value="quote">Get a Quote</option>
      </select>
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" className="submit-btn">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
