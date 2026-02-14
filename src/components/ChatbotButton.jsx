import React from 'react'

function ChatbotButton(props) {
    var onChatbotClick = props.onChatbotClick

    return (
        <div className="chatbot-button" onClick={onChatbotClick}>
            <img
                src="/images/chatbot-icon.gif"
                alt="Chat with us"
                className="chatbot-gif"
            />
        </div>
    )
}

export default ChatbotButton
