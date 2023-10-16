import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../../config/Api';
import { useEffect, useState } from 'react';

function IndexUsuarios() {

    const[list, setList] = useState([]);
    const[search, setSearch] = useState('');

    const navigate = useNavigate();

    async function getList() {
        if(search == '') {
            const response = await Api.get('usuarios');
            setList(response.data);
        } else {
            const response = await Api.get('usuarios?nome_like='+search);
            setList(response.data);
        }
    }

    async function deletarItem(id) {
        const confirmation = confirm("Deseja deletar o usuario?");
        if(confirmation) {
            await Api.delete('usuarios/'+id);
            getList();
            alert("Usuario deletado com sucesso");
        }
    }

    function editarItem(id) {
        navigate('/usuarios/editar/'+id)
    }

    useEffect(() => {
        // CODIGO EXECUTA UMA VEZ
        getList();
    }, [search]);

    return (
        <>
            <div className='d-flex justify-content-between mt-3 mb-3'>
                <div>
                    <Form.Control 
                        placeholder='Pesquisar'
                        type='search' onChange={e => setSearch(e.target.value)} 
                    />
                </div>
                <div>
                    <Link to="/usuarios/novo">
                        <Button>Novo Usuário</Button>
                    </Link>
                </div>
            </div>
            <div className='mb-3'>
                
            </div>
            
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
                    {list.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.login}</td>
                            <td>
                                <Button variant="primary" size='sm' onClick={() => editarItem(item.id)}>Editar</Button>
                                {` `}
                                <Button variant="danger" size='sm' onClick={() => deletarItem(item.id)}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default IndexUsuarios;