import { Table, Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Api from "../../../../aula/src/config/Api";
import { useEffect, useState } from "react";

function Usuarios() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  async function getList() {
    if (search == "") {
      const response = await Api.get("usuarios");
      setList(response.data);
    } else {
      const response = await Api.get("usuarios?login_like=" + search);
      setList(response.data);
    }
  }

  const { id } = useParams();
  const [loginUser, setLoginUser] = useState("");
  const [senhaUser, setSenhaUser] = useState("");

  async function salvar() {
    const login = prompt("Login do usuário");
    const senha = prompt("Senha do usuário");
    setLoginUser(login);
    setSenhaUser(senha);

    if (id) {
      await Api.put("/usuarios" + id, loginUser, senhaUser);
    } else {
      await Api.post("/usuarios", loginUser, senhaUser);
    }

    getList();
  }

  async function deletar(id) {
    const confirmation = confirm("Deseja deletar este usuário?");
    if (confirmation) {
      await Api.delete("usuarios/" + id);
      getList();
      alert("usuario deletado");
    }
  }

  useEffect(() => {
    getList();
  }, [search]);

  console.log(list);

  return (
    <>
      <h1>Usuarios</h1>

      <Link to={"/"}>Voltar</Link>

      <div className="d-flex justify-content-between mt-3 mb-3">
        <div>
          <Form.Control
            placeholder="Pesquisar"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={salvar}>Novo usuário</Button>
        </div>
      </div>

      <Table hover striped>
        <thead>
          <tr>
            <th>id</th>
            <th>Login</th>
            <th>Senha</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.login}</td>
              <td>{item.senha}</td>
              <td>
                <Button variant="danger" onClick={() => deletar(item.id)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Usuarios;
