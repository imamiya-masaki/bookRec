import React from "react";
import * as eva from "@eva-design/eva";
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import Header from "../components/Header";
import AnonymousHeader from "../components/AnonymousHeader";
import Dashboard from "react-native-dashboard";
import { ListItem, Avatar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import AnonymousModal from "../components/AnonymousModal";
import Modal from "react-native-modal";

import ReactionScreen from "./ReactionScreen";
export default class HomeScreen extends React.Component {
  _card = (el) => {
    console.log("Card: " + el.name);
  };

  state = {
    sms: true,
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      // <ReactionScreen />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
          <Header />
          <View
            style={{
              marginTop: 100,
              marginLeft: 20,
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <Avatar
              size="large"
              title="Icon"
              rounded
              source={require("../../assets/dog.jpg")}
            />
            <Text style={{ alignSelf: "center", marginLeft: 40 }}>名前</Text>
          </View>
          <ScrollView>
            <View style={{ marginTop: 0, width: "100%", alignSelf: "center" }}>
              <ListItem
                title={user.name + "さんからリアクションが届きました。"}
                leftIcon={<Icon5 name={"heart"} size={20} color="pink" />}
              />
              <ListItem
                title={user.name + "さんからリアクションが届きました。"}
                leftIcon={<Icon5 name={"laugh"} size={20} color="pink" />}
              />
            </View>
            <View style={{ marginTop: 0, width: "100%", alignSelf: "center" }}>
              <ListItem
                title={user.name + "さんから本のおすすめが届きました。"}
                leftIcon={<Icon5 name={"book"} size={20} color="skyblue" />}
              />
              <ListItem
                title={user.name + "さんから本のおすすめが届きました。"}
                leftIcon={<Icon5 name={"book"} size={20} color="skyblue" />}
              />
              <ListItem
                title={user.name + "さんからリアクションが届きました。"}
                leftIcon={<Icon5 name={"heart"} size={20} color="pink" />}
                bottomDivider
              />
            </View>
          </ScrollView>
        </SafeAreaView>
        <Layout
          style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}
        ></Layout>
        <View style={styles.container}>
          <Dashboard
            items={items}
            background={true}
            card={this._card}
            column={3}
          />
        </View>
      </ApplicationProvider>
    );
  }
}

//日本語化と横幅指定ができてない.文字の位置もおかしい。(webとandroidで違う、、)
const items = [
  { name: "recommend", background: "#3498db", icon: "user" },
  { name: "recommended", background: "#3498db", icon: "user" },
  { name: "reactions", background: "#3498db", icon: "heart" },
  { name: "coupon", background: "#3498db", icon: "ticket" },
  { name: "books", background: "#3498db", icon: "book" },
  { name: "friends", background: "#3498db", icon: "group" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    position: "absolute",
    bottom: 0,
  },
});

const user = {
  name: "○○",
  id: "xxx",
};
