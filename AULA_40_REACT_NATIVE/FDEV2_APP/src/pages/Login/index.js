import { useContext } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native'
import AuthContext from '../../contexts/AuthContext';

export default function LoginScreen(props) {
    
    const { setIsLogged } = useContext(AuthContext);
    function login() {
        // ENVIAR PARA API E VER SE OS DADOS ESTAO CORRETOS.
        setIsLogged(true);
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.caixa}>
                    <Text>Login</Text> 
                    <TextInput style={styles.input} />

                    <Text>Password</Text> 
                    <TextInput style={styles.input} />

                    <Button 
                        title='Acessar'
                        color="pink"
                        onPress={() => login()}
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