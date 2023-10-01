import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

function UsuariosPage() {
    return (
        <>
            <Link to="/usuarios/novo">
                <Button>Novo Usuário</Button>
            </Link>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nomes</th>
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

export default UsuariosPage;