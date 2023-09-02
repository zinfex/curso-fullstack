import { Container, Row, Col, Button } from 'react-bootstrap';

function Login() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} className='mt-5'>
                        <form action="">
                            <label htmlFor="">Login</label>
                            <input type="text" className='form-control'/>
                            <label htmlFor="">Senha</label>
                            <input type="password" className='form-control'/> 
                            <input type="submit" className='btn btn-primary' value='Acessar'/>   
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;