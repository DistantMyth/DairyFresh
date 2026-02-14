import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Toast(props) {
    var message = props.message
    var isVisible = props.isVisible
    var onHide = props.onHide
    var type = props.type

    useEffect(function () {
        if (isVisible === true) {
            var timer = setTimeout(function () {
                onHide()
            }, 3000)
            return function () {
                clearTimeout(timer)
            }
        }
    }, [isVisible, onHide])

    if (isVisible === false) {
        return null
    }

    var toastClassName = 'toast toast-success'
    if (type === 'error') {
        toastClassName = 'toast toast-error'
    }
    if (type === 'info') {
        toastClassName = 'toast toast-info'
    }

    return (
        <div className={toastClassName}>
            <span className="toast-icon">
                {type === 'success' && '✓'}
                {type === 'error' && '✗'}
                {type === 'info' && 'ℹ'}
                {type !== 'success' && type !== 'error' && type !== 'info' && '✓'}
            </span>
            <span className="toast-message">{message}</span>
        </div>
    )
}

export default Toast
