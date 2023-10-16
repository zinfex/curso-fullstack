import { BrowserRouter, Routes, Route, Navigate }  from 'react-router-dom';
import IndexHome from './pages/HomePage/IndexHome';
import IndexLogin from './pages/LoginPage/IndexLogin';
import IndexUsuarios from './pages/UsuariosPage/IndexUsuarios';
import RoutePrivate from './routes/RoutePrivate';
import AuthContext from './contexts/AuthContext';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormUsuarios from './pages/UsuariosPage/FormUsuarios';

function App() {
  
  let logged = false;
  if(localStorage.getItem('sisdoe@token')) {
    logged = true
  }
  const[isLogged, setIsLogged] = useState(logged);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <RoutePrivate>
              <IndexHome />
            </RoutePrivate>
          } />

          <Route path="/usuarios" element={
            <RoutePrivate>
              <IndexUsuarios />
            </RoutePrivate>
          } />

          <Route path="/usuarios/novo" element={
            <RoutePrivate>
              <FormUsuarios />
            </RoutePrivate>
          } />

          <Route path="/login" element={<IndexLogin />} />       
        
        </Routes>
      </BrowserRouter>     
    </AuthContext.Provider>
  )
}

export default App
