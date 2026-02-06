import React from 'react';

function Navigation({ menuOpen, scrollToSection }) {
    return (
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul>
                <li>
                    <a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('hero');
                        }}
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('about');
                        }}
                    >
                        About
                    </a>
                </li>

                <li>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('contact');
                        }}
                    >
                        Contact
                    </a>
                </li>

                <li>
                    <a
                        href="#gallery"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('gallery');
                        }}
                    >
                        Gallery
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
