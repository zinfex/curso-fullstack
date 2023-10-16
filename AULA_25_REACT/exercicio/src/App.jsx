import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/LoginPage/Login';
import Home from './pages/HomePage/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/' element={ <Home /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
