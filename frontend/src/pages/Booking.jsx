import React, { useState, useEffect } from 'react';
import './Booking.css';

const Booking = () => {
    const [services, setServices] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service_type: '',
        date: '',
        duration: 1
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        fetch('http://localhost:5000/api/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                if (data.length > 0) {
                    setFormData(prev => ({ ...prev, service_type: data[0]._id }));
                }
            })
            .catch(err => console.error("Error fetching services:", err));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Processing your booking...' });

        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Booking confirmed! We will contact you shortly.' });
                setFormData({ name: '', email: '', service_type: services[0]?._id, date: '', duration: 1 });
            } else {
                setStatus({ type: 'error', message: data.error || 'Failed to book. Please try again.' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Network error. Make sure the backend server is running.' });
        }
    };

    const selectedServiceObj = services.find(s => s._id === formData.service_type);
    const isRoom = selectedServiceObj && selectedServiceObj.category === 'room';

    return (
        <div className="booking-page animate-fade-in section">
            <div className="container booking-container">

                <div className="booking-info">
                    <h2>Secure Your Spot</h2>
                    <p>
                        Ready to experience WaveNest? Fill out the form to request a reservation for a room or a surf session.
                        Our team will get back to you within 24 hours with a confirmation.
                    </p>
                    <div className="booking-image img-wrapper mt-5">
                        <img src="/assets/images/hero_surf.png" alt="WaveNest Lifestyle" />
                    </div>
                </div>

                <div className="booking-form-wrapper">
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <h3>Reservation Details</h3>

                        {status.message && (
                            <div className={`status-message ${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <div className="form-group row">
                            <div className="col">
                                <label>Full Name</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                            </div>
                            <div className="col">
                                <label>Email Address</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Select Service</label>
                            <select name="service_type" required value={formData.service_type} onChange={handleChange}>
                                {services.map(s => (
                                    <option key={s._id} value={s._id}>{s.name} - ${s.price}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group row">
                            <div className="col">
                                <label>Date</label>
                                <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label>Duration ({isRoom ? 'Nights' : 'Hours'})</label>
                                <input type="number" name="duration" min="1" required value={formData.duration} onChange={handleChange} />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-submit" disabled={status.type === 'loading'}>
                            {status.type === 'loading' ? 'Processing...' : 'Confirm Reservation'}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Booking;
