import React, { useEffect } from 'react'
import ContactSection from '../components/ContactSection'

// Professional team collaboration image from Pexels
const teamCollaborationImg = 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Hero Section with Image Background */}
      <section className="hero" style={{
        backgroundImage: `url(${teamCollaborationImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>Get To Know Us!</h2>
          <p>More Than Just Signs - It's About Impact</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="services-overview">
        <div className="container">
          <h2>Our Story</h2>
          <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              Royal Sign Systems, known as ROYAL NEON GROUP back in the days, was established in 1993 with one mission: 
              to bring a real, high-quality Sign Company to North America. Our passion for excellence is what inspired us 
              in the beginning and it continues to drive us today.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              We are the designers and manufacturers of custom signs. We do all kinds of services and installation for 
              related products. Having been in the signage industry for number of years, Royal Sign Systems Inc. 
              distinguishes itself from other companies by its outstanding customer service and high quality of products.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              We fully understand the customer's needs and requirements for their corporate image and advertising in order 
              to have an impact on their market.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="services-overview" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2>It's More Than Signs</h2>
          <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem', fontStyle: 'italic', borderLeft: '4px solid var(--secondary)', paddingLeft: '2rem' }}>
              "We believe that this is about more than Signs."
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              We have come to understand that what we do in our ordinary, everyday lives matters just as much as any 
              religious actions, extraordinary deeds, or noteworthy accomplishments. We recall the story of a King who came 
              not to be served but to serve – treating people like they matter.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              We believe that every interaction we have with a potential client, whether they become a customer or not, matters. 
              Every team member in our company, every vendor we work with, our bookkeepers, our bankers, our neighbours – they matter. 
              Every penny our company earns, spends or borrows matters. The impact on our communities of the way we do business, matters. 
              The way we live and treat the world we live in matters.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9' }}>
              We believe there is a glory, a weightiness in every human being and everything we do. And when you choose to work with us - 
              trust in our team with your project, your vision for it, and your financial investment – we believe that matters.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2>Our Services</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '3rem' }}>
            Royal Sign Systems provides services and products that exceed expectations by serving our customers with 
            respect, courtesy, integrity and professionalism. Our mission is to deliver your products and services on time, 
            on spec, and on budget.
          </p>
        </div>
      </section>

      {/* Turn-Key Approach */}
      <section className="services-overview" style={{ background: 'white' }}>
        <div className="container">
          <h2>Our Turn-Key Approach</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
            Every project is different, and Royal Sign Group has been excelling at adapting to the unique needs of each 
            customer for more than 40 years. Here are the steps we take with most clients:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {[
              { num: '1', text: 'Comprehensive site assessment and surveying' },
              { num: '2', text: 'Thorough zoning and code investigation' },
              { num: '3', text: 'Review of property owner requirements' },
              { num: '4', text: 'Site-specific drawings (2-D and 3-D)' },
              { num: '5', text: 'Applying for the necessary permits' },
              { num: '6', text: 'In-house fabrication of signage and architectural elements' },
              { num: '7', text: 'Careful crating and shipping' },
              { num: '8', text: 'Installing your signage and architectural elements' },
              { num: '9', text: 'Warranty' },
              { num: '10', text: 'Ongoing maintenance and repairs' }
            ].map((step, index) => (
              <div key={index} style={{
                background: 'var(--light)',
                padding: '1.5rem',
                borderRadius: '10px',
                textAlign: 'center',
                borderTop: '3px solid var(--secondary)'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'var(--secondary)',
                  marginBottom: '0.5rem'
                }}>
                  {step.num}
                </div>
                <p style={{ color: '#666', margin: 0 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management */}
      <section className="services-overview" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2>Project Management</h2>
          <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              Our well trained project managers and support staff, many with 20+ years in the industry, partner with customers 
              from the very first stages of planning to the final phase of installation. Our collaborative approach and excellent 
              service are key reasons why several of our customer relationships have lasted more than 30 years.
            </p>
            <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
              Each customer is assigned a project manager whose role includes:
            </p>
            <ul style={{ color: '#666', lineHeight: '2', fontSize: '1rem' }}>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Learning and understanding your needs and expectations</li>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Conducting a careful evaluation and situation analysis</li>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Preparing and presenting a complete sign program, from production through installation</li>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Working with the design department to initiate design concepts and drawings</li>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Assisting in setting and maintaining a project budget</li>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Establishing a project timetable</li>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Scheduling and managing site surveys, both physical and photographic</li>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Providing code checks and handling all permitting</li>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Preparing and presenting progress reports</li>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Overseeing the Implementation Team that installs the signage</li>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Finalizing the billing process</li>
              <li><i className="fas fa-check" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i>Overseeing your maintenance needs</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.9', marginTop: '2rem' }}>
              Even after installation, the relationships between our project managers and customers continue over the long term, 
              keeping the doors of communication open for account updates and ideas. Royal Sign Group remains available for service 
              and maintenance for installed signs – and ready to assist when it is time for rebranding and re-imaging.
            </p>
          </div>
        </div>
      </section>

      {/* Design & Engineering */}
      <section className="services-overview">
        <div className="container">
          <h2>Design and Engineering</h2>
          <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              We supply as much—or as little—creative input as your project requires. We work closely with your design and 
              branding partners, and have a long history of collaborating with renowned design firms.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              Great signage begins with great design, and Royal's in-house team is one of the industry's best. Our highly 
              experienced designers and engineers bring customers' corporate identities and brand standards to life. We 
              transform rough concepts into striking drawings that conform to every site specification. Then we create 3-D 
              vivid presentations that allow you to see your building, with the virtual signage and architectural elements 
              in place, from all angles on your computer screen.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              We are experts in visually enhancing your corporate identity while incorporating the requirements of landlords, 
              local ordinances and environmental regulations. Through sophisticated software, our engineering team leverages 
              the laws of physics, determining the best materials to meet design, load-bearing and even wind-speed requirements. 
              Our estimators calculate the costs to implement the entire program, taking into account such factors as the 
              long-term electricity and maintenance savings of using LED lighting.
            </p>
          </div>
        </div>
      </section>

      {/* In-House Manufacturing */}
      <section className="services-overview" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2>In-House Manufacturing</h2>
          <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              Whether a customer needs high-rise, pylon or monument signs – or custom lettering, menu boards, awnings or 
              architectural elements – Royal's state-of-the-art facilities are capable of handling a high volume of orders 
              to meet deadlines and budgets.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              With large manufacturing facilities we efficiently serve customers both domestically and internationally. We 
              work with a vast array of materials including plastics, aluminum, aluminum composites (ACM), structural steel 
              and polycarbonates. Our ability to create all of our customers' signage and architectural elements in-house, 
              rather than via out-sourcing, ensures the highest levels of quality and consistency.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9' }}>
              Royal Sign Group's investment in innovative technologies and automation brings added value to our customers. 
              Our top-of-the-line equipment includes machinery capable of bending sheet metal into ovals, pole covers and more; 
              water-jet cutting machines that can pierce 6 inches of solid steel; 3D routers that create formed faces, and 
              channel-letter machines that bend letters to exact specifications. We also employ skilled craftsmen who produce 
              top-quality welded architectural elements and letters.
            </p>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="services-overview">
        <div className="container">
          <h2>Installation Services</h2>
          <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              Royal Sign Group's Implementation Team controls the installation timelines to keep your project on schedule. 
              We partner with a robust network of highly qualified installation and service companies. This large network of 
              over 1,000 smaller companies, strategically located throughout North America, allows Royal to be competitive in 
              terms of installation costs.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9' }}>
              Royal Sign Group maintains the highest standards of qualifications for these companies. We continually monitor 
              and grade our subcontractors to the highest levels of capabilities and performance, as well as quality of equipment, 
              personnel and insurance coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Warranty & Repairs */}
      <section className="services-overview" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2>Warranty and Repairs</h2>
          <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9' }}>
              Royal Sign Group continues to be available after installation to provide service or maintenance to our installed 
              signs. We warrant that all service and repair performed by Royal or our subcontractors is free of defects in 
              workmanship for a period of one year from the date of service. Any service or repair that must be redone due to 
              faulty workmanship will be done at no cost to the client. Parts installed by Royal carry their own manufacturers' warranties.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}

export default About
