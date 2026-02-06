import React, { useState } from 'react';

function CoachSection({ isVisible }) {
    const [bioExpanded, setBioExpanded] = useState(false);

    const toggleBio = () => {
        setBioExpanded(!bioExpanded);
    };

    return (
        <section className={`coach-section fade-in-section ${isVisible ? 'is-visible' : ''}`} id="about">
            <div className="coach-image">
                <div className="coach-placeholder">Coach Image Placeholder</div>
            </div>
            <div className="coach-info">
                <div className="coach-title">COACH</div>
                <h2 className="coach-name">ZAYEEN KHAN</h2>
                <div className={`coach-bio ${bioExpanded ? 'expanded' : ''}`}>
                    <p>India's First Professional International MMA Fighter</p>
                    <p>Ex-CISF (Central Industrial Security Force) Serviceman</p>
                    <p>17 years Experience In MMA Industry, Fought And Trained World-Wide.</p>
                    <p>Trained Under International MMA Coaches.</p>
                    <p className="hidden-content">(Legacy Gym) Thailand For Muay-Thai. (China Top Team, China And Brazil) For Brazilian Jiu-Jitsu Russia Etc...</p>
                    <p className="hidden-content">Fought in the Organization name</p>
                    <p className="hidden-content">Art of War) Beijing China.</p>
                    <p className="hidden-content">(Legend Fighting Championship) Hong Kong.</p>
                    <p className="hidden-content">(Phoenix Championship) Manila laranatan.</p>
                    <p className="hidden-content">(Xplozion Fights) Macau Hong Kong</p>
                    <p className="hidden-content">Gold Medalist In National's (Clash Of The Champions) Continue In Your 2015-08 & 17.</p>
                </div>
                <span className="read-more" onClick={toggleBio}>
                    {bioExpanded ? 'Read less...' : 'Read more...'}
                </span>
            </div>
        </section>
    );
}

export default CoachSection;