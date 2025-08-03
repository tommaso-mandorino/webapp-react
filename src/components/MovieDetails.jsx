export default function MovieDetails( { titleIcon, titleText } ) {

    return (

        <section>

            <h2 className="pb-3">
                <i className={titleIcon}></i>
                <span>{titleText}</span>
            </h2>

            <span>Movie details goes here</span>

        </section>

    );

}