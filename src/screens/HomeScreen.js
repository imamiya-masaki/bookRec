import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";


import Header from "../component/Header";
import AnonymousModal from "../component/AnonymousModal";

export default class HomeScreen extends React.Component {
    state = {
      isModalVisible: false,
    };

    toggleModal = () => {
      this.setState({ isModalVisible: !this.state.isModalVisible });
    };
  
    render() {
      return (
        <View >
          <Header onPress={this.toggleModal} />
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home!</Text>
          </View>
          <Modal isVisible={this.state.isModalVisible}>
            <AnonymousModal nav={this} />
          </Modal>
        </View>
        );
    }
}

const styles = StyleSheet.create({
})
