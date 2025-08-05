import Title from './Title.jsx';
import MovieReviewsList from './MovieReviewsList.jsx';
import AddMovieReviewForm from './AddMovieReviewForm.jsx';

export default function MovieReviewsSection({ movie }) {

    return (

        <section>

            <Title importance="3" icon="bi bi-chat-left-text-fill" text="Reviews" />
            <MovieReviewsList movie={movie} />

            <AddMovieReviewForm />

        </section>

    );

}