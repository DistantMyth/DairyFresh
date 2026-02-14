import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function VideoBackground(props) {
    var isDarkMode = props.isDarkMode
    var videoRef = useRef(null)

    var videoSrc = isDarkMode ? '/videos/background_dark.mp4' : '/videos/background.mp4'
    var posterSrc = isDarkMode ? '/images/video-poster_dark.jpg' : '/images/video-poster.jpg'

    useEffect(function () {
        if (videoRef.current) {
            videoRef.current.load()
        }
    }, [isDarkMode])

    return (
        <video
            ref={videoRef}
            className="video-background"
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
        >
            <source src={videoSrc} type="video/mp4" />
        </video>
    )
}

export default VideoBackground
