import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page animate-fade-in">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <img src="/assets/images/hero_surf.png" alt="WaveNest Surf Club Deck at Sunset" className="hero-bg" />
                <div className="hero-content container">
                    <h1 className="hero-title">Ride the Tide.<br />Rest in Style.</h1>
                    <p className="hero-subtitle">The ultimate blend of surf culture and modern hospitality on the coastline.</p>
                    <div className="hero-actions">
                        <Link to="/booking" className="btn btn-primary">Book a Room</Link>
                        <Link to="/services" className="btn btn-outline">Join Surf Session</Link>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="intro section container">
                <div className="intro-grid">
                    <div className="intro-text">
                        <Waves className="intro-icon" size={48} />
                        <h2>Welcome to WaveNest</h2>
                        <p>
                            Born from a passion for the ocean and a desire for sanctuary, WaveNest is more
                            than a hotel—it's a lifestyle destination. Whether you're chasing the perfect wave
                            at dawn or seeking a tranquil escape by the shore, we provide an unparalleled coastal experience.
                        </p>
                        <Link to="/about" className="link-arrow">
                            Discover Our Story <ArrowRight size={20} />
                        </Link>
                    </div>
                    <div className="intro-images">
                        <div className="img-wrapper slide-up-1">
                            <img src="/assets/images/hotel_room.png" alt="Luxurious Room" />
                        </div>
                        <div className="img-wrapper slide-up-2 offset">
                            <img src="/assets/images/surf_session.png" alt="Surf Session" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
