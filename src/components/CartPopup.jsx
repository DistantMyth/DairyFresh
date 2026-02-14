import React from 'react'
import Popup from './Popup.jsx'

function CartPopup(props) {
    var isOpen = props.isOpen
    var onClose = props.onClose
    var cartItems = props.cartItems
    var onRemoveItem = props.onRemoveItem
    var onUpdateQuantity = props.onUpdateQuantity
    var onCheckout = props.onCheckout

    function calculateTotal() {
        var total = 0
        for (var i = 0; i < cartItems.length; i = i + 1) {
            var item = cartItems[i]
            var priceString = item.price.replace('₹', '').split('/')[0]
            var price = parseInt(priceString, 10)
            total = total + (price * item.quantity)
        }
        return total
    }

    function handleDecrease(index) {
        var item = cartItems[index]
        if (item.quantity > 1) {
            onUpdateQuantity(index, item.quantity - 1)
        }
    }

    function handleIncrease(index) {
        var item = cartItems[index]
        if (item.quantity < 10) {
            onUpdateQuantity(index, item.quantity + 1)
        }
    }

    return (
        <Popup isOpen={isOpen} onClose={onClose} title="🛒 Your Cart" size="large">
            <div className="cart-container">
                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <div className="cart-empty-icon">🛒</div>
                        <h3>Your cart is empty</h3>
                        <p>Add some delicious dairy products!</p>
                        <button className="btn" onClick={onClose}>Continue Shopping</button>
                    </div>
                ) : (
                    <div className="cart-content">
                        <div className="cart-items">
                            {cartItems.map(function (item, index) {
                                return (
                                    <div key={index} className="cart-item">
                                        <div className="cart-item-info">
                                            <h4>{item.title}</h4>
                                            <p>{item.price}</p>
                                        </div>
                                        <div className="cart-item-controls">
                                            <div className="quantity-controls">
                                                <button className="quantity-btn" onClick={function () { handleDecrease(index) }}>−</button>
                                                <span className="quantity-value">{item.quantity}</span>
                                                <button className="quantity-btn" onClick={function () { handleIncrease(index) }}>+</button>
                                            </div>
                                            <button className="cart-remove-btn" onClick={function () { onRemoveItem(index) }}>🗑️</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>Total:</span>
                                <span className="cart-total-amount">₹{calculateTotal()}</span>
                            </div>
                            <button className="btn cart-checkout-btn" onClick={onCheckout}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Popup>
    )
}

export default CartPopup
