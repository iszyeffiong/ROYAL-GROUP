import React, { useState, useRef, useEffect } from 'react'
import '../styles/Chatbot.css'

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 I'm Roid, the Royal Group AI assistant. How can I help you today? Ask me about our services, divisions, or book an appointment!",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isBookingAppointment, setIsBookingAppointment] = useState(false)
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: ''
  })
  const [currentStep, setCurrentStep] = useState(null)
  const messagesEndRef = useRef(null)

  // Company knowledge base
  const knowledgeBase = {
    greetings: {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
      response: `Hey there! 👋 Thanks for reaching out to The Royal Group!

I'm here to help. What can I assist you with today?\n\n1. **Services** - Learn about what we offer
2. **Divisions** - Explore our three specialized divisions
3. **Appointment** - Schedule a consultation with our team
4. **About** - Learn more about The Royal Group\n\nOr feel free to ask me anything!`
    },
    services: {
      keywords: ['services', 'what do you offer', 'what can you do', 'offerings'],
      response: `We offer comprehensive services across three specialized divisions:

🏗️ **Royal Construction Group** - Residential, commercial, and retail construction with design-build and project management services.

🚨 **Royal Sign Systems** - Custom sign design, manufacturing, and professional installation services.

🔧 **Royal Custom Metals** - Architectural metalwork, fabrication, and custom metal solutions.

Would you like to know more about any specific division?`
    },
    divisions: {
      keywords: ['divisions', 'royal sign systems', 'royal construction', 'royal custom metals', 'rss', 'rcg', 'rcm'],
      response: `**The Royal Group consists of three specialized divisions:**

1. **Royal Sign Systems (RSS)** - Established 1993
   - Custom sign design & manufacturing
   - Site assessment & surveying
   - Professional installation & maintenance
   
2. **Royal Construction Group (RCG)**
   - Residential & commercial construction
   - Design-build services
   - Project management
   
3. **Royal Custom Metals (RCM)**
   - Architectural metalwork
   - Custom fabrication
   - Structural steel work

Which division interests you?`
    },
    about: {
      keywords: ['about', 'company', 'who are you', 'tell me about royal group', 'history', 'story'],
      response: `**About The Royal Group:**

We are a multi-disciplinary company with three specialized divisions serving the construction, signage, and metalwork industries. With decades of combined expertise, we're committed to:

✅ Quality & Excellence
✅ Customer Service
✅ Innovation & Technology
✅ Timely Delivery
✅ Professional Installation

Our mission: Delivering comprehensive solutions with attention to detail and proven track record.

Would you like to learn more about a specific division or our services?`
    },
    contact: {
      keywords: ['contact', 'phone', 'email', 'address', 'how to reach', 'call', 'get in touch'],
      response: `**Contact Information:**

📍 Address: We're located in the greater North America region
📧 Email: contact@royalgroup.com
📞 Phone: Available upon request
🕐 Hours: Business hours available

Would you like me to help you schedule an appointment with our team?`
    },
    appointment: {
      keywords: ['appointment', 'meeting', 'schedule', 'book', 'consultation', 'available', 'when can i meet'],
      response: `I'd be happy to help you schedule an appointment! 📅\n\nLet's start with your name. What's your full name?`
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()

    // If currently in appointment booking process
    if (isBookingAppointment) {
      return handleAppointmentStep(userMessage)
    }

    // Check knowledge base
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (value.keywords && value.keywords.some(keyword => lowerMessage.includes(keyword))) {
        // If appointment is selected, start the booking process
        if (key === 'appointment') {
          setIsBookingAppointment(true)
          setCurrentStep('name')
        }
        return value.response
      }
    }

    // Fallback response
    return `I'm not sure about that. Would you like me to:\n\n1. Tell you more about our services\n2. Introduce you to a specific division\n3. Help you schedule an appointment with one of our team members?\n\nOr feel free to type your question and I can connect you with a human specialist!`
  }

  const handleAppointmentStep = (userInput) => {
    const trimmedInput = userInput.trim()

    switch (currentStep) {
      case 'name':
        setAppointmentData(prev => ({ ...prev, name: trimmedInput }))
        setCurrentStep('email')
        return `Great! ${trimmedInput}. Now, what's your email address?`

      case 'email':
        setAppointmentData(prev => ({ ...prev, email: trimmedInput }))
        setCurrentStep('phone')
        return `Perfect! Your email is ${trimmedInput}. What's your phone number?`

      case 'phone':
        setAppointmentData(prev => ({ ...prev, phone: trimmedInput }))
        setCurrentStep('service')
        return `Got it! ${trimmedInput}. Which service or division are you interested in?\n\n1. Royal Construction Group\n2. Royal Sign Systems\n3. Royal Custom Metals\n4. General Inquiry`

      case 'service':
        setAppointmentData(prev => ({ ...prev, service: trimmedInput }))
        setCurrentStep('date')
        return `Excellent! ${trimmedInput} it is. What's your preferred date? (e.g., December 15, 2025)`

      case 'date':
        setAppointmentData(prev => ({ ...prev, date: trimmedInput }))
        setCurrentStep('time')
        return `Great! ${trimmedInput} works. What time would you prefer? (e.g., 2:00 PM)`

      case 'time':
        setAppointmentData(prev => ({ ...prev, time: trimmedInput }))
        setCurrentStep(null)
        setIsBookingAppointment(false)
        
        // Save appointment
        const appointment = {
          ...appointmentData,
          time: trimmedInput,
          bookedAt: new Date()
        }

        const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]')
        existingAppointments.push(appointment)
        localStorage.setItem('appointments', JSON.stringify(existingAppointments))

        return `✅ **Appointment Confirmed!**

Thank you, ${appointmentData.name}! Your appointment has been successfully booked.

**Details:**
👤 Name: ${appointmentData.name}
📧 Email: ${appointmentData.email}
📞 Phone: ${appointmentData.phone}
🔧 Service: ${appointmentData.service}
📅 Date: ${appointmentData.date}
🕐 Time: ${trimmedInput}

We'll send you a confirmation email shortly. Looking forward to meeting with you!`

      default:
        return `How can I help you?`
    }
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = findResponse(input)
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 500)
  }

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const handleQuickAction = (action) => {
    let message = ''
    switch (action) {
      case 'services':
        message = 'Tell me about your services'
        break
      case 'divisions':
        message = 'What divisions do you have?'
        break
      case 'appointment':
        message = 'I want to schedule an appointment'
        break
      case 'about':
        message = 'Tell me about your company'
        break
      default:
        return
    }
    setInput(message)
    setTimeout(() => handleSendMessage({ preventDefault: () => {} }), 100)
  }

  return (
    <>
      {/* Chatbot Widget */}
      <div className={`chatbot-widget ${isOpen ? 'open' : 'closed'}`}>
        {isOpen ? (
          <div className="chatbot-container">
            {/* Header */}
            <div className="chatbot-header">
              <div>
                <h3>Royal Group Assistant</h3>
                <p><span className="online-indicator"></span>Online</p>
              </div>
              <button onClick={toggleChatbot} className="close-btn">
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.sender}`}
                >
                  <div className="message-content">
                    {message.text}
                  </div>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="message bot">
                  <div className="message-content">
                    <span className="typing-indicator">
                      <span></span><span></span><span></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions (shown on first message only) */}
            {messages.length === 1 && (
              <div className="quick-actions">
                <button onClick={() => handleQuickAction('services')} className="quick-btn">
                  🔧 Services
                </button>
                <button onClick={() => handleQuickAction('divisions')} className="quick-btn">
                  🏢 Divisions
                </button>
                <button onClick={() => handleQuickAction('appointment')} className="quick-btn">
                  📅 Appointment
                </button>
                <button onClick={() => handleQuickAction('about')} className="quick-btn">
                  ℹ️ About Us
                </button>
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="chatbot-input-form">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="chatbot-input"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="send-btn"
                disabled={!input.trim() || isLoading}
              >
                ➤
              </button>
            </form>

            {/* Footer */}
            <div className="chatbot-footer">
              💡 Tip: Ask about scheduling an appointment or services!
            </div>
          </div>
        ) : null}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleChatbot}
        className={`chatbot-toggle ${isOpen ? 'hidden' : 'visible'}`}
        title="Open chat"
      >
        <span className="chat-icon">🤖</span>
        <span className="chat-label">Roid</span>
      </button>
    </>
  )
}

export default Chatbot
