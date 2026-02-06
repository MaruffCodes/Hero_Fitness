import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';

function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById('hero');
            if (!hero) return;

            const heroBottom = hero.getBoundingClientRect().bottom;
            setShowNav(heroBottom > 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero-section" id="hero">
            <div className="logo">HERO</div>

            {showNav && (
                <>
                    <div
                        className={`hamburger ${menuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <Navigation
                        menuOpen={menuOpen}
                        scrollToSection={scrollToSection}
                    />
                </>
            )}

            <div className="hero-content">
                <h1>
                    THE<br />HERO<br />MMA<br />&<br />FITNESS<br />GYM
                </h1>
                <p>
                    Train like a pro at the top MMA Training Academy in Pune and Nashik
                </p>
            </div>

            <div className="bottom-banner">
                <div className="banner-logo">
                    <svg viewBox="0 0 100 100">
                        <circle cx="30" cy="30" r="25" fill="none" stroke="#ff9800" strokeWidth="3" />
                        <circle cx="70" cy="30" r="25" fill="none" stroke="#ff9800" strokeWidth="3" />
                        <rect x="25" y="50" width="50" height="40" fill="none" stroke="#ff9800" strokeWidth="3" />
                    </svg>
                </div>
                <div className="banner-text">
                    <h3>The More You Train Hard, The More You Fight Smart</h3>
                    <p>Book your trial now</p>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
