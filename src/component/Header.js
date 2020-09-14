import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import BootstrapStyleSheet from "react-native-bootstrap-styles";

const styles = StyleSheet.create({
  rightIcon: {
    paddingRight: 10,
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  }, //Viewのstyleの方が優先？
});

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <View style={{ height: 50, backgroundColor: "lightskyblue" }}>
        <View style={{ flexDirection: "row-reverse", paddingTop: 6 }}>
          <Icon style={styles.rightIcon} name="gear" size={30} color="white" />
          <Text style={styles.headerText}>あ</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

// justifyContent: "flex-end"
