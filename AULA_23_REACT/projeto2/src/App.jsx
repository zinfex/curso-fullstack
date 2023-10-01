import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [dog, setDog] = useState('')

  async function apiDog() {
    try {
      const response = await axios.get('https://random.dog/woof.json')
      setDog(response.data.url)
    } catch {
      alert('Erro na API')
      setDog('')
    }
  }

  return (
    <>
      <button onClick={apiDog}>Api dog</button> 
      <button onClick={()=>setDog('')}>Close</button> <br /> <br />
      <img src={dog} width={500} />
    </>
  )
}

export default App;
