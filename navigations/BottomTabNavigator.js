import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import LikedScreen from '../screens/LikedScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: styles.tabBar, tabBarActiveTintColor: "#F35D38", tabBarShowLabel: false }}>
      <Tab.Screen name="Info" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => <Entypo name="home" size={32} color={focused ? '#F35D38' : "#D1D3D2"} />, headerShown: false, }} />
      <Tab.Screen name="Liked" component={LikedScreen} options={{ tabBarIcon: ({ focused }) => <Entypo name="heart" size={32} color={focused ? '#F35D38' : "#D1D3D2"} />, headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="account" size={32} color={focused ? '#F35D38' : "#D1D3D2"} />, headerShown: false }} />
    </Tab.Navigator>
  )
}
export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    paddingTop: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    position: 'absolute',
    overflow: 'hidden',
  }
})