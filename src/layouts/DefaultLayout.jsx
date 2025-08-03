import { Outlet } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function DefaultLayout() {

    return (

        <>
        
            <header className="bg-black text-white">

                <div className="container">

                    <Header />

                </div>

            </header>

            <main className="bg-dark text-white py-5 flex-grow-1">

                <div className="container">

                    <Outlet />

                </div>

            </main>

            <footer className="bg-black text-white py-3 mt-auto">

                <div className="container">

                    <Footer />

                </div>

            </footer>
        
        </>

    );

}