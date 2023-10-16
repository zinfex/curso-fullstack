import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu';
const Layout = ({ children }) => {
    return (
        <>
            <Container fluid>
                <Row style={{ backgroundColor: 'black' }}>
                    <Col>
                        Topo
                    </Col>
                </Row>
                <Row>
                    <Col md={2} style={{ background: 'white' }}>
                        <Menu />
                    </Col>
                    <Col md={10}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Layout;