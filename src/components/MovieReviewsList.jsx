export default function MovieReviews({ movie }) {

    return (

        <section>

            {

                movie?.reviews?.map(review => {

                    let stars = [];

                    for (let i = 0; i < review.vote; i++) {
                        stars.push('star');
                    }

                    review.stars = stars;

                    return (

                        <div key={`review-${review.id}`} className="card my-3">

                            <div className="card-header">

                                <h5 className="card-title">
                                    <i className="bi bi-person-fill pe-2"></i>
                                    <span>{review.name}</span>
                                </h5>

                            </div>

                            <div className="card-body">

                                <p className="card-text fst-italic">{`"${review.text}"`}</p>

                            </div>

                            <div className="card-footer">

                                <span>

                                    <span className="pe-2">({review.vote}/5)</span>

                                    {
                                        review.stars.map((_, index) => {

                                            return (

                                                <i key={`star-${index + 1}`} className="bi bi-star-fill"></i>

                                            );

                                        })
                                    }

                                </span>

                            </div>

                        </div>

                    );

                })

            }

        </section>

    );

}