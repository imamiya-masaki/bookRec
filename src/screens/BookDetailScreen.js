import React from "react";
import { StyleSheet, Image } from "react-native";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
} from "@ui-kitten/components";
import BootstrapStyleSheet from "react-native-bootstrap-styles";

const twitterId = "dwwadamlkdfmwaklrakmralrma"

export default class BookDetailScreen extends React.Component {

  state = {
    ownBooks: []
  }

  renderImage(uri) {
    if (uri == null || uri == "") {
      uri = 'https://res.cloudinary.com/teamb/image/upload/v1600318026/noimage_jj1ubq.jpg'
    }
    return (
      <Image style={{ width: 320, height: 320 }} source={{uri: uri}} />
    )
  }

  constructor(props){
    super(props);
    this.getOwnBooks = this.getOwnBooks.bind(this)
    this.getOwnBooks(twitterId);
  }

  getOwnBooks(twitterId) {
    const url = "http://54.178.65.84:8080/book_by_twitter_id/"
    fetch(url+twitterId)
    .then((response) => response.json())
    .then((result) => {
      let getItems = []
      for (let i=0; i<result.quantity; i++) {
        getItems.push(result.books[i])
      }
      this.setState({ownBooks: getItems})
    })
    .catch((error) => console.log(error))
  }

  renderButtons(book) {
    // 本を持っているか確認
    const some = this.state.ownBooks.some(
      b => b.id === book.id &&
           b.bookGroupId === book.bookGroupId && 
           b.title === book.title &&
           b.author === book.author &&
           b.price === book.price &&
           b.releaseDate === book.releaseDate &&
           b.uri === book.uri
    );
    if (some) {
      return (
        <Layout style={styles.buttonContainer}>
          <Button onPress={() => this.props.navigation.navigate('BookRead', {book: book})}>
            読む
          </Button>
        </Layout>
      )
    } else {
      return (
        <Layout style={styles.buttonContainer}>
          <Button onPress={() => this.props.navigation.navigate('BookRead', {book: book})}>
            サンプル
          </Button>
          <Button onPress={() => {}}>
            購入する
          </Button>
        </Layout>
      )
    }
  }

  render() {

    const { book } = this.props.route.params

    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
          {this.renderImage(book.uri)}
          <Layout style={styles.bookTitle}>
            <Text style={{ fontSize: 32 }}>{book.title}</Text>
          </Layout>
          {this.renderButtons(book)}
        </Layout>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 48,
    paddingTop: 96,
  },
  bookTitle: {
    paddingTop: 16,
  },
  price: {
    paddingTop: 8,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 48,
    justifyContent: "space-around",
  },
});
