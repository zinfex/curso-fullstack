import React, { useState, useEffect } from "react";

function Nome() {
    const [nome, setNome] = useState('')
    const [titulo, setTitulo] = useState('')

    useEffect(() => {
        setTitulo(`Olá, ${nome || 'visitante'}!`)

    }, [nome])

    return (
        <div>
            <h1>{titulo}</h1>
            <input 
                type="text" 
                placeholder="Digite seu nome" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)}
            />

            <img src="../src/imgs/nome.jpg" style={{width: '600px'}}/>
        </div>
    )
}

export default Nome;

