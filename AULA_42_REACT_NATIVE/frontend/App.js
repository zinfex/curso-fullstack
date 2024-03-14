import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PublicRoutes from './src/routes/PublicRoutes';
import PrivateRoutes from './src/routes/PrivateRoutes';
import AuthContext from './src/contexts/AuthContext';
import { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import Util from './src/config/Util';

export default function App() {
  const[isLogged, setIsLogged] = useState(false);

  async function checkToken() {
    const token = await Util.getToken();
    if(token!== null) {
      setIsLogged(true);
    }
  }

  useEffect(() => {
    checkToken();
  }, []);

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
