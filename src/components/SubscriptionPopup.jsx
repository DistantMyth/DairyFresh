import React from 'react'
import { useState } from 'react'
import Popup from './Popup.jsx'

function SubscriptionPopup(props) {
    var isOpen = props.isOpen
    var onClose = props.onClose
    var productName = props.productName
    var onSubscribe = props.onSubscribe

    var frequencyState = useState('daily')
    var frequency = frequencyState[0]
    var setFrequency = frequencyState[1]

    var quantityState = useState(1)
    var quantity = quantityState[0]
    var setQuantity = quantityState[1]

    var successState = useState(false)
    var showSuccess = successState[0]
    var setShowSuccess = successState[1]

    function handleSubmit(event) {
        event.preventDefault()
        setShowSuccess(true)
        if (onSubscribe) {
            onSubscribe({
                product: productName,
                frequency: frequency,
                quantity: quantity
            })
        }
        setTimeout(function () {
            setShowSuccess(false)
            setFrequency('daily')
            setQuantity(1)
            onClose()
        }, 2000)
    }

    function handleQuantityChange(event) {
        var newValue = parseInt(event.target.value, 10)
        if (newValue >= 1 && newValue <= 20) {
            setQuantity(newValue)
        }
    }

    function handleFrequencyChange(event) {
        setFrequency(event.target.value)
    }

    var title = productName ? 'Subscribe to ' + productName : 'Start Your Subscription'

    return (
        <Popup isOpen={isOpen} onClose={onClose} title={title}>
            {showSuccess === true ? (
                <div className="subscription-success">
                    <div className="success-icon">✓</div>
                    <h3>Subscription Confirmed!</h3>
                    <p>You will receive {quantity} items {frequency}</p>
                </div>
            ) : (
                <form className="subscription-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Delivery Frequency</label>
                        <select value={frequency} onChange={handleFrequencyChange} className="subscription-select">
                            <option value="daily">Daily</option>
                            <option value="alternate">Alternate Days</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                            max="20"
                            className="subscription-input"
                        />
                    </div>

                    <div className="subscription-summary">
                        <p>📦 {quantity} item(s) delivered {frequency}</p>
                        <p>🚚 Free delivery on all subscriptions!</p>
                    </div>

                    <button type="submit" className="btn subscription-submit-btn">
                        ✓ Confirm Subscription
                    </button>
                </form>
            )}
        </Popup>
    )
}

export default SubscriptionPopup
