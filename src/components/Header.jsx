import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header(props) {
    var isDarkMode = props.isDarkMode
    var onThemeToggle = props.onThemeToggle
    var cartItemCount = props.cartItemCount
    var onCartClick = props.onCartClick

    var menuState = useState(false)
    var isMenuOpen = menuState[0]
    var setIsMenuOpen = menuState[1]

    var navigate = useNavigate()

    function handleMenuToggle() {
        if (isMenuOpen === true) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true)
        }
    }

    function handleContactClick(event) {
        event.preventDefault()
        navigate('/')
        setTimeout(function () {
            var footer = document.getElementById('footer')
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    }

    var logoSrc = isDarkMode ? '/images/logo_dark.png' : '/images/logo.png'
    var navClassName = isMenuOpen ? 'active' : ''

    return (
        <header>
            <div className="logo">
                <img
                    src={logoSrc}
                    alt="DairyFresh Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '15px' }}
                />
            </div>

            <div className="header-right">
                <div className="theme-toggle-container">
                    <input
                        type="checkbox"
                        id="theme-toggle"
                        className="theme-toggle-checkbox"
                        checked={isDarkMode}
                        onChange={onThemeToggle}
                    />
                    <label htmlFor="theme-toggle" className="theme-toggle-label">
                        <span className="theme-toggle-slider">
                            <span className="theme-icon sun">☀️</span>
                            <span className="theme-icon moon">🌙</span>
                        </span>
                    </label>
                </div>

                <div className="cart-icon-container" onClick={onCartClick}>
                    <span className="cart-icon">🛒</span>
                    {cartItemCount > 0 && (
                        <span className="cart-count">{cartItemCount}</span>
                    )}
                </div>

                <button className="menu-toggle" onClick={handleMenuToggle}>☰ Menu</button>
                <nav id="nav" className={navClassName}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/products">Our Products</Link>
                    <a href="#footer" onClick={handleContactClick}>Contact</a>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
