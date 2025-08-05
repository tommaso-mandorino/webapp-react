import { useParams } from 'react-router-dom';

import useMovies from '../hooks/useMovies.js';

import MovieCard from '../components/MovieCard.jsx';
import MovieReviews from '../components/MovieReviews.jsx';

export default function MovieDetailsPage() {

    const movie = useMovies(useParams().id);

    return (

        <section>

            <h2 className="pb-3">
                <i className="bi bi-info-square pe-2"></i>
                <span>Movie details</span>
            </h2>

            <MovieCard movie={movie} />

            <MovieReviews movie={movie} />

        </section >

    );

}