import React from "react";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "./src/screens/HomeScreen";
import RecommendScreen from "./src/screens/RecommendScreen";
import ShelfStackScreen from "./src/screens/ShelfStackScreen";
import StoreScreen from "./src/screens/StoreScreen";
import StoreStackScreen from "./src/screens/StoreStackScreen";
import RecommendStackScreen from "./src/screens/RecommendStackScreen";
import myBookStackScreen from "./src/screens/myBookStackScreen";
import HomeStackScreen from "./src/screens/HomeStackScreen";
import TutorialScreen from "./src/screens/TutorialScreen";

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
        component={ShelfStackScreen}
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
      <RootStack.Navigator mode="modal">
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
          name="myBookStack"
          component={myBookStackScreen}
          options={({ route }) => ({ headerTitle: getHeaderTitle(route) })}
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
