import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Button,
} from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { Avatar, Card } from "@ui-kitten/components";
import AnonymousModal from "./AnonymousModal";
import Modal from "react-native-modal";
export default class RecommendCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: false };
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  renderImage(image) {
    let uri;
    if (image == null || image == "") {
      uri =
        "https://res.cloudinary.com/teamb/image/upload/v1600318026/noimage_jj1ubq.jpg";
    } else {
      uri = image;
    }
    console.log(uri);
    return <Image style={styles.book_image} source={{ uri: uri }} />;
  }

  render() {
    let { data, navDetail } = this.props;
    let datas = [];
    let button = [];
    let text = [];
    if (this.props.name == "MyRecommend") {
      button = "匿名解除";
      text = "匿名を解除する";
    } else {
      button = "匿名解除リクエスト";
      text = "匿名解除をリクエストする";
      console.log(this.props.name);
    }
    // for (let i=0; i<data.length; i++) {
    //     datas.push({reactionImages: data[i].reactionImages, books: data[i].books})
    //     //本のデータが決まったら
    // }
    for (let i = 0; i < data.Books.length; i++) {
      datas.push({ reactions: data.Reactions, books: data.Books });
    }
    console.log(data);
    return (
      <Card>
        <Layout
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Avatar
            size="giant"
            source={{
              uri:
                "https://akveo.github.io/react-native-ui-kitten/images/Artboard-1.png",
            }}
          />
          <Text style={{ padding: 10 }}>{data.User.username}</Text>
          <Button
            title={button}
            onPress={this.toggleModal}
            style={{ padding: 30 }}
          />
        </Layout>

        <Layout style={{ flexDirection: "row" }}>
          {datas.map((data, index) => (
            <Layout key={index}>
              <Avatar
                size="giant"
                source={{ uri: data.reactions[index].Uri }}
              />
              <TouchableHighlight
                onPress={() => navDetail(data.books[index])}
                underlayColor="transparent"
              >
                {/* <Image style={styles.book_image} source={{uri: data.books.bookImages[index]}}/> */}
                {this.renderImage(data.books[index].uri)}
              </TouchableHighlight>
              <Modal isVisible={this.state.isModalVisible}>
                <AnonymousModal nav={this} name={text} />
              </Modal>
            </Layout>
          ))}
        </Layout>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  book_image: {
    marginLeft: 15,
    width: 100,
    height: 160,
  },
});

// 0:
// 1:匿名解除する
