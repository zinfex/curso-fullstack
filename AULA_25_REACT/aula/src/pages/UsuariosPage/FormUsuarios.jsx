import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function FormUsuarios() {
    return (
        <>
            <Link to="/usuarios">
                <Button variant='warning'>Voltar</Button>
            </Link>
        </>
    )
}

export default FormUsuarios;