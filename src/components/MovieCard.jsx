import { Link, useParams } from 'react-router-dom';

export default function MovieCard({ movie }) {

    const movieId = useParams().id;

    const movieCoversPath = `${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/${import.meta.env.VITE_SERVER_MOVIE_COVERS_PATH}`;

    if (movie) {

        return (

            <div className={movieId ? "card h-100 w-50 mx-auto" : "card h-100"}>

                {
                    (!movieId)
                        ?
                        <Link className="text-decoration-none" to={`/movies/${movie.id}`}>
                            <img className="card-img-top" src={`${movieCoversPath}/${movie.image}`} alt={`${movie.title} cover`} />
                        </Link>
                        :
                        <img className="card-img-top" src={`${movieCoversPath}/${movie.image}`} alt={`${movie.title} cover`} />
                }

                <div className="card-body">

                    <span className="fs-6 text-muted">{movie.release_year} - {movie.genre}</span>


                    {
                        (!movieId)
                            ?
                            <Link className="text-decoration-none" to={`/movies/${movie.id}`}>
                                <h5 className="card-title my-1">{movie.title}</h5>
                            </Link>
                            :
                            <h5 className="card-title my-1">{movie.title}</h5>
                    }

                    <span className="fs-6 fst-italic text-muted">{movie.director}</span>

                    <p className="card-text mt-2">{movie.abstract}</p>

                </div>

            </div>

        );

    }

}