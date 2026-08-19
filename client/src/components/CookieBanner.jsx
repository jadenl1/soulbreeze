import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdCookie } from 'react-icons/md'
import '../styles/CookieBanner.css'

export default function CookieBanner({ onAccept, onDecline }) {
  const [closing, setClosing] = useState(false)

  const dismiss = (handler) => {
    setClosing(true)
    setTimeout(handler, 280)
  }

  return (
    <div className={`cookie-banner${closing ? ' cookie-banner-closing' : ''}`}>
      <div className="cookie-inner">
        <MdCookie className="cookie-icon" />
        <p className="cookie-text">
          We use cookies to enhance your browsing experience.{' '}
          <Link to="/cookies" className="cookie-policy-link">Learn more</Link>
        </p>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-btn-decline" onClick={() => dismiss(onDecline)}>
            Decline
          </button>
          <button className="cookie-btn cookie-btn-accept" onClick={() => dismiss(onAccept)}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
