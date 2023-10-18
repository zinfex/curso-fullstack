import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../../../aula/src/config/Api';
import AuthContext from '../context/AuthContext';

function Login() {

    const { setIsLogged } = useContext(AuthContext)
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function verificar() {
        //Resgatar a conta com o login no db.json
        const response = await Api.get(`usuarios?login=${login}`)

        if (response.data.length > 0) {
            const data = response.data[0]
            if(data.senha === senha) {
                //Se o login tiver correto armazene o dado 'sisdoe@token' no lugar data.token do localstorage
                localStorage.setItem('sisdoe@token', data.token)
                setIsLogged(true)
                navigate('/');
            } else {
                alert('Login ou senha incorreto')
            }
        } else {
            alert('Login ou senha incorreto')
        }

        console.log(response.data)
    }

    return (
        <>
            <h1>Login</h1>

            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control
                    type="email" 
                    placeholder="name@example.com" 
                    //Resgatar o login
                    onChange={e => setLogin(e.target.value)}
                />
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    //Resgatar a senha
                    onChange={e => setSenha(e.target.value)}
                />
            </FloatingLabel>

            <Button onClick={verificar}>Concluir</Button>
        </>
    )
}

export default Login;