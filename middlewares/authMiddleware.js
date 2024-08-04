import jwt from 'jsonwebtoken';
import { ApplicationError } from './errorHandler.js';

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return next(new ApplicationError(401, 'Access denied.'));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        next(new ApplicationError(400, 'Invalid token.'));
    }
};

export default authMiddleware;
