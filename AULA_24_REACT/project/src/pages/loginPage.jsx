import { useContext } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import AuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const { setIsLogged } = useContext(AuthContext);
    const navigate = useNavigate();

    	const style = {
        border: '1px solid #CCC',
        borderRadius: '10px',
        marginTop: '100px',
        padding: '10px'
    };

    function login() {
        // LOGICA PARA USAR AXIOS - PARA VER SE O USUARIO EXISTE NO BANCO.
        setIsLogged(true);
        navigate('/');
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
                            />
                            <Form.Label>Senha</Form.Label>
                            <Form.Control 
                                type='text'
                            />
                            <Button type="button" onClick={login} variant='primary'>Acessar</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginPage;