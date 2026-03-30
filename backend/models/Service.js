import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: false },
    category: { type: String, enum: ['room', 'surf', 'cafe', 'event'], required: true },
    image: { type: String, required: false }
}, { timestamps: true });

export default mongoose.models.Service || mongoose.model('Service', serviceSchema);
