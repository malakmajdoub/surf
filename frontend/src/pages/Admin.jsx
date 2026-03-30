import React, { useState, useEffect } from 'react';
import { CalendarCheck, Users, Briefcase } from 'lucide-react';
import './Admin.css';

const Admin = () => {
    const [bookings, setBookings] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [bookingsRes, servicesRes] = await Promise.all([
                    fetch('http://localhost:5000/api/bookings'),
                    fetch('http://localhost:5000/api/services')
                ]);

                const bookingsData = await bookingsRes.json();
                const servicesData = await servicesRes.json();

                // Sort bookings by date descending
                const sortedBookings = bookingsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                setBookings(sortedBookings);
                setServices(servicesData);
            } catch (err) {
                console.error("Error fetching admin data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="admin-page"><div className="container">Loading Dashboard...</div></div>;

    return (
        <div className="admin-page section animate-fade-in">
            <div className="container">

                <div className="admin-header">
                    <h2>Admin Dashboard</h2>
                    <p>Manage WaveNest Operations</p>
                </div>

                <div className="admin-stats">
                    <div className="stat-card">
                        <CalendarCheck className="stat-icon" />
                        <div className="stat-info">
                            <h3>{bookings.length}</h3>
                            <span>Total Bookings</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <Users className="stat-icon" />
                        <div className="stat-info">
                            <h3>{new Set(bookings.map(b => b.user_id?.email)).size}</h3>
                            <span>Unique Guests</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <Briefcase className="stat-icon" />
                        <div className="stat-info">
                            <h3>{services.length}</h3>
                            <span>Active Services</span>
                        </div>
                    </div>
                </div>

                <div className="admin-sections">

                    <div className="admin-panel mb-5">
                        <h3>Recent Bookings</h3>
                        <div className="table-wrapper">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Date Created</th>
                                        <th>Guest Details</th>
                                        <th>Service</th>
                                        <th>Reservation Date</th>
                                        <th>Duration</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map(b => (
                                        <tr key={b._id}>
                                            <td>{new Date(b.createdAt).toLocaleDateString()}</td>
                                            <td>
                                                <strong>{b.user_id?.name || 'Unknown'}</strong><br />
                                                <span className="text-sm">{b.user_id?.email}</span>
                                            </td>
                                            <td>{b.service_type?.name || 'N/A'}</td>
                                            <td>{new Date(b.date).toLocaleDateString()}</td>
                                            <td>{b.duration} {b.service_type?.category === 'room' ? 'Nights' : 'Hours'}</td>
                                            <td>
                                                <span className={`badge badge-${b.status}`}>
                                                    {b.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {bookings.length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="text-center">No bookings found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="admin-panel">
                        <h3>Services Catalog</h3>
                        <div className="table-wrapper">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services.map(s => (
                                        <tr key={s._id}>
                                            <td>{s.name}</td>
                                            <td style={{ textTransform: 'capitalize' }}>{s.category}</td>
                                            <td>${s.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Admin;
