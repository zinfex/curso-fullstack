import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function IndexUsuarios() {
    return (
        <>
            <Link to="/usuarios/novo">
                <Button>Novo Usuário</Button>
            </Link>
            
            <Table hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Login</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default IndexUsuarios;