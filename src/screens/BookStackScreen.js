import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import StoreScreen from "./StoreScreen";
import BookDetailScreen from "./BookDetailScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const BookStack = createStackNavigator();

export default class BookStackScreen extends React.Component {
  render() {
    return (
      <BookStack.Navigator>
        <BookStack.Screen
          name="Store"
          component={StoreScreen}
          options={{
            title: "ストア",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "lightblue",
            },
            headerTintColor: "gray",
            headerStatusBarHeight: 20,
            headerRight: () => (
              <Icon
                style={styles.rightIcon}
                name="bell"
                size={30}
                color="gray"
                onPress={this.toggleModal}
              />
            ),
          }}
        />
        <BookStack.Screen
          name="BookDetail"
          component={BookDetailScreen}
          options={{
            title: "ストア",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "lightblue",
            },
            headerTintColor: "gray",
            headerStatusBarHeight: 20,
          }}
        />
      </BookStack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  rightIcon: {
    position: "absolute",
    right: 20,
    // paddingRight: 10,
  },
  modal: {
    position: "absolute",
    bottom: 80,
    height: 150,
  },
});
