import React from 'react'
import './SocialSidebar.css'

function SocialSidebar() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook',
      url: '#'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: '#'
    },
    {
      name: 'Pinterest',
      icon: 'fab fa-pinterest',
      url: '#'
    },
    {
      name: 'Vimeo',
      icon: 'fab fa-vimeo',
      url: '#'
    }
  ]

  return (
    <div className="social-sidebar">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          title={social.name}
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  )
}

export default SocialSidebar
