import React from 'react';
import ServiceCard from './ServiceCard';

function ServicesSection({ isVisible }) {
    const services = [
        {
            title: "MMA Training",
            description: "MMA training offers a full-body workout that builds strength, endurance, and discipline. With a focus on striking, grappling, and conditioning, it enhances both physical fitness and mental toughness.",
            gradient: "linear-gradient(135deg, #1a3a4a 0%, #2a4a5a 100%)"
        },
        {
            title: "Fitness Training",
            description: "Comprehensive fitness programs designed to improve overall health, strength, and endurance through customized workout plans.",
            gradient: "linear-gradient(135deg, #3a1a4a 0%, #4a2a5a 100%)"
        },
        {
            title: "Self Defense",
            description: "Learn practical self-defense techniques that can keep you safe in real-world situations with confidence and skill.",
            gradient: "linear-gradient(135deg, #4a1a1a 0%, #5a2a2a 100%)"
        }
    ];

    return (
        <section className={`services-section fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="section-title">The HERO MMA services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        gradient={service.gradient}
                    />
                ))}
            </div>
        </section>
    );
}

export default ServicesSection;