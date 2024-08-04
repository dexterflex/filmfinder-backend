import MovieRepository from '../repositories/movie.repository.js';
import { ApplicationError } from '../middlewares/errorHandler.js';

// Add a movie to the user's list of favorite movies
export const addFavoriteMovie = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const movie = req.body;
        movie.movieId = movie.id;
        const favoriteMovie = await MovieRepository.addFavoriteMovie(userId, movie);
        res.status(201).send({ success: true, msg: 'Movie added to favorites', favoriteMovie });
    } catch (error) {
        console.log(error)
        next(error);
    }
};

// Get the list of favorite movies for the logged-in user
export const getFavoriteMovies = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const favoriteMovies = await MovieRepository.getFavoriteMovies(userId);
        res.status(200).send({ success: true, load: favoriteMovies });
    } catch (error) {
        next(error);
    }
};

// Remove a movie from the user's list of favorite movies
export const removeFavoriteMovie = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const movieId = req.params.movieId;
        const result = await MovieRepository.removeFavoriteMovie(userId, movieId);
        res.status(200).send({ success: true, msg: 'Movie removed from favorites' });
    } catch (error) {
        next(error);
    }
};

export const getMovies = async (req, res, next) => {
    try {
        const page = req.query.page || 1;
        const movies = await MovieRepository.getMovies(page);
        return res.status(200).json({ success: true, msg: "Movie List", load: movies });
    } catch (error) {
        next(new ApplicationError(500, error.message));
    }
};

export const getMovieById = async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        const movie = await MovieRepository.getMovieById(movieId);
        return res.status(200).json({ success: true, msg: "Movie Details", load: movie });
    } catch (error) {
        next(new ApplicationError(500, error.message));
    }
};

export const searchMoviesByName = async (req, res, next) => {
    try {
        const query = req.query.query;
        const movies = await MovieRepository.searchMoviesByName(query);
        return res.status(200).json({ success: true, msg: "Search Results", load: movies });
    } catch (error) {
        next(new ApplicationError(500, error.message));
    }
};