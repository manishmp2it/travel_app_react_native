import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={BottomTabNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={DetailsScreen}  options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StackNavigator