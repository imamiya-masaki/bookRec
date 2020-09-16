import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ListItem,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Books extends React.Component {
  render() {
    // const { onPress } = this.props;
    return (
      <ScrollView horizontal={true}>
        <View style={{ marginTop: 0, width: "100%", alignSelf: "center" }}>
          <Text>おすすめ商品</Text>
          <ListItem
            title={"さんからリアクションが届きました。"}
            // leftIcon={<Icon5 name={"heart"} size={20} color="pink" />}
          />
          <ListItem
            title={"さんからリアクションが届きました。"}
            // leftIcon={<Icon5 name={"laugh"} size={20} color="pink" />}
          />
          <ListItem
            title={"さんから本のおすすめが届きました。"}
            // leftIcon={<Icon5 name={"book"} size={20} color="skyblue" />}
          />
          <ListItem
            title={"さんから本のおすすめが届きました。"}
            // leftIcon={<Icon5 name={"book"} size={20} color="skyblue" />}
          />
          <ListItem
            title={"さんからリアクションが届きました。"}
            // leftIcon={<Icon5 name={"heart"} size={20} color="pink" />}
            // bottomDivider
          />
        </View>
      </ScrollView>
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
