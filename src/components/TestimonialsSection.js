import React from 'react';
import TestimonialCard from './TestimonialCard';

function TestimonialsSection({ isVisible }) {
    const testimonials = [
        {
            text: "Training at HERO MMA has completely transformed my fitness level and confidence. The coaches are world-class!",
            author: "John Doe"
        },
        {
            text: "Best MMA academy in Pune! The facilities are top-notch and the training methodology is exceptional.",
            author: "Jane Smith"
        },
        {
            text: "Coach Zayeen's expertise and dedication to teaching is unmatched. Highly recommend for serious fighters!",
            author: "Mike Johnson"
        },
        {
            text: "From complete beginner to competing in tournaments - HERO MMA made it possible. Amazing community!",
            author: "Sarah Williams"
        }
    ];

    return (
        <section className={`testimonials-section fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="section-title">TESTIMONIALS</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        text={testimonial.text}
                        author={testimonial.author}
                    />
                ))}
            </div>
        </section>
    );
}

export default TestimonialsSection;