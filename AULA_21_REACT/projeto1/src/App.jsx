import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './layouts/login';
import Home from './layouts/home';
import Menu from './layouts/menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
