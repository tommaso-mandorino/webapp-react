import { useState, useEffect } from 'react';

import fetchData from '../api/fetchData.js';

const moviesEndpoint = `${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/api/movies`;

export default function useMovie(movieId) {

    const [movies, setMovies] = useState(null);
    const [movie, setMovie] = useState(null);

    useEffect(() => {

        if (!movieId) {
            fetchData(moviesEndpoint)
                .then(fetchedMovies => setMovies(fetchedMovies))
                .catch(error => console.error(error));
        } else {
            fetchData(`${moviesEndpoint}/${movieId}`)
                .then(fetchedMovie => setMovie(fetchedMovie))
                .catch(error => console.error(error));
        }

    }, []);

    return !movieId ? movies : movie;
}