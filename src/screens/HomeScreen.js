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
import Header from "../component/Header";
import Dashboard from "react-native-dashboard";
import { ListItem, Avatar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";

export default class HomeScreen extends React.Component {
  _card = (el) => {
    console.log("Card: " + el.name);
  };

  state = {
    sms: true,
  };

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
          <Header />
          <ScrollView>
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
        {/* <Layout
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          ></Layout> */}

        {/* <Text>Home!</Text> */}

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
  {
    name: "recommend",
    background: "#3498db",
    icon: "user",
    width: Dimensions.get("screen").width * 0.3,
  },
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
  items: {
    alignItems: "stretch",
  },
});

const user = {
  name: "○○",
  id: "xxx",
};
