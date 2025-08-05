import Title from './Title.jsx';

export default function AddMovieReviewForm() {

    return (

        <section className="card my-5">

            <Title className="card-header my-0" importance="4" icon="bi bi-plus-square-fill" text="Add review" alignment="center" />

            <form className="card-body" onSubmit={(e => { e.preventDefault(); alert('to do');})}>

                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input className="form-control" type="text" name="name" id="name" placeholder="your name..." required />
                </div>

                <fieldset className="mb-3">

                    <legend className="fs-6">Vote</legend>

                    <div className="d-flex">

                        <div className="form-check me-3">
                            <input className="form-check-input border-dark" type="radio" name="vote" id="vote1" required />
                            <label className="form-check-label" htmlFor="vote1">1</label>
                        </div>

                        <div className="form-check me-3">
                            <input className="form-check-input border-dark" type="radio" name="vote" id="vote2" required />
                            <label className="form-check-label" htmlFor="vote2">2</label>
                        </div>

                        <div className="form-check me-3">
                            <input className="form-check-input border-dark" type="radio" name="vote" id="vote3" required />
                            <label className="form-check-label" htmlFor="vote3">3</label>
                        </div>

                        <div className="form-check me-3">
                            <input className="form-check-input border-dark" type="radio" name="vote" id="vote4" required />
                            <label className="form-check-label" htmlFor="vote4">4</label>
                        </div>

                        <div className="form-check me-3">
                            <input className="form-check-input border-dark" type="radio" name="vote" id="vote5" required />
                            <label className="form-check-label" htmlFor="vote5">5</label>
                        </div>

                    </div>

                </fieldset>

                <div className="mb-3">
                    <label className="form-label" htmlFor="text">Review</label>
                    <textarea className="d-block w-100 p-2" name="text" id="text" rows="3" placeholder="your review..." required></textarea>
                </div>

                <button className="btn btn-primary d-block mx-auto w-25" type="submit">
                    <i className="bi bi-send-fill pe-2"></i>
                    <span>Publish</span>
                </button>

            </form>

        </section>

    );

}