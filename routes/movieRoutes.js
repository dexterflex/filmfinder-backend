import express from 'express';
import { addFavoriteMovie, getFavoriteMovies, removeFavoriteMovie, getMovies, getMovieById, searchMoviesByName } from '../controllers/movieController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const movieRouter = express.Router();

movieRouter.get('/popular', getMovies);
movieRouter.get('/search', searchMoviesByName);
movieRouter.get('/favorites', authMiddleware, getFavoriteMovies);
movieRouter.get('/:movieId', getMovieById);

movieRouter.post('/favorites', authMiddleware, addFavoriteMovie);

movieRouter.delete('/favorites/:movieId', authMiddleware, removeFavoriteMovie);

export default movieRouter;
