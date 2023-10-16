import { useEffect, useState } from 'react';
import { Button, Form as FormBT, Table } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Api from '../../config/Api';

function FormUsuarios() {
    const[data, setData] = useState({
        nome: '',
        login: '',
        senha: ''
    });

    const validacao = Yup.object().shape({
        nome: Yup.string().required('Campo obrigatório'),
        login: Yup.string().required('Campo obrigatório')
    });

    const navigate = useNavigate();
    const { id } = useParams();
    
    async function salvar(dados) {
        if(id) {
            await Api.put('usuarios/'+id, dados);
            alert("Usuario atualizado com sucesso");
        } else {
            await Api.post('usuarios', dados);
            alert("Usuario criado com sucesso");
        }
        navigate('/usuarios');
    }

    async function getData(){
        const response = await Api.get('/usuarios/'+id);
        if(response.data) {
            const dataUser = response.data;
            setData({
                nome: dataUser.nome,
                login: dataUser.login,
                senha: ''
           });
        }
    }

    useEffect(() => {
        if(id) {
            getData();
        }
    }, []);

    return (
        <>
            <Link to="/usuarios">
                <Button variant='warning'>Voltar</Button>
            </Link>


            <Formik
                enableReinitialize
                initialValues={data}
                validationSchema={validacao}
                onSubmit={(values) => {
                    salvar(values);
                }}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="">Nome</label>
                        <Field 
                            type="text"
                            id="nome"
                            name="nome"
                            onChange={handleChange}
                            value={values.nome}
                            component={FormBT.Control}
                        />
                        <span className='red'>
                            <ErrorMessage name='nome' />
                        </span>
                        
                        <br />
                        <label htmlFor="">Login</label>
                        <Field 
                            type="text"
                            id="login"
                            name="login"
                            value={values.login}
                            onChange={handleChange}
                            component={FormBT.Control}
                        />
                        <span className='red'>
                            <ErrorMessage name='login' />
                        </span>
                        
                        <br />
                        <label htmlFor="">Senha</label>
                        <Field 
                            type="password"
                            id="senha"
                            name="senha"
                            value={values.senha}
                            onChange={handleChange}
                            component={FormBT.Control}
                        />
                        <span className='red'>
                            <ErrorMessage name='senha' />
                        </span>
                        <br />
                        <Button type="submit">Salvar</Button>
                    </form>
                )}
                    
                
            </Formik>
        </>
    )
}

export default FormUsuarios;