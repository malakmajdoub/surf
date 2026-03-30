import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page animate-fade-in">

            {/* Concept Section */}
            <section className="about-concept container section">
                <div className="concept-grid">
                    <div className="concept-text">
                        <h2>Our Concept</h2>
                        <p className="lead-text">
                            WaveNest isn't just a place to sleep; it's a sanctuary where the rhythm of
                            the ocean dictates the pace of life.
                        </p>
                        <p>
                            We built WaveNest with a simple philosophy in mind: connection. Connection to the
                            ocean, connection to oneself, and connection to a community of like-minded travelers
                            and ocean lovers. Every detail of our property, from the locally sourced materials
                            to our curated surf sessions, has been designed to offer an immersive coastal experience.
                        </p>
                    </div>
                    <div className="concept-image img-wrapper">
                        <img src="/assets/images/hero_surf.png" alt="WaveNest Lifestyle" />
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="founder-section">
                <div className="container">
                    <div className="founder-grid">
                        <div className="founder-image img-wrapper">
                            <img src="/assets/images/founder_portrait.png" alt="Malak Majdoub, Founder" />
                        </div>
                        <div className="founder-text">
                            <span className="subtitle">The Visionary</span>
                            <h2>Meet Malak Majdoub</h2>
                            <p>
                                "I wanted to create a place that felt like home but offered the ultimate escape.
                                A place where you could wake up, grab a board, and be in the water in five minutes—then
                                return to a beautifully designed space that instantly relaxes you."
                            </p>
                            <p>
                                Malak combined her love for surfing and her eye for high-end design to
                                bring WaveNest to life. Her vision is what makes every stay here uniquely personal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
