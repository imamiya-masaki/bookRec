import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import BootstrapStyleSheet from "react-native-bootstrap-styles";

export default class Header extends React.Component {
  render() {
    const { onPress } = this.props;

    return (
      <View style={styles.header}>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row-reverse", paddingTop: 6 }}>
            <Icon
              style={styles.rightIcon}
              name="gear"
              size={30}
              color="gray"
              onPress={onPress}
            />
          </View>
        </View>
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
    paddingRight: 10,
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  }, //Viewのstyleの方が優先？
});
