import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
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
  Avatar,
} from "@ui-kitten/components";
import { twitter_id, setTwitterId } from "../Global.js";


import RecommendBookList from "../components/RecommendBookList";
import RecommendUserList from "../components/RecommendUserList";

export default class SelectRecommendScreen extends React.Component {
  state = {
    message: "",
    user_id: 0,
    reactions: [],
    selectedReaction: {} 
  };

  constructor(props){
    super(props);
    this.getUserId(twitter_id)
    this.getReactions()
  }

  getUserId(twitter_id) {
    const url = "http://54.178.65.84:8080/user_by_twitter/"
    fetch(url+twitter_id)
    .then((response) => response.json())
    .then((result) => {
      this.setState({user_id: result.id})
    })
    .catch((error) => console.log(error))
  }

  pressSend(root, selectedBooks, selectedUsers) {
    for (let i = 0; i < selectedUsers.length; i++) {
      for (let j = 0; j < selectedBooks.length; j++) {
        const recommendData = {
          SenderId: this.state.user_id,
          ReceiverId: selectedUsers[i].id,
          BookId: selectedBooks[j].id,
          ReactionContentId: this.state.selectedReaction.Id,
        };

        const recommendParam = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recommendData),
        };
        fetch("http://54.178.65.84:8080/recommend", recommendParam)
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
        const messageData = {
          RecommendId: 1,
          Content: this.state.message,
        };

        const messageParam = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        };

          fetch("http://54.178.65.84:8080/message", messageParam)
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      }
    }
    this.props.navigation.navigate(root);
  }

  getReactions() {
    const url = "http://54.178.65.84:8080/reaction/"
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let getItems = []
      for (let i=0; i<result.length; i++) {
        getItems.push(result[i])
      }
      this.setState({reactions: getItems})
    })
    .catch((error) => console.log(error))
  }

  selectReaction(item) {
    this.setState({selectReaction: item})
  }

  render() {
    const { root, selectedBooks, selectedUsers } = this.props.route.params;

    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
          <Layout>
            <Text style={styles.title}>おすすめする本</Text>
            <RecommendBookList selectedBooks={selectedBooks} />
          </Layout>

          <Layout style={{ paddingTop: 16 }}>
            <Text style={styles.title}>おすすめするユーザー</Text>
            <RecommendUserList selectedUsers={selectedUsers} />
          </Layout>

          <Layout style={{ paddingTop: 16}}>
            <Text style={styles.title}>リアクション</Text>
            <FlatList
            data={this.state.reactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableHighlight
                style={{ flex: 1, paddingTop: 8 }}
                onPress={() => this.selectReaction(item)}
                underlayColor="transparent"
              >
                <Layout style={styles.reactionList}>
                  {/* <Avatar size='giant' source={{uri: item.Uri}}/> */}
                  {/* <Avatar size='giant' source={{uri: "https://res.cloudinary.com/teamb/image/upload/v1600394098/%E8%87%AA%E5%B7%B1%E5%95%93%E7%99%BA_yb7yeb.png"}}/> */}
                  <Image style={{ width: 50, height: 80,resizeMode: 'contain' }} source={{uri: "https://res.cloudinary.com/teamb/image/upload/v1600394098/%E8%87%AA%E5%B7%B1%E5%95%93%E7%99%BA_yb7yeb.png"}} />
                </Layout>

              </TouchableHighlight>
            )}
          />
          </Layout>

          <Layout style={{ flex: 1, paddingTop: 8 }}>
            <Text style={styles.title}>メッセージ</Text>
            <Input
              style={{ paddingTop: 8 }}
              placeholder="メッセージを入力"
              onChangeText={(text) => this.setState({ message: text })}
              multiline
            />
          </Layout>

          <Button
            onPress={() => this.pressSend(root, selectedBooks, selectedUsers)}
          >
            送信する
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
  title: {
    fontSize: 24,
  },
  reactionList: {
    flex: 1,
    flexDirection: 'row',
    padding: 4
},
});
