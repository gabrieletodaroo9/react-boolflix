import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DefaultLayout from './layouts/DefaultLayout';
import { GeneralProvider } from './Context/GeneralContext';
import FilmPage from './pages/FilmPage';
import TvSeriesPage from './pages/TvSeriesPage';
import PopularPage from './pages/PopularPage';

function App() {


  return (
    <>
      <GeneralProvider>

        <BrowserRouter>

          <Routes>

            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path='/movies' element={<FilmPage />} />
              <Route path='/tvseries' element={<TvSeriesPage />}/>
              <Route path='/popular' element={<PopularPage />}/>

            </Route>

          </Routes>

        </BrowserRouter>

      </GeneralProvider>
    </>
  )
}

export default App
