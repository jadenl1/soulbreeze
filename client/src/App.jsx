import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AgeGate from './components/AgeGate'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import VarietyPackDetail from './pages/VarietyPackDetail'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import Ambassador from './pages/Ambassador'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import CookiePolicy from './pages/CookiePolicy'

export default function App() {
  const [ageVerified, setAgeVerified] = useState(
    () => sessionStorage.getItem('ageVerified') === 'true'
  )
  const [cookieConsent, setCookieConsent] = useState(
    () => localStorage.getItem('cookieConsent')
  )

  useEffect(() => {
    if (!ageVerified) return
    const t = setTimeout(() => {
      AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 })
    }, 80)
    return () => clearTimeout(t)
  }, [ageVerified])

  const handleVerified = () => {
    sessionStorage.setItem('ageVerified', 'true')
    setAgeVerified(true)
  }

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setCookieConsent('accepted')
  }

  const handleCookieDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setCookieConsent('declined')
  }

  return (
    <BrowserRouter>
      {!ageVerified && <AgeGate onVerified={handleVerified} />}
      {ageVerified && !cookieConsent && (
        <CookieBanner onAccept={handleCookieAccept} onDecline={handleCookieDecline} />
      )}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/variety/:id" element={<VarietyPackDetail />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ambassador" element={<Ambassador />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
