import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function QuoteSection() {
    var quotes = [
        {
            text: "Fresh milk delivered to your doorstep every morning!",
            author: "DairyFresh Promise"
        },
        {
            text: "From our farm to your family - pure and natural.",
            author: "Our Commitment"
        },
        {
            text: "Quality you can taste, freshness you can feel.",
            author: "DairyFresh Guarantee"
        },
        {
            text: "Supporting local farms, serving fresh dairy daily.",
            author: "Community First"
        },
        {
            text: "100% pure milk with no additives or preservatives.",
            author: "Natural Goodness"
        },
        {
            text: "Happy cows make the best milk!",
            author: "Farm Fresh"
        },
        {
            text: "Subscribe today and never run out of fresh dairy.",
            author: "Daily Convenience"
        },
        {
            text: "Organic, ethical, and delicious dairy products.",
            author: "DairyFresh Values"
        }
    ]

    var indexState = useState(0)
    var currentIndex = indexState[0]
    var setCurrentIndex = indexState[1]

    var opacityState = useState(1)
    var opacity = opacityState[0]
    var setOpacity = opacityState[1]

    useEffect(function () {
        var interval = setInterval(function () {
            setOpacity(0)

            setTimeout(function () {
                setCurrentIndex(function (prevIndex) {
                    var nextIndex = prevIndex + 1
                    if (nextIndex >= quotes.length) {
                        return 0
                    }
                    return nextIndex
                })
                setOpacity(1)
            }, 500)
        }, 5000)

        return function () {
            clearInterval(interval)
        }
    }, [quotes.length])

    var currentQuote = quotes[currentIndex]

    return (
        <div className="quote-section" id="quoteSection">
            <div className="quote-text" style={{ opacity: opacity, transition: 'opacity 0.5s' }}>
                "{currentQuote.text}"
            </div>
            <div className="quote-author" style={{ opacity: opacity, transition: 'opacity 0.5s' }}>
                - {currentQuote.author}
            </div>
        </div>
    )
}

export default QuoteSection
