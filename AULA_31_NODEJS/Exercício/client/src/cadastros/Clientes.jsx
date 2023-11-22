import Axios from 'axios';
import { useState } from 'react';

function Clientes() {
    const [values, setValues] = useState()

    const changeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const enviar = () => {
        Axios.post("http://localhost:8000/clientes-api", {
            nome: values.nome,
            cpf: values.cpf,
            email: values.email,
        }).then((response) => {
            console.log(response)
        })

        console.log(values)
    }

    return (
        <div className="cadastro">
            <h1>Clientes</h1>

            <input 
                type="text" 
                name="nome"
                placeholder="nome do cliente"
                className="register"
                onChange={changeValues}
            />

            <input 
                type="text" 
                name="cpf"
                placeholder="CPF do cliente"
                className="register"
                onChange={changeValues}
            />

            <input 
                type="email" 
                name="email"
                placeholder="Email do cliente"
                className="register"
                onChange={changeValues}
            />

            <button onClick={() => enviar()}>Enviar cliente</button>
        </div>
    )
}

export default Clientes;