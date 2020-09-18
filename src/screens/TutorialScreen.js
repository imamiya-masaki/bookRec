import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  ScrollView,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import Swiper from "react-native-swiper";

export default class TutorialScreen extends React.Component {
  state = {
    isModalVisible: true,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Modal isVisible={this.state.isModalVisible}>
          <Swiper showsButtons={true}>
            <View style={styles.slide}>
              <Text style={styles.title}>Welcome to BookRec</Text>
              <Image
                style={{
                  width: 200,
                  height: 200,
                }}
                source={require("../../assets/logo.png")}
              />
              <Text style={styles.text}>BookRecは本の匿名</Text>
              <Text style={styles.text}>おすすめサービスです</Text>
              <Text style={styles.text}>本、漫画、雑誌をおすすめ</Text>
              <Text style={styles.text}>してみませんか</Text>
              <Text style={styles.text}>新たな話題のきっかけ</Text>
              <Text style={styles.text}>にもなるかもしれません</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.title}>おすすめをしよう</Text>
              <Image
                style={{
                  width: 200,
                  height: 200,
                }}
                source={require("../../assets/logo.png")}
              />

              <Text style={styles.text}>右下のおすすめボタンから</Text>
              <Text style={styles.text}>おすすめしたい本</Text>
              <Text style={styles.text}>おすすめしたい相手を</Text>
              <Text style={styles.text}>選んで、メッセージを</Text>
              <Text style={styles.text}>送ってみよう</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.title}>反応を見よう</Text>
              <Image
                style={{
                  width: 200,
                  height: 200,
                }}
                source={require("../../assets/logo.png")}
              />
              <Text style={styles.text}>ホ-ム画面の通知や</Text>
              <Text style={styles.text}>おすすめ画面から</Text>
              <Text style={styles.text}>おすすめした相手からの</Text>
              <Text style={styles.text}>返事をみることができます</Text>
              <Text style={styles.text}>もちろん匿名で</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.title}>匿名解除には・・</Text>
              <Image
                style={{
                  width: 200,
                  height: 200,
                }}
                source={require("../../assets/logo.png")}
              />
              <Text style={styles.text}>匿名を解除する</Text>
              <Text style={styles.text}>もしくはおすすめを</Text>
              <Text style={styles.text}>くれた相手の匿名解除を</Text>
              <Text style={styles.text}>希望する時は</Text>
              <Text style={styles.text}>おすすめ画面の右上</Text>
              <Text style={styles.text}>設定ボタンで行えます</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.title}>クーポンget</Text>
              <Image
                style={{
                  width: 200,
                  height: 200,
                }}
                source={require("../../assets/logo.png")}
              />
              <Text style={styles.text}>本をおすすめした相手が</Text>
              <Text style={styles.text}>その本を購入すると</Text>
              <Text style={styles.text}>お互いにクーポンが</Text>
              <Text style={styles.text}>もらえます</Text>
            </View>
            <View style={styles.slide}>
              {/* <Text style={styles.title}>最後に</Text> */}
              <Image
                style={{
                  width: 200,
                  height: 200,
                }}
                source={require("../../assets/logo.png")}
              />
              <Button
                title="Start"
                onPress={() => this.props.navigation.navigate("Home")}
              ></Button>
            </View>
          </Swiper>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    color: "dodgerblue",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "dodgerblue",
    fontSize: 15,
    fontWeight: "bold",
  },
});
