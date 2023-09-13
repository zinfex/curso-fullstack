import './App.css';
import Nome from './useEffect/nome';
import BotaoToggle from './useState/botaoToggle';
import Contador from './useState/contador';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  //ROTAS = REACT ROUTER DOM
  return (
    <Router>
      <ul>
        <li><Link to='/contador'>Contador</Link></li>
        <li><Link to='/toggle'>Botao</Link></li>
        <li><Link to='/nome'>Nome</Link></li>
      </ul>

      <Routes>
        <Route path='/toggle' element={<BotaoToggle />}>Botao</Route>
        <Route path='/contador' element={<Contador/>}>Contador</Route>
        <Route path='/nome' element={<Nome/>}>Nome</Route>
      </Routes>
    </Router>
    
  )
}

export default App
