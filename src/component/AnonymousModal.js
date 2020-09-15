import React from "react";
import { View, Button, Dimensions } from "react-native";

export default class AnonymousModal extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          width: Dimensions.get("screen").width * 0.9,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "lightblue",
          }}
        >
          <Button title="匿名解除を希望する" />
          <Button title="キャンセル" onPress={this.props.nav.toggleModal} />
        </View>
      </View>
    );
  }
}
