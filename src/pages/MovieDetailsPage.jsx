import { useParams } from 'react-router-dom';

import MovieDetails from '../components/MovieDetails.jsx';

export default function MovieDetailsPage() {

    const { id } = useParams();

    return (

        <MovieDetails titleIcon="bi bi-info-square-fill" titleText={`Details of the movie with ID ${id}`} />

    );

}