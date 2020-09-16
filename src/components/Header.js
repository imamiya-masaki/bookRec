import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import BootstrapStyleSheet from "react-native-bootstrap-styles";
import AnonymousModal from "./AnonymousModal";
import Modal from "react-native-modal";

export default class Header extends React.Component {
  // state = {
  //   sms: true,
  //   isModalVisible: false,
  // };

  // toggleModal = () => {
  //   this.setState({ isModalVisible: !this.state.isModalVisible });
  // };
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
    // const { onPress } = this.props;

    return (
      <View style={styles.header}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.headerText}>ホーム</Text>
          <Icon
            style={styles.rightIcon}
            name="gear"
            size={30}
            color="gray"
            // onPress={onPress}
            onPress={this.toggleModal}
          />
        </View>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modal}>
            <AnonymousModal nav={this} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    height: 80,
    left: 0,
    right: 0,
    paddingTop: 40,
    backgroundColor: "lightblue",
  },
  rightIcon: {
    position: "absolute",
    right: 20,
    // paddingRight: 10,
  },
  headerText: {
    fontSize: 20,
    color: "gray",
    textAlign: "center",
  },
  modal: {
    position: "absolute",
    bottom: 80,
    height: 150,
  },
});
