import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import StoreScreen from "./StoreScreen";
import BookDetailScreen from "./BookDetailScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const StoreStack = createStackNavigator();

export default class StoreStackScreen extends React.Component {
  render() {
    return (
      <StoreStack.Navigator>
        <StoreStack.Screen
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
        <StoreStack.Screen
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
      </StoreStack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  rightIcon: {
    position: "absolute",
    right: 20,
  },
  modal: {
    position: "absolute",
    bottom: 80,
    height: 150,
  },
});
