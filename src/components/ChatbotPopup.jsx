import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function ChatbotPopup(props) {
    var isOpen = props.isOpen
    var onClose = props.onClose

    var messagesState = useState([
        { sender: 'bot', text: 'Hello! 👋 Welcome to DairyFresh!' },
        { sender: 'bot', text: 'How can I help you today?' }
    ])
    var messages = messagesState[0]
    var setMessages = messagesState[1]

    var inputState = useState('')
    var inputText = inputState[0]
    var setInputText = inputState[1]

    var typingState = useState(false)
    var isTyping = typingState[0]
    var setIsTyping = typingState[1]

    var messagesEndRef = useRef(null)

    var botResponses = [
        'That sounds great! Our milk is delivered fresh every morning at your doorstep. 🥛',
        'We have many products! Check out our Products page for the full range. 🧀',
        'Delivery is FREE for all subscriptions! 🚚',
        'You can change or cancel your subscription anytime from your account. ✓',
        'Our organic range is certified and comes from grass-fed cows. 🌱',
        'Thank you for your interest! Would you like to start a subscription today? 📦',
        'Our customer support team is available 24/7 to help you! 💬',
        'We deliver to all major cities. Enter your pincode to check availability! 📍'
    ]

    useEffect(function () {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    function getRandomResponse() {
        var randomIndex = Math.floor(Math.random() * botResponses.length)
        return botResponses[randomIndex]
    }

    function handleInputChange(event) {
        setInputText(event.target.value)
    }

    function handleSend() {
        if (inputText.trim() === '') {
            return
        }

        var userMessage = { sender: 'user', text: inputText }
        var newMessages = messages.concat([userMessage])
        setMessages(newMessages)
        setInputText('')
        setIsTyping(true)

        setTimeout(function () {
            var botMessage = { sender: 'bot', text: getRandomResponse() }
            setMessages(function (prevMessages) {
                return prevMessages.concat([botMessage])
            })
            setIsTyping(false)
        }, 1500)
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSend()
        }
    }

    function handleQuickQuestion(question) {
        var userMessage = { sender: 'user', text: question }
        var newMessages = messages.concat([userMessage])
        setMessages(newMessages)
        setIsTyping(true)

        setTimeout(function () {
            var botMessage = { sender: 'bot', text: getRandomResponse() }
            setMessages(function (prevMessages) {
                return prevMessages.concat([botMessage])
            })
            setIsTyping(false)
        }, 1500)
    }

    if (isOpen === false) {
        return null
    }

    return (
        <div className="chatbot-popup">
            <div className="chatbot-header">
                <div className="chatbot-header-info">
                    <span className="chatbot-avatar">🐄</span>
                    <div>
                        <h4>DairyFresh Support</h4>
                        <span className="chatbot-status">Online</span>
                    </div>
                </div>
                <button className="chatbot-close-btn" onClick={onClose}>×</button>
            </div>

            <div className="chatbot-messages">
                {messages.map(function (message, index) {
                    var messageClass = message.sender === 'bot' ? 'chatbot-message bot' : 'chatbot-message user'
                    return (
                        <div key={index} className={messageClass}>
                            {message.text}
                        </div>
                    )
                })}
                {isTyping === true && (
                    <div className="chatbot-message bot typing">
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                    </div>
                )}
                <div ref={messagesEndRef}></div>
            </div>

            <div className="chatbot-quick-questions">
                <button onClick={function () { handleQuickQuestion('Tell me about delivery') }}>🚚 Delivery Info</button>
                <button onClick={function () { handleQuickQuestion('What products do you have?') }}>📦 Products</button>
                <button onClick={function () { handleQuickQuestion('Pricing details') }}>💰 Pricing</button>
            </div>

            <div className="chatbot-input-area">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className="chatbot-input"
                />
                <button className="chatbot-send-btn" onClick={handleSend}>➤</button>
            </div>
        </div>
    )
}

export default ChatbotPopup
