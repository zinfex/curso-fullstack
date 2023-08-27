import './App.css'
import Header from './layouts/header'
import Footer from './layouts/footer'
import Body from './layouts/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Contador from './pages/Contador'

function App() {

  const style = {
    color: 'blue',
    background: 'yellow',
    padding: '10px'
  }

  return (
    <>
      <Header empresa='iwtraining' curso="fullstack" />
      <Header empresa={prompt('Nome da empresa')} curso={prompt('Nome do curso')} />
      <Body cor='red'>
        Crianças
      </Body>
      <Footer />

      <Contador />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
