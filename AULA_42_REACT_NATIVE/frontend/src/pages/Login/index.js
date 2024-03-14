import { useContext, useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native'
import AuthContext from '../../contexts/AuthContext';
import Util from '../../config/Util';
import Api from '../../config/Api';

export default function LoginScreen(props) {
    
    const { setIsLogged } = useContext(AuthContext);

    const[login, setLogin] = useState('');
    const[senha, setSenha] = useState('');

    function acessar() {

        const response = Api.post('/login', {
            login, senha
        })

        if(response.data.token) {
            Util.setToken(response.data.token);
            setIsLogged(true)
        } else {
            alert('Usuário ou senha inválida')
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.caixa}>
                    <Text>Login</Text> 
                    <TextInput onChangeText={value => setLogin(value)} style={styles.input} />
                    <Text>Password</Text> 
                    <TextInput secureTextEntry={true} onChangeText={value => setSenha(value)} style={styles.input} />

                    <Button 
                        title='Acessar'
                        color="pink"
                        onPress={() => acessar()}
                    /> 
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    caixa: {
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: '90%'
    },
    input: {
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    }
});