import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeScreen from "./src/screens/Home/Home";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  return (
    <View style={styles.container}>
      <HomeScreen />

      <Text style={{ color: "white" }}>{number}</Text>
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={{ color: "white" }}>Button</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
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
  button: {
    backgroundColor: "blue",
    padding: 30,
  },
});
