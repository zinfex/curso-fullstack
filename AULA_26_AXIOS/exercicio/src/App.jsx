import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/home'
import Login from './pages/login'
import Usuarios from './pages/usuarios'
import AuthContext from './context/AuthContext'
import RoutePrivate from './routes/RoutePrivate'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  let logged = false;
  if (localStorage.getItem('sisdoe@token') === undefined) {
    Navigate('/login')
  } 

  const[isLogged, setIsLogged] = useState(logged);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={
            <RoutePrivate>
              <Home />
            </RoutePrivate>
          }/>

          <Route path="/usuarios" element={
            <RoutePrivate>
              <Usuarios />
            </RoutePrivate>
          }/>

          <Route path="/login" element={<Login />}/>

        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;