import { useState } from 'react';

import useMovies from '../hooks/useMovies.js';

export default function MovieList( { titleIcon, titleText } ) {

    const { movies, movieCoverUrls } = useMovies();

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

                                <div className="card h-100">

                                    <img className="card-img-top" src={`${movieCoverUrls}/${movie.image}`} alt={`${movie.title} cover`} />

                                    <div className="card-body">

                                        <span className="fs-6 text-muted">{movie.release_year} - {movie.genre}</span>

                                        <h5 className="card-title my-1">{movie.title}</h5>

                                        <span className="fs-6 fst-italic text-muted">{movie.director}</span>

                                        <p className="card-text mt-2">{movie.abstract}</p>

                                    </div>

                                </div>

                            </div>

                        );

                    })

                }

            </div>

        </section>

    );

}