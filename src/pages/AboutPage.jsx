import { Link } from 'react-router-dom';

export default function AboutPage() {

    return (

        <>

            <h2 className="pb-3">
                <i className="bi bi-building-fill pe-2"></i>
                <span>About</span>
            </h2>

            <p className="mt-5 fs-4">
                We offer a small selection of movies.
                <br />
                <br />
                Go to <Link to="/">Home Page</Link> to view the movie list and click on the single movie to view its details and reviews!
            </p>

        </>

    );

}