import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
 
//md={{ span: 4, offset: 4 }}

function Login() {
    return (
        <>
            <h1>Login</h1>

            <form>
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Form>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='text' />

                                <Form.Label>Senha</Form.Label>
                                <Form.Control type='text' />

                                <Link to='/'><Button>Login</Button></Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </form>
        </>
    )
}

export default Login;