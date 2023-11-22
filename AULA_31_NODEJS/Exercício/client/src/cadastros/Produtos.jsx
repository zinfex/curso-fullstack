import Axios from 'axios';
import { useState } from 'react';

function Produtos() {
    const [values, setValues] = useState()

    const changeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const enviar = () => {
        Axios.post("http://localhost:8000/produtos-api", {
            nome: values.nome,
            valor: values.valor,
            quantidade: values.quantidade,
        }).then((response) => {
            console.log(response)
        })

        console.log(values)
    }

    return (
        <div className="cadastro">
            <h1>Produtos</h1>

            <input 
                type="text" 
                name="nome"
                placeholder="nome do produto"
                className="register"
                onChange={changeValues}
            />

            <input 
                type="text" 
                name="valor"
                placeholder="valor do produto"
                className="register"
                onChange={changeValues}
            />

            <input 
                type="number" 
                name="quantidade"
                placeholder="Quantiade"
                className="register"
                onChange={changeValues}
            />

            <button onClick={() => enviar()}>Enviar produto</button>
        </div>
    )
}

export default Produtos;