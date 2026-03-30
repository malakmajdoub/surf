import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import Service from './models/Service.js';
import User from './models/User.js';
import Booking from './models/Booking.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/wavenest';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Initial seed script for services if DB is empty
const seedServices = async () => {
    const count = await Service.countDocuments();
    if (count === 0) {
        await Service.insertMany([
            { name: 'Standard Room', description: 'Cozy room with ocean view.', price: 150, category: 'room' },
            { name: 'Suite', description: 'Luxury suite with balcony.', price: 300, category: 'room' },
            { name: 'Beginner Surf Lesson', description: '2-hour beginner friendly surf lesson.', price: 50, category: 'surf' },
            { name: 'Advanced Surf Guide', description: 'Half-day guiding for experienced surfers.', price: 120, category: 'surf' }
        ]);
        console.log('Seeded initial services');
    }
};
mongoose.connection.once('open', seedServices);

// API Routes

// Get all services
app.get('/api/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ error: 'Server error fetching services.' });
    }
});

// Create a booking
app.post('/api/bookings', async (req, res) => {
    try {
        const { name, email, service_type, date, duration } = req.body;

        // Find or create user
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ name, email });
        }

        // Create booking
        const booking = new Booking({
            user_id: user._id,
            service_type,
            date,
            duration,
        });
        await booking.save();

        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (err) {
        console.error('Booking error:', err);
        res.status(500).json({ error: 'Server error creating booking.' });
    }
});

// Admin: Get all bookings
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user_id').populate('service_type');
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: 'Server error fetching bookings.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
