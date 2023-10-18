import { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AuthContext from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Api from '../../config/Api';
function IndexLogin() {

    const { setIsLogged } = useContext(AuthContext);
    const[senha, setSenha] = useState('');
    const[login, setLogin] = useState('');
    const navigate = useNavigate();

    const style = {
        border: '1px solid #CCC',
        borderRadius: '10px',
        marginTop: '100px',
        padding: '10px'
    };

    async function acessar() {
        const response = await Api.get(`usuarios?login=${login}`);
        if(response.data.length > 0) {
            const data = response.data[0];
            if(data.senha === senha) {
                localStorage.setItem('sisdoe@token', data.token);
                setIsLogged(true);
                navigate('/');
            } else {
                alert("Login ou senha incorreto");
            }
        } else {
            alert("Login ou senha incorreto");
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col style={style} md={{ span: 4, offset: 4 }}>
                        <form action="">
                            <Form.Label>Login</Form.Label>
                            <Form.Control 
                                type='text'
                                onChange={e => setLogin(e.target.value)}
                            />
                            <Form.Label>Senha</Form.Label>
                            <Form.Control 
                                type='password'
                                onChange={e => setSenha(e.target.value)}
                            />
                            <Button type="button" onClick={acessar} variant='primary'>Acessar</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IndexLogin;