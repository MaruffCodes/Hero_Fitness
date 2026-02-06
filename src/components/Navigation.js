import React from 'react';

function Navigation({ menuOpen, scrollToSection }) {
    return (
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul>
                <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
                <li><a onClick={() => scrollToSection('about')}>About</a></li>
                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                <li><a onClick={() => scrollToSection('gallery')}>Gallery</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
