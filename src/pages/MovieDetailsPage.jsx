import { useParams } from 'react-router-dom';

import useMovies from '../hooks/useMovies.js';

import Title from '../components/Title.jsx';
import MovieCard from '../components/MovieCard.jsx';
import MovieReviewsSection from '../components/MovieReviewsSection.jsx';

export default function MovieDetailsPage() {

    const movie = useMovies(useParams().id);

    return (

        <section>

            <Title icon="bi bi-info-square" text="Movie details" />

            <MovieCard movie={movie} />

            <MovieReviewsSection movie={movie} />

        </section>

    );

}