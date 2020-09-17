import React from "react";
import { View, Button, Dimensions } from "react-native";

export default class AnonymousModal extends React.Component {
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
          position: "absolute",
          bottom: 40,
          flex: 1,
          backgroundColor: "#fff",
          width: Dimensions.get("screen").width * 0.9,
          flexDirection: "column",
        }}
      >
        <Button title="匿名解除を希望する" />
        <Button title="キャンセル" onPress={this.props.nav.toggleModal} />
      </View>
    );
  }
}
