import React, { useState } from 'react';

function ServiceCard({ title, description, gradient }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="service-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="service-card-inner">
                {/* Image slides to the right on hover */}
                <div className={`service-image ${isHovered ? 'slide-right' : ''}`}>
                    <div
                        className="service-placeholder"
                        style={{
                            background: gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            color: '#666'
                        }}
                    >
                        {title} Image
                    </div>
                </div>

                {/* Text content appears as image slides */}
                <div className={`service-text-content ${isHovered ? 'visible' : ''}`}>
                    <h3 className="service-name">{title}</h3>
                    <p className="service-description">{description}</p>
                    <span className="service-arrow">→</span>
                </div>
            </div>

            <div className="service-footer">
                <h3 className="service-title">{title.split(' ').join('\n')}</h3>
                <span className="service-arrow-footer">→</span>
            </div>
        </div>
    );
}

export default ServiceCard;