import { NavLink } from 'react-router-dom';

export default function NavigatioBar() {

    return (

        <nav className="navbar navbar-expand-lg bg-black">

            <div className="container">

                <NavLink className="navbar-brand d-flex align-items-center fw-bold text-white fs-3" to="/">

                    <img src="/favicon.png" alt="React Web App logo" width="60" className="d-inline-block align-text-top pe-2" />

                    <span>Movies</span>

                </NavLink>

                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">

                            <NavLink className={ ( { isActive } ) =>  isActive ? `nav-link fw-bold text-info` : `nav-link fw-bold text-white` } to="/">

                                <i className="bi bi-house-door-fill pe-2"></i>

                                <span>Home</span>

                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink className={ ( { isActive } ) => isActive ? `nav-link fw-bold text-info` : `nav-link fw-bold text-white` } to="/about">

                                <i className="bi bi-info-square-fill pe-2"></i>

                                <span>About</span>

                            </NavLink>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );

}