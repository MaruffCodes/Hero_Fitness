import React from 'react';
import VideoItem from './VideoItem';

function VideoSection({ isVisible }) {
    const videos = [
        { title: "You get what you work for...", duration: "03:45" },
        { title: "Let's go girls", duration: "02:30" },
        { title: "The youngest fighter to attend...", duration: "04:15" },
        { title: "The Hero who is not a number", duration: "05:20" }
    ];

    return (
        <section className={`video-section fade-in-section ${isVisible ? 'is-visible' : ''}`} id="gallery">
            <h2 className="section-title">TESTIMONIAL PLAYLIST</h2>
            <div className="video-playlist">
                {videos.map((video, index) => (
                    <VideoItem
                        key={index}
                        title={video.title}
                        duration={video.duration}
                    />
                ))}
            </div>
        </section>
    );
}

export default VideoSection;