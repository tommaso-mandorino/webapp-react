import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout.jsx';

import HomePage from './pages/HomePage.jsx';
import MovieDetailsPage from './pages/MovieDetailsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

export default function App() {

  return (

    <BrowserRouter>
    
      <Routes>

		<Route element={<DefaultLayout />}>
		
			<Route index element={<HomePage />} />

			<Route path='/movies/:id' element={<MovieDetailsPage />} />

			<Route path="/about" element={<AboutPage />} />

		</Route>

      </Routes>

    </BrowserRouter>

  );

}