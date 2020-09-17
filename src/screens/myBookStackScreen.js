import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ShelfScreen from "./ShelfScreen";
import BookDetailScreen from "./BookDetailScreen";

const myBookStack = createStackNavigator();

export default class myBookStackScreen extends React.Component {
  render() {
    return (
      <myBookStack.Navigator>
        <myBookStack.Screen name="BookShelf" component={ShelfScreen} />
        {/* <myBookStack.Screen name="BookDetail" component={BookDetailScreen} /> */}
      </myBookStack.Navigator>
    );
  }
}
