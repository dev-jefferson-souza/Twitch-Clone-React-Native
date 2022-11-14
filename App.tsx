import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login/index'
import { Home } from './src/screens/Home/index'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }}  name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }}  name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
