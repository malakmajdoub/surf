import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Waves, Coffee, Calendar } from 'lucide-react';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch directly from our API
        fetch('http://localhost:5000/api/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error("Error fetching services:", err));
    }, []);

    const getIcon = (category) => {
        switch (category) {
            case 'room': return <Bed size={32} />;
            case 'surf': return <Waves size={32} />;
            case 'cafe': return <Coffee size={32} />;
            case 'event': return <Calendar size={32} />;
            default: return <Waves size={32} />;
        }
    };

    const servicesData = [
        {
            title: "The Hotel",
            description: "Wake up to the sound of waves. Our beautifully designed rooms and suites blend minimalist luxury with rustic coastal elements.",
            image: "/assets/images/hotel_room.png",
            category: 'room'
        },
        {
            title: "Surf Club",
            description: "Join our expert instructors for daily sessions. Whether you're catching your first white water or hunting barrels, we have you covered.",
            image: "/assets/images/surf_session.png",
            category: 'surf'
        },
        {
            title: "Ocean Cafe",
            description: "Savor local flavors, fresh coffee, and smoothie bowls right on the deck. The perfect spot to recharge between sessions.",
            image: "/assets/images/cafe_ocean.png",
            category: 'cafe'
        },
        {
            title: "Sunset Events",
            description: "Experience the vibrant community at WaveNest. From acoustic sunset sessions to beach bonfires, every evening is magic.",
            image: "/assets/images/events_sunset.png",
            category: 'event'
        }
    ];

    return (
        <div className="services-page animate-fade-in">
            <div className="page-header">
                <div className="container">
                    <h1>Experience WaveNest</h1>
                    <p>Everything you need for the perfect coastal escape.</p>
                </div>
            </div>

            <div className="container section">
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-img-container">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="service-content">
                                <div className="service-icon">{getIcon(service.category)}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <Link to="/booking" className="link-arrow mt-auto">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pricing from API section */}
            <div className="pricing-section bg-light section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2>Current Rates</h2>
                        <p className="subtitle">Book in advance to secure your spot</p>
                    </div>

                    <div className="pricing-grid">
                        {services.map(s => (
                            <div className="pricing-card" key={s._id}>
                                <h4>{s.name}</h4>
                                <p>{s.description}</p>
                                <div className="price">${s.price} <span>/ session</span></div>
                                <Link to="/booking" className="btn btn-outline btn-full">Select</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
