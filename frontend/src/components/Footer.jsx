import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Waves } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand animate-fade-in">
                    <Link to="/" className="footer-logo">
                        <Waves className="logo-icon" />
                        <span>WaveNest</span>
                    </Link>
                    <p className="footer-description">
                        Experience the ultimate blend of surf culture and modern hospitality.
                        Your digital extension of the physical experience.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><Instagram /></a>
                        <a href="#" className="social-icon"><Facebook /></a>
                        <a href="#" className="social-icon"><Twitter /></a>
                    </div>
                </div>

                <div className="footer-links-wrapper">
                    <div className="footer-links animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <h3>Explore</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">Our Story</Link></li>
                            <li><Link to="/services">Services & Club</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h3>Support</h3>
                        <ul>
                            <li><Link to="/booking">Book Now</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-links animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <h3>Contact Info</h3>
                        <ul className="contact-info">
                            <li>123 Ocean Drive, Surf City</li>
                            <li>+1 (555) 123-4567</li>
                            <li>hello@wavenest.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} WaveNest - Surf Hotel & Ocean Club. Created by Malak Majdoub.</p>
            </div>
        </footer>
    );
};

export default Footer;
