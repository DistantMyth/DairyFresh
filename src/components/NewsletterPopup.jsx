import React from 'react'
import { useState } from 'react'
import Popup from './Popup.jsx'

function NewsletterPopup(props) {
    var isOpen = props.isOpen
    var onClose = props.onClose
    var onSubscribe = props.onSubscribe

    var emailState = useState('')
    var email = emailState[0]
    var setEmail = emailState[1]

    var successState = useState(false)
    var showSuccess = successState[0]
    var setShowSuccess = successState[1]

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (email.trim() !== '') {
            setShowSuccess(true)
            if (onSubscribe) {
                onSubscribe(email)
            }
            setTimeout(function () {
                setShowSuccess(false)
                setEmail('')
                onClose()
            }, 2500)
        }
    }

    return (
        <Popup isOpen={isOpen} onClose={onClose} title="📬 Stay Fresh with Updates!">
            {showSuccess === true ? (
                <div className="newsletter-success">
                    <div className="success-icon-large">✉️</div>
                    <h3>You're Subscribed!</h3>
                    <p>Welcome to the DairyFresh family!</p>
                </div>
            ) : (
                <div className="newsletter-content">
                    <p className="newsletter-description">
                        Get exclusive offers, new product alerts, and healthy recipes delivered to your inbox!
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="newsletter-input-group">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={handleEmailChange}
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="btn newsletter-submit-btn">
                                Subscribe
                            </button>
                        </div>
                    </form>
                    <button className="newsletter-skip" onClick={onClose}>
                        No thanks, maybe later
                    </button>
                    <p className="newsletter-privacy">
                        🔒 We respect your privacy. Unsubscribe anytime.
                    </p>
                </div>
            )}
        </Popup>
    )
}

export default NewsletterPopup
