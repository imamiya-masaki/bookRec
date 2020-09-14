import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "./Header";
import Modal from "react-native-modal";

const AnonymousHeader = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Header />
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
    </View>
  );
};

export default AnonymousHeader;
