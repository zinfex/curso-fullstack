import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Clientes from './cadastros/Clientes'
import Produtos from './cadastros/Produtos'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />}/>
        <Route path="/produtos" element={<Produtos />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
