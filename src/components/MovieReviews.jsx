export default function MovieReviews({ movie }) {

    return (

        <section>

            <h3 className="pt-5">
                <i className="bi bi-chat-left-text-fill pe-2"></i>
                <span>Reviews</span>
            </h3>

            {

                movie?.reviews?.map(review => {

                    let stars = [];

                    for (let i = 0; i < review.vote; i++) {

                        stars.push('star');

                    }

                    review.stars = stars;

                    return (

                        <div key={`review-${review.id}`} className="card p-3 my-3">

                            <h5 className="card-title">
                                <i className="bi bi-person-fill pe-2"></i>
                                <span>{review.name}</span>
                            </h5>

                            <p className="card-text fst-italic">{`"${review.text}"`}</p>

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

                    );

                })

            }

        </section>

    );

}