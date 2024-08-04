import mongoose from 'mongoose';

const favoriteMovieSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    movieId: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
    },
    release_date: {
        type: String,
    },
    poster_path: {
        type: String,
    },
}, { timestamps: true });

const FavoriteMovie = mongoose.model('FavoriteMovie', favoriteMovieSchema);
export default FavoriteMovie;
