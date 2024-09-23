
# Movie Explorer

Movie Explorer is a full-stack web application that allows users to explore, search, and view details of various movies. It is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and integrates with the TMDB API to fetch real-time movie data.

## Features

- **Explore Movies**: Browse popular, top-rated, and upcoming movies.
- **Search Functionality**: Search for movies by title, genre, or keyword.
- **Movie Details**: View detailed information about movies, including synopsis, cast, ratings, and more.
- **User Authentication**: Sign up, log in, and manage user accounts.
- **Favorites**: Add movies to your favorites list and manage them from a personalized dashboard.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **External API**: TMDB (The Movie Database) API
- **Authentication**: JWT (JSON Web Token)
- **Deployment**: Vercel (Frontend), Heroku/Render (Backend)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-explorer.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd movie-explorer
   ```

3. Install the dependencies for both frontend and backend:
   ```bash
   # For the backend
   cd backend
   npm install

   # For the frontend
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the backend directory and add the following environment variables:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   TMDB_API_KEY=your_tmdb_api_key
   ```

5. Start the development servers:
   ```bash
   # For the backend
   cd backend
   npm run dev

   # For the frontend
   cd ../frontend
   npm start
   ```

6. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- **Explore and Search Movies**: Users can browse through different categories of movies and use the search functionality to find specific titles.
- **View Movie Details**: Clicking on a movie will display its detailed information, including cast, synopsis, and ratings.
- **User Authentication**: Users can sign up and log in to save their favorite movies.
- **Manage Favorites**: Logged-in users can add or remove movies from their favorites list.

## API Reference

- **TMDB API**: The application uses TMDB API to fetch movie data. You can find more information about the API [here](https://www.themoviedb.org/documentation/api).

## Screenshots

(Add screenshots of your application here to give a visual overview)

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcomed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **GitHub**: [your-username](https://github.com/your-username)
- **Email**: your.email@example.com
