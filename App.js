import React from "react";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";

import { twitter_id, setTwitterId } from "./src/Global.js";

import HomeScreen from "./src/screens/HomeScreen";
import RecommendScreen from "./src/screens/RecommendScreen";
import ShelfScreen from "./src/screens/ShelfScreen";
import StoreScreen from "./src/screens/StoreScreen";
import StoreStackScreen from "./src/screens/StoreStackScreen";
import RecommendStackScreen from "./src/screens/RecommendStackScreen";
import BookDetailStackScreen from "./src/screens/BookDetailStackScreen";
import HomeStackScreen from "./src/screens/HomeStackScreen";
import TutorialScreen from "./src/screens/TutorialScreen";
import LoginScreen from "./src/screens/LoginScreen";
console.disableYellowBox = true
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  return routeName;
}

function TabScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#3366ff",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Recommend"
        component={RecommendScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-thumbs-up" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shelf"
        component={ShelfScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-basket" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
// export default class App extends React.Component {
export default function App() {
  // render() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen
          name="Tab"
          component={TabScreen}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        <RootStack.Screen
          name="RecommendStack"
          component={RecommendStackScreen}
          options={
            (({ route }) => ({ headerTitle: getHeaderTitle(route) }),
            { headerBackTitle: "閉じる" })
          }
        />
        <RootStack.Screen
          name="BookDetailStack"
          component={BookDetailStackScreen}
          options={({ route, navigation }) => ({
            headerTitle: getHeaderTitle(route),
            headerLeft: (props) => (
              <HeaderBackButton onPress={() => navigation.goBack()} />
            ),
          })}
        />
        <RootStack.Screen
          name="StoreStack"
          component={StoreStackScreen}
          options={({ route }) => ({ headerTitle: getHeaderTitle(route) })}
        />
        <RootStack.Screen
          name="tutorial"
          component={TutorialScreen}
          // options={({ route }) => ({ headerTitle: getHeaderTitle(route) })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
// }
