import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ApplicationError } from '../middlewares/errorHandler.js';

const secret = process.env.JWT_SECRET || 'your_jwt_secret'; // Ensure to set this in your .env file

class UserRepository {
    // Register a new user
    static async register({ name, email, password }) {
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                throw new ApplicationError(400, 'Email already in use');
            }
            const user = new User({ name, email, password });
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }

    // Login a user
    static async login({ email, password }) {
        try {
            const user = await User.findOne({ email: { $regex: new RegExp(email, 'i') } });
            if (!user) {
                throw new ApplicationError(401, 'Authentication failed');
            }
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                throw new ApplicationError(401, 'Authentication failed');
            }
            const token = jwt.sign({ id: user._id, email: user.email }, secret, { expiresIn: '2d' });
            return { user, token };
        } catch (error) {
            throw error;
        }
    }
}

export default UserRepository;
