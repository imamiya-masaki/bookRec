import React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import RecommendScreen from './src/screens/RecommendScreen';
import ShelfScreen from './src/screens/ShelfScreen';
import StoreScreen from './src/screens/StoreScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" color={color} size={size} />
            )
          }} />
        <Tab.Screen
          name="Recommend"
          component={RecommendScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-thumbs-up" color={color} size={size} />
            )
          }} />
        <Tab.Screen
          name="Shelf"
          component={ShelfScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-book" color={color} size={size} />
            )
          }} 
          />
        <Tab.Screen
          name="Store"
          component={StoreScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-basket" color={color} size={size} />
            )
          }} 
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
