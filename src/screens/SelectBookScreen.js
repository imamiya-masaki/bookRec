import React from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight,
} from "react-native";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Button,
  Text,
  Input,
} from "@ui-kitten/components";

import RecommendBookList from "../components/RecommendBookList";

export default class SelectBookScreen extends React.Component {
  state = {
    bookTitle: "",
    books: [],
    items: [],
    selectedBooks: [],
  };

  componentDidMount() {
    const url = "http://54.178.65.84:8080/book/";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        let getItems = [];
        for (let i = 0; i < result.length; i++) {
            if (!result[i].title == "" && !result[i].author == "")
                getItems.push(result[i]);
        }
        this.setState({
          items: getItems,
          books: getItems,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addSelectedItem(item) {
    if (
      this.state.selectedBooks != null &&
      !this.state.selectedBooks.includes(item)
    ) {
      this.setState({
        selectedBooks: this.state.selectedBooks.concat(item),
      });
    } else {
        this.setState({
            selectedBooks: this.state.selectedBooks.filter(books => books !== item)
        })
    }
  }

  search(bookTitle) {
    if (bookTitle == "") {
      this.setState({ books: this.state.items });
    } else {
      let hitBooks = this.state.items.filter((item) =>
        item.title.includes(bookTitle)
      );
      this.setState({ books: hitBooks });
    }
  }

  renderImage(item) {
    if (item.uri) {
      return (
        <Image style={{ width: 100, height: 160 }} source={{ uri: item.uri }} />
      );
    } else {
      return (
        <Image
          style={{ width: 100, height: 160 }}
          source={require("../../assets/noimage.jpg")}
        />
      );
    }
  }

  render() {
    const { root } = this.props.route.params;

    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
          <Layout style={styles.searchItems}>
            <Layout style={{ flex: 1, paddingRight: 8 }}>
              <Input
                placeholder="タイトル"
                onChangeText={(text) => this.setState({ bookTitle: text })}
              />
            </Layout>

            <Button onPress={() => this.search(this.state.bookTitle)}>
              検索
            </Button>
          </Layout>

          <FlatList
            data={this.state.books}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableHighlight
                style={{ flex: 1, paddingTop: 8 }}
                onPress={() => this.addSelectedItem(item)}
                underlayColor="transparent"
              >
                <Layout style={styles.bookInfo}>
                  {this.renderImage(item)}
                  <Text style={{ padding: 16, fontSize: 24 }}>
                    {item.title}
                  </Text>
                </Layout>
              </TouchableHighlight>
            )}
          />

          <RecommendBookList selectedBooks={this.state.selectedBooks} />

          <Button
            onPress={() =>
              this.props.navigation.navigate("SelectUser", {
                root: root,
                selectedBooks: this.state.selectedBooks,
              })
            }
          >
            次へ
          </Button>
        </Layout>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  searchItems: {
    alignItems: "center",
    flexDirection: "row",
  },
  bookInfo: {
    flex: 1,
    flexDirection: "row",
  },
});
