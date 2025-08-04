import { useState, useEffect } from 'react';

import fetchData from '../api/fetchData.js';

const moviesEndpoints = {
    moviesData: 'http://localhost:3000/api/movies',
    movieCoverUrls: 'http://localhost:3000/images/movie-covers'
}



export default function useMovie() {

    const [movies, setMovies] = useState(null);

    useEffect(() => {

        fetchData(moviesEndpoints.moviesData)
            
            .then(fetchedResults => {

                setMovies(fetchedResults);

            })

            .catch(error => {

                console.error(error);

            });

    }, []);

    return {
        movies,
        movieCoverUrls: moviesEndpoints.movieCoverUrls
    };

}