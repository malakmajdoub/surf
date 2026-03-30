import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page animate-fade-in section">
            <div className="container contact-container">

                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p className="lead-text">We'd love to hear from you. Reach out with any questions or special requests.</p>

                    <div className="info-cards">
                        <div className="info-card">
                            <MapPin className="info-icon" />
                            <div>
                                <h4>Location</h4>
                                <p>123 Ocean Drive, Surf City<br />Coastal State, 90210</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <Phone className="info-icon" />
                            <div>
                                <h4>Phone</h4>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <Mail className="info-icon" />
                            <div>
                                <h4>Email</h4>
                                <p>hello@wavenest.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-socials mt-5">
                        <h4>Follow Our Journey</h4>
                        <div className="social-links dark">
                            <a href="#" className="social-icon"><Instagram /></a>
                            <a href="#" className="social-icon"><Facebook /></a>
                            <a href="#" className="social-icon"><Twitter /></a>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form">
                        <h3>Send a Message</h3>
                        <div className="form-group row">
                            <div className="col">
                                <label>First Name</label>
                                <input type="text" placeholder="Jane" />
                            </div>
                            <div className="col">
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="jane@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="btn btn-primary btn-submit">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
