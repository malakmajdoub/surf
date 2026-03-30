import React from 'react';
import './Gallery.css';

const Gallery = () => {
    const images = [
        { src: "/assets/images/hero_surf.png", span: "row-2 col-2", alt: "Sunset Surf Deck" },
        { src: "/assets/images/hotel_room.png", span: "", alt: "Luxurious Room" },
        { src: "/assets/images/surf_session.png", span: "", alt: "Group Surf Session" },
        { src: "/assets/images/cafe_ocean.png", span: "col-2", alt: "Ocean Cafe" },
        { src: "/assets/images/events_sunset.png", span: "row-2", alt: "Sunset Event" },
        { src: "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=800&q=80", span: "", alt: "Ocean Details" },
        { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", span: "", alt: "Founder" },
        { src: "https://images.unsplash.com/photo-1414443444433-f57134311026?auto=format&fit=crop&w=800&q=80", span: "col-2", alt: "Beautiful Wave" }
    ];

    return (
        <div className="gallery-page animate-fade-in section container">
            <div className="text-center mb-5">
                <h2>Our Gallery</h2>
                <p className="subtitle">Glimpses of life at WaveNest.</p>
            </div>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div className={`gallery-item ${img.span}`} key={index}>
                        <div className="gallery-img-wrapper">
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>{img.alt}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
