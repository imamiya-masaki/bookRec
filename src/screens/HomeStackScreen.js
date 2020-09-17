import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import HomeScreen from "./HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import HelpModal from "../components/HelpModal";
const HomeStack = createStackNavigator();
import Modal from "react-native-modal";
import TutorialScreen from "./TutorialScreen";
export default class HomeStackScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const { onPress } = this.props;
    let modal;
    modal = (
      <Modal isVisible={this.state.isModalVisible}>
        <View style={styles.modal}>
          <HelpModal nav={this} />
        </View>
      </Modal>
    );

    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "ホーム",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "lightblue",
            },
            headerTintColor: "gray",
            headerStatusBarHeight: 20,
            headerRight: () => (
              <Icon
                style={styles.rightIcon}
                name="question"
                size={30}
                color="gray"
                // onPress={this.toggleModal}
                // modal画面を作りそこに遷移
                onPress={() => this.props.navigation.navigate("tutorial1")}
              />
            ),
          }}
          //   onPress={this.toggleModal}
        ></HomeStack.Screen>
        <HomeStack.Screen
          name="tutorial1"
          component={TutorialScreen}
        ></HomeStack.Screen>
      </HomeStack.Navigator>
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
