import useMovies from '../hooks/useMovies.js';

import MovieCard from './MovieCard.jsx';

export default function MovieList({ titleIcon, titleText }) {

    const movies = useMovies();

    return (

        <section>

            <h2 className="pb-3">
                <i className={`${titleIcon} pe-2`}></i>
                <span>{titleText}</span>
            </h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3">

                {

                    movies?.map(movie => {

                        return (

                            <div key={`movie-${movie.id}`} className="col">

                                <MovieCard movie={movie} />

                            </div>

                        );

                    })

                }

            </div>

        </section>

    );

}