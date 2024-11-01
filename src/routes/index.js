import { View, Text, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './tabs';
import DetailScreen from '../views/screens/detail/DetailScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={HomeTabs}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
