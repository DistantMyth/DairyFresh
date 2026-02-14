import React from 'react'

function Popup(props) {
    var isOpen = props.isOpen
    var onClose = props.onClose
    var title = props.title
    var children = props.children
    var size = props.size

    if (isOpen === false) {
        return null
    }

    var popupClassName = 'popup-content'
    if (size === 'large') {
        popupClassName = 'popup-content popup-large'
    }
    if (size === 'small') {
        popupClassName = 'popup-content popup-small'
    }

    function handleOverlayClick(event) {
        if (event.target.className === 'popup-overlay') {
            onClose()
        }
    }

    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className={popupClassName}>
                <div className="popup-header">
                    <h3 className="popup-title">{title}</h3>
                    <button className="popup-close" onClick={onClose}>×</button>
                </div>
                <div className="popup-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popup
