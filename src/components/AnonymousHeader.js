import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import BootstrapStyleSheet from "react-native-bootstrap-styles";
import Modal from "react-native-modal";
import AnonymousModal from "./AnonymousModal";
import Header from "./Header";

const styles = StyleSheet.create({
  rightIcon: {
    paddingRight: 10,
    zIndex: 50,
    elevation: 50,
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  }, //Viewのstyleの方が優先？
});

export default class AnonymousHeader extends React.Component {
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
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            height: 50,
            backgroundColor: "lightblue",
          }}
        >
          <View style={{ flexDirection: "row-reverse", paddingTop: 6 }}>
            <Icon
              style={styles.rightIcon}
              name="gear"
              size={30}
              color="gray"
              onPress={this.toggleModal}
            />
          </View>
        </View>
        <View style={{ height: 2, backgroundColor: "gray" }} />
        <View
          style={{
            height: 60,
            backgroundColor: "lightblue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>匿名は右上の設定ボタンから解除できます。</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            // この指定法は頭悪そう
          }}
        >
          <Modal isVisible={this.state.isModalVisible}>
            <View
              style={{
                // height: 500,
                paddingTop: Dimensions.get("screen").height * 0.65,
              }}
            >
              <AnonymousModal nav={this} />
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
