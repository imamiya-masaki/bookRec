import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

export default class AnonymousModal extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "lightblue",
          }}
        >
          <Button title="匿名解除を希望する" />
          <Button title="キャンセル" />
        </View>
        <Button
          title="close"
          // イベントをpropsでもらう
          onPress={this.props.nav.toggleModal}
        />
      </View>
    );
  }
}
