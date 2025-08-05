import { Link } from 'react-router-dom';

export default function AboutPage() {

    return (

        <section>

            <h2 className="pb-3">
                <i className="bi bi-info-square-fill pe-2"></i>
                <span>About</span>
            </h2>

            <div className="pt-5 d-lg-flex">

                <img className="d-block mx-auto pe-5" width="300" src="/favicon.png" alt="React Web App logo" />

                <p className="mt-5 fs-4">
                    We offer a small but very good selection of movies.
                    <br />
                    <br />
                    Go to <Link to="/" className="text-decoration-none">Home Page</Link> to view the movie list and click on the single movie to view its details and reviews!
                </p>

            </div>

        </section>

    );

}