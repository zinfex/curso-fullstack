import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/Login";
import HomeScreen from '../pages/Home'

const Stack = createNativeStackNavigator();
export default function PublicRoutes() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

