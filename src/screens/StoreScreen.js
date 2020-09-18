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

export default class StoreScreen extends React.Component {
  state = {
    isModalVisible: false,
    search: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    // const url = 'http://127.0.0.1:8080/book/'
    const url = "http://54.178.65.84:8080/book";
    console.log("url", url);
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("check", result[0].uri);
          let getItems = [];
          for (let i = 0; i < result.length; i++) {
            if (result[i].author != "") {
              getItems.push(result[i]);
            }
          }
          this.setState({
            isLoaded: true,
            items: getItems,
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

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  //bookdetailにid渡せばいいのかな。
  render() {
    const { error, isLoaded, items, search } = this.state;
    console.log("check", items);
    let itemSeparate = [[]];
    let index = 0;
    var label = [
      "今週のおすすめ",
      "リアクション数ランキング",
      "小説おすすめ",
      "コミックおすすめ",
      "雑誌おすすめ",
    ]; // 本当はlabelに合わせた処理をするけど今回はストアにはこらないので
    for (let item of items) {
      if (itemSeparate[index].length >= 5) {
        index += 1;
      }
      if (item.uri == "") {
        itemSeparate[index].push(
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("BookDetailStack", {
                screen: "BookDetail",
                params: { book: item },
              })
            }
          >
            <Image
              style={{
                width: 100,
                height: 150,
                marginLeft: 10,
              }}
              source={{
                uri:
                  "https://res.cloudinary.com/teamb/image/upload/v1600230253/hagaren_hluhnd.jpg",
              }}
            />
            <Text>{item.title} </Text>
            <Text>￥　{item.price}</Text>
          </TouchableOpacity>
        );
      } else {
        itemSeparate[index].push(
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("BookDetailStack", {
                screen: "BookDetail",
                params: { book: item },
              })
            }
          >
            <Image
              style={{
                width: 100,
                height: 150,
                marginLeft: 10,
              }}
              source={{
                uri: item.uri,
              }}
            />
            <Text>{item.title}</Text>
            <Text>￥　{item.price}</Text>
          </TouchableOpacity>
        );
      }
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
              // onPress={() => alert("詳細")}
            />
          </View>
          <ScrollView horizontal showsVerticalScrollIndicator={false}>
            {itemSeparate}
          </ScrollView>
        </View>
      );
    }
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <SearchBar
            placeholder="本を探す..."
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={{ backgroundColor: "white", borderColor: "#fff" }}
          />
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
