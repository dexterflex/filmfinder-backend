import FavoriteMovie from '../models/favoriteMovie.model.js';
import { ApplicationError } from '../middlewares/errorHandler.js';
import axios from 'axios'

const apiKey = process.env.API_KEY;

class MovieRepository {
    static async addFavoriteMovie(userId, movie) {
        try {
            // Check if the movie already exists in the user's favorites
            const existingFavorite = await FavoriteMovie.findOne({ userId, movieId: movie.movieId });
            if (existingFavorite) {
                throw new ApplicationError(400, 'Movie is already in favorites');
            }

            // If not, create a new favorite movie entry
            const favoriteMovie = new FavoriteMovie({ userId, ...movie });
            await favoriteMovie.save();
            return favoriteMovie;
        } catch (error) {
            throw new ApplicationError(error.status || 500, error.message || 'Failed to add favorite movie');
        }
    }


    static async getFavoriteMovies(userId) {
        try {
            return await FavoriteMovie.find({ userId });
        } catch (error) {
            throw new ApplicationError(500, 'Failed to fetch favorite movies');
        }
    }

    static async removeFavoriteMovie(userId, movieId) {
        try {
            await FavoriteMovie.deleteMany({ userId, movieId });
            return { success: true };
        } catch (error) {
            throw new ApplicationError(500, 'Failed to remove favorite movie');
        }
    }

    static async getMovies(page = 1) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
                params: {
                    api_key: apiKey,
                    language: 'en-US',
                    page
                }
            });
            return response.data.results;
        } catch (error) {
            throw new Error('Failed to fetch movies');
        }
    }

    static async getMovieById(movieId) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                params: {
                    api_key: apiKey,
                    language: 'en-US'
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch movie details');
        }
    }

    static async searchMoviesByName(query, page = 1) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    api_key: apiKey,
                    language: 'en-US',
                    query,
                    page
                }
            });
            return response.data.results;
        } catch (error) {
            throw new Error('Failed to search movies');
        }
    }
}

export default MovieRepository;
