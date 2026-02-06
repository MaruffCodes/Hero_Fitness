import React from 'react';

function VideoItem({ title, duration }) {
    return (
        <div className="video-item">
            <div className="play-icon">▶</div>
            <div className="video-info">
                <h4>{title}</h4>
                <span className="video-duration">{duration}</span>
            </div>
        </div>
    );
}

export default VideoItem;