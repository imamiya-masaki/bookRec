import { SearchBar } from "react-native-elements";
import React from "react";
import * as eva from "@eva-design/eva";
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import Header from "../components/Header";
import { ListItem, Button, Image } from "react-native-elements";
import BookDetailScreen from "./BookDetailScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { StackNavigator } from "react-navigation";

// const Stack = createStackNavigator({
//   BookDetailScreen: BookDetailScreen,
// });

// import ReactionScreen from "./ReactionScreen";
export default class StoreScreen extends React.Component {
  state = {
    sms: true,
    isModalVisible: false,
    search: "",
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const { search } = this.state;
    var label = [
      "今週のおすすめ",
      "リアクション数ランキング",
      "小説おすすめ",
      "コミックおすすめ",
      "雑誌おすすめ",
    ];
    var Cards = [];
    for (let i = 0; i < label.length; i++) {
      Cards.push(
        <TouchableOpacity key={i}>
          <Image
            style={{
              width: 100,
              height: 150,
              marginLeft: 10,
              // onPress={() => navigation.navigate(BookDetailScreen)},
            }}
            source={{
              uri:
                "https://res.cloudinary.com/teamb/image/upload/v1600230253/hagaren_hluhnd.jpg",
            }}
          />
          <Text>￥ 500</Text>
        </TouchableOpacity>
      );
    }
    var Books = [];
    for (let i = 0; i < 5; i++) {
      Books.push(
        <View>
          <View style={{ marginTop: 0, width: "100%", alignSelf: "center" }}>
            <ListItem
              title={label[i]}
              bottomDivider
              chevron
              onPress={() => alert("詳細")}
            />
          </View>
          <ScrollView horizontal showsVerticalScrollIndicator={false}>
            {Cards}
          </ScrollView>
        </View>
      );
    }

    return (
      // <ReactionScreen />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <Header name="ストア" />
          <View
            style={{
              marginTop: 80,
              marginBottom: 20,
            }}
          >
            <SearchBar
              placeholder="本を探す..."
              onChangeText={this.updateSearch}
              value={search}
              containerStyle={{ backgroundColor: "white", borderColor: "#fff" }}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>{Books}</ScrollView>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    position: "absolute",
    bottom: 0,
  },
});
