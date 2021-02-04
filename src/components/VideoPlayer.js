import React from 'react'

const VideoPlayer = ({ videoId, videoTitle, channelName }) => {
    if (!videoId) {
        return null
    }
    return(
        <div>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={`https://www.youtube.com/embed/${videoId}`} title={videoId} />
            </div>
            <div>
                <h4>{videoTitle}</h4>
                <h6>{channelName}</h6>
            </div>
        </div>
    )
}

export default VideoPlayer
