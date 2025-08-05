export default function Title( {className = "", importance = 2, icon = "", text = "Title", alignment = "left", verticalMargin = "30px"} ) {

    const Heading = `h${importance}`;

    return (

        <Heading
            className={className}
            style={
                {
                    textAlign: alignment,
                    marginTop: verticalMargin,
                    marginBottom: verticalMargin
                }
            }
        >

            <i className={`${icon} pe-2`}></i>

            <span>{text}</span>

        </Heading>

    );

}