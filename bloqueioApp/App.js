import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './recursos/telas/MainScreen';
import DesbloquearScreen from './recursos/telas/DesbloquearScreen';
import BloquearScreen from './recursos/telas/BloquearScreen';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Bloquear" component={BloquearScreen} options={{ title: 'Bloquear Equipamento' }} />
        <Stack.Screen name="Desbloquear" component={DesbloquearScreen} options={{ title: 'Desbloquear Equipamento' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;