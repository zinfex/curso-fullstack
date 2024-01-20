import { StyleSheet, Text, View } from "react-native";

function TextButton(props) {
    return <Text style={{ color: 'white'}}>{props.title}</Text>
}

export default function HomeScreen() {
    return (
        <View style={styles.container}>
        <TextButton title='Home'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
})