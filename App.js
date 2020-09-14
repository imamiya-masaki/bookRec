import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Header from "./src/component/Header";
import AnonymousHeader from "./src/component/AnonymousHeader";
import AnonymousModal from "./src/component/AnonymousModal";

function HomeScreen() {
  return (
    <View>
      <Header />
      <Icon name="gear" size={50} color="gray" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    </View>
  );
}
// Iconをモーダルにしたい。Headerにprop渡す必要ありそう。2段階で引数渡す。

function RecommendScreen() {
  return (
    <View>
      <AnonymousHeader />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Recommend!</Text>
      </View>
    </View>
  );
}

function ShelfScreen() {
  return (
    <View>
      <Header />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Shelf!</Text>
      </View>
    </View>
  );
}

function StoreScreen() {
  return (
    <View>
      <Header />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Store!</Text>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

// export default function App() {
export default class App extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      // <SafeAreaView style={{ flex: 1 }}>
      //   <View>
      //     <Icon name="gear" size={50} color="gray" onPress={this.toggleModal} />
      //   </View>
      //   {/* <Button title="Show modal" onPress={this.toggleModal} /> */}
      //   <Modal isVisible={this.state.isModalVisible}>
      //     <AnonymousModal nav={this} />
      //   </Modal>
      // </SafeAreaView>

      // 以下全部消して、上の部分反映するとモーダルになる。　RecommendScreen　→　Header.js て感じで押したかどうかの情報持ってきたい。

      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
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
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
