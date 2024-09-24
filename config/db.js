import mongoose from 'mongoose';
import { ApplicationError } from '../middlewares/errorHandler.js';
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.
            MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed', error);
        throw new ApplicationError(500, 'Failed to connect to database');
    }
};

export default connectDB;
