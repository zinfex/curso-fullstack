import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PublicRoutes from './src/routes/PublicRoutes';
import PrivateRoutes from './src/routes/PrivateRoutes';
import AuthContext from './src/contexts/AuthContext';
import { useState } from 'react';
import 'react-native-gesture-handler';

export default function App() {
  const[isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <View style={styles.container}>
        {isLogged ? <PrivateRoutes /> : <PublicRoutes />}
      </View>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
