import 'dotenv/config'
import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import errorHandler from './middlewares/errorHandler.js';
import setupMongoose from './config/db.js';
import movieRouter from './routes/movieRoutes.js';
import logHandler from './middlewares/logger.js';
import authRouter from './routes/authRoutes.js';





// express app 
const app = express();
// middlewares 
app.use(express.json());
app.use(urlencoded({ extended: true }))
app.use(cookieParser());
app.use(cors({
    origin: 'https://inventory-management-31n6.vercel.app', // Allow requests only from this domain
    credentials: true, // Allow cookies to be included
}));
app.use(logHandler)

// routes
app.use('/api/movies', movieRouter)
app.use('/api/auth', authRouter);


// 404 route 
app.use((req, res) => {
    return res.status(404).send({ sucess: false, msg: "Path not Found " })
})

// Error handling middleware should be the last middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    setupMongoose()
    console.log(`Server is running on port ${PORT}`);
});
