import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cadastros from './Screens/CadastroDeItens';
import Listas from './Screens/ListaDeProdutos';

export default function App() {

  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen name='lista' component={Listas}/>
        <Stack.Screen name='cadastros' component={Cadastros}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

