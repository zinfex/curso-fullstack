import { Button, Text, View, StyleSheet } from 'react-native'
export default function HomeScreen(props) {
    return (
        <>
            <View style={styles.container}>
                <Button 
                    title='Voltar'
                    color="pink"
                    onPress={() => props.navigation.goBack()}
                />
            </View>   
            
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink"
    }
});