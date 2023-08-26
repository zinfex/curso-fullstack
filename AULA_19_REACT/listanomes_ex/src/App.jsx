import './App.css'
import React, { useState } from 'react';

function App() {

  const [names, setNames] = useState(['João', 'Maria', 'Pedro']);
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addName = () => {
    if (newName.trim() !== '') {
      setNames([...names, newName]);
      setNewName('');
    }
  };

  return (
    <div>
      <h1>Lista de Nomes</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newName}
          onChange={handleNameChange}
          placeholder="Novo Nome"
        />
        <button onClick={addName}>Adicionar</button>
      </div>
    </div>
  )
}

export default App
