import React, { useState } from "react";

function BotaoToggle() {
    // Declarando uma variável de estado 'ligado' e uma função 'setLigado' para atualizá-la
    const [ligado, setLigado] = useState(false)

    return (
        <div>
            <h1>O botão está {ligado ? 'Ligado' : 'Desligado'}</h1>
            <button onClick={()=>setLigado(!ligado)}>Alternar</button>

            <img src="../src/imgs/botao.jpg"/>
        </div>
    )
}

export default BotaoToggle;


