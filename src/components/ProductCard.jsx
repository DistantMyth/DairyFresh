import React from 'react'

function ProductCard(props) {
    var title = props.title
    var description = props.description
    var price = props.price
    var imageSrc = props.imageSrc
    var imageDarkSrc = props.imageDarkSrc
    var isDarkMode = props.isDarkMode
    var onProductClick = props.onProductClick

    var currentImage = isDarkMode ? imageDarkSrc : imageSrc

    function handleCardClick() {
        if (onProductClick) {
            onProductClick()
        }
    }

    function handleSubscribeClick(event) {
        event.stopPropagation()
        if (onProductClick) {
            onProductClick()
        }
    }

    return (
        <div className="card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <h3>{title}</h3>
            <div className="image-placeholder">
                <img
                    src={currentImage}
                    alt={title}
                    className="product-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                />
            </div>
            <div className="card-content">
                <p>{description}</p>
                <p><strong>{price}</strong></p>
                <button className="btn-small" onClick={handleSubscribeClick}>Add to Cart 🛒</button>
            </div>
        </div>
    )
}

export default ProductCard
