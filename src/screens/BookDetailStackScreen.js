import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BookDetailScreen from "./BookDetailScreen";
import BookReadScreen from "./BookReadScreen";

const BookStack = createStackNavigator();

export default class BookDetailStackScreen extends React.Component {
  render() {
    return (
      <BookStack.Navigator >
        <BookStack.Screen name="BookDetail" component={BookDetailScreen} />
        <BookStack.Screen name="BookRead" component={BookReadScreen} />
      </BookStack.Navigator>
    );
  }
}
