import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Divisions from './pages/Divisions'
import RoyalSignSystems from './pages/RoyalSignSystems'
import RoyalConstructionGroup from './pages/RoyalConstructionGroup'
import RoyalCustomMetals from './pages/RoyalCustomMetals'

function App() {
  return (
    <Router>
      <Navigation />
      <SocialSidebar />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/divisions/rss" element={<RoyalSignSystems />} />
        <Route path="/divisions/rcg" element={<RoyalConstructionGroup />} />
        <Route path="/divisions/rcm" element={<RoyalCustomMetals />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
