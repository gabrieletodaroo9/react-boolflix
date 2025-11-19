import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DefaultLayout from './layouts/DefaultLayout';
import { GeneralProvider } from './Context/GeneralContext';

function App() {


  return (
    <>
      <GeneralProvider>

        <BrowserRouter>

          <Routes>

            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
            </Route>

          </Routes>

        </BrowserRouter>

      </GeneralProvider>
    </>
  )
}

export default App
