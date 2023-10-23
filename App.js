// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen02 from './Component/Screen02';
import Screen01 from './Component/Screen01';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen01' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Screen01" component={Screen01} />
      <Stack.Screen name="Screen02" component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;