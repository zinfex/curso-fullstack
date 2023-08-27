import React from "react"

function Contador() {
    const[nome, mudarNome] = React.useState('Marcio')

    function teste() {
        mudarNome("Ferreira")
    }

    return (
        <>
            {nome}
            <button onClick={teste}>Teste</button>
        </>
    )
}

export default Contador