import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import UsuariosPage from './pages/usuariosPage';
import UsuariosForm from './pages/usuariosForm';
import RoutePrivate from './context/routePrivate';
import AuthContext from './context/authContext';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const[isLogged, setIsLogged] = useState(true)

  return (
    <>
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <RoutePrivate>
                <HomePage />
              </RoutePrivate>
            } />

            <Route path='/usuarios' element={
              <RoutePrivate>
                <UsuariosPage />
              </RoutePrivate>
            } />

            <Route path='/usuarios/novo' element={
              <RoutePrivate>
                <UsuariosForm />
              </RoutePrivate>
            } />

            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}

export default App