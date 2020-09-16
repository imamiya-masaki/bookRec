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

export default class BookDetailScreen extends React.Component {
  static navigationOptions = {
    title:"BookDetail"
  }
  constructor(props){
    super(props);
    this.state = { myinput: '' };
  }
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
          <Image
            style={{ width: 320, height: 320 }}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />

          <Layout style={styles.bookTitle}>
            <Text style={{ fontSize: 32 }}>React Native</Text>
          </Layout>

          <Layout style={styles.buttonContainer}>
            <Button onPress={() => {}}>サンプル</Button>

            <Button onPress={() => {}}>購入する</Button>
          </Layout>
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
