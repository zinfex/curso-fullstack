import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        "Authorization": localStorage.getItem('sisdoe@token')
    }
}); 

export default Api;

// Api.get('usuarios');
// Api.post('usuarios', {});
// Api.put('usuarios/1', {});
// Api.delete('usuarios/1');

// -------------------------------------------------------

// // GET
// axios.get("http://localhost:8000/usuarios");
// axios.get("http://localhost:8000/produtos");
// // POST
// axios.post("http://localhost:8000/usuarios", { 
//     nome: 'Max',
//     login: 'max',
//     senha: '123213'
// });
// axios.post("http://localhost:8000/produtos", { 
//     nome: 'Mouse',
//     quantidade: 10,
//     valor: '11.00'
// });
// // PUT 
// axios.put("http://localhost:8000/usuarios/1", {
//     nome: 'Max',
//     login: 'max',
//     senha: '123213'
// });
// // DELETE
// axios.delete("http://localhost:8000/usuarios/1");
// axios.delete("http://localhost:8000/produtos/1");
