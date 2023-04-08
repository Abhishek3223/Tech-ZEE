import React from 'react'
import './Screen.css'

import VideoPlayer from './VideoPlayer';

const Screen = () => {
    return (
        <div className='Scren-part'>
            <div className='video-container'>
                <VideoPlayer />
            </div>
        </div>
    )
}

export default Screen