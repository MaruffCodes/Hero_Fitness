import React, { useState, useEffect } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import CoachSection from './components/CoachSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

function App() {
    const [visibleSections, setVisibleSections] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.fade-in-section');
            const newVisibleSections = [];

            sections.forEach((section, index) => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight * 0.75) {
                    newVisibleSections.push(index);
                }
            });

            setVisibleSections(newVisibleSections);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="App">
            <HeroSection />
            <CoachSection isVisible={visibleSections.includes(0)} />
            <ServicesSection isVisible={visibleSections.includes(1)} />
            <TestimonialsSection isVisible={visibleSections.includes(2)} />
            <VideoSection isVisible={visibleSections.includes(3)} />
            <Footer />
        </div>
    );
}

export default App;