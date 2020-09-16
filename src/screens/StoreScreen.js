import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  View,
  SafeAreaView,
} from "@ui-kitten/components";
import { SearchBar } from "react-native-elements";
import Header from "../components/Header";
import BookList from "../components/Books";
export default class StoreScreen extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      //   <View style={{ flexDirection: "row" }}>
      <ApplicationProvider {...eva} theme={eva.light}>
        {/* <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}> */}
        {/* <View style={{ flexDirection: "row" }}> */}
        {/* <Header /> */}
        <Header name="ストア" />
        <Layout style={{ flex: 1, flexDirection: "column", marginTop: 80 }}>
          {/* <Header /> */}
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={{ backgroundColor: "gray" }}
            inputStyle={{ backgroundColor: "red" }}
            style={{ position: "absolute", top: 80 }}
            iconStyle={{ backgroundColor: "#fff" }}
            inputStyle={{ backgroundColor: "#fff", borderColor: "#fff" }}
            containerStyle={{ backgroundColor: "white", borderColor: "#fff" }}
            placeholderTextColor="#444"
          />
          {/* <Books /> */}
        </Layout>
        {/* <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          style={{ position: "absolute", top: 80 }}
        /> */}
        {/* <Layout
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          > */}
        {/* <Text>Store!</Text> */}
        {/* </Layout> */}
        {/* </SafeAreaView> */}
        {/* </View> */}
      </ApplicationProvider>
      // //{" "}
      // </View>
    );
  }
}

// justifyContent: "center", alignItems: "center"
