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
import HelpModal from "../components/HelpModal";

export default class HomeScreen extends React.Component {
  _card = (el) => {
    console.log("Card: " + el.name);
  };

  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      userinfo: [],
    };
  }

  componentDidMount() {
    // const url = 'http://127.0.0.1:8080/book/'
    const url = "http://54.178.65.84:8080/dashboard_info";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("check", result.CouponCount);
          this.setState({
            isLoaded: true,
            items: result,
          });
          console.log("items", items);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
          });
        }
      );
    const id = 0;
    const userurl = `http://54.178.65.84:8080/users/:"${id}`;
    console.log("url", userurl);
    fetch(userurl)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("username", result.username);
          this.setState({
            isLoaded: true,
            userinfo: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items, onPress, userinfo } = this.state;
    console.log("userinfo", userinfo);
    console.log("couponcount", items.CouponCount);
    let reactions = 0;
    let name;
    if (userinfo.username == "") {
      name = "unknown";
    } else {
      name = userinfo.username;
    }
    if (items.Reactions == null) {
      reactions = 0;
    } else {
      reactions = Reactions.length;
    }
    const board = [
      {
        name: `Recommend
            ×${items.RecommendCount}`,
        background: "#3498db",
        icon: "user",
      },
      {
        name: `Recommen-
        ded×${items.RecommendedCount}`,
        background: "#3498db",
        icon: "user",
      },
      {
        name: `Reactions×${items.ReactionCount}`,
        background: "#3498db",
        icon: "heart",
      },
      {
        name: `Coupons×${items.CouponCount}`,
        background: "#3498db",
        icon: "ticket",
      },
      {
        name: `Books×${items.CouponCount}`,
        background: "#3498db",
        icon: "book",
      },
      { name: `Friends×${reactions}`, background: "#3498db", icon: "group" },
    ];
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
          {/* <Header name="ホーム" /> */}
          <Icon
            style={{ position: "absolute", right: 20, top: 20 }}
            name="question"
            size={30}
            color="gray"
            onPress={() => this.props.navigation.navigate("tutorial")} //だめ
          ></Icon>
          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <Avatar
              size="large"
              title="Icon"
              rounded
              source={require("../../assets/unknown-person-icon-4.png")}
            />
            <Text style={{ alignSelf: "center", marginLeft: 40 }}>{name}</Text>
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
            items={board}
            background={true}
            card={this._card}
            column={3}
          />
          {/* {modal} */}
        </View>
      </ApplicationProvider>
    );
  }
}

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
  modal: {
    position: "absolute",
    bottom: 80,
    height: 150,
  },
});

const user = {
  name: "○○",
  id: "xxx",
};
