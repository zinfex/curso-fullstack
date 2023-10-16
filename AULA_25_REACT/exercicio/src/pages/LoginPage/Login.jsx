import { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {

    const [nomeInput, setNomeInput] = useState(''); 
    const [senhaInput, setSenhaInput] = useState('');
    
    return (
        <> 
            <h1>LOGIN</h1>

            <Form>
                <Row md={1}>
                    <Col>
                        <input 
                            type="text" 
                            placeholder="Nome"
                            value={nomeInput}
                            onChange={(e)=>setNomeInput(e.target.value)}
                        />
                    </Col>

                    <Col>
                        <input 
                            type="text" 
                            placeholder='Senha'
                            value={senhaInput}
                            onChange={(e)=>setSenhaInput(e.target.value)}
                        />
                    </Col>
                </Row>
            </Form>

            <div id="res">Nome: {nomeInput}, Senha: {senhaInput}</div>

            <Link to='/'><Button>Concluir</Button></Link>
        </>
    )
}

export default Login;