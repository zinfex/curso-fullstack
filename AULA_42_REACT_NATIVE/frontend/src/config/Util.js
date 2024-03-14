import AsyncStorage from '@react-native-async-storage/async-storage';

const Util = {

    getToken: async function() {
        try {
            const token = await AsyncStorage.getItem('app@token');
            return token
          } catch (e) {
            alert("Erro ao consultar token.");
        }
    },

    setToken: async function(token) {
        try {
            await AsyncStorage.setItem('app@token', token);
        } catch (e) {
            alert("Erro ao persistir token.");
        }
    },
    
    removeToken: async function() {
        try {
            const token = await AsyncStorage.removeItem('app@token');
            return token
          } catch (e) {
            alert("Erro ao consultar token.");
        }
    }
}

export default Util;