import React from "react";
import * as eva from "@eva-design/eva";
import {
  View,
  Button,
  Dimensions,
  Text,
  ScrollView,
  ListItem,
  SafeAreaView,
} from "react-native";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import { ApplicationProvider, Layout } from "@ui-kitten/components";

// スクロールできるものor画面遷移できるものにしてチュートリアルを作成する。
export default class TutorialModal extends React.Component {
  render() {
    return (
      <View
        style={{
          position: "absolute",
          Top: 40,
          flex: 1,
          backgroundColor: "#fff",
          width: Dimensions.get("screen").width * 0.9,
          flexDirection: "column",
        }}
      >
        {/* <ApplicationProvider {...eva} theme={eva.light}>
           <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
             <ScrollView>
       <View style={{ marginTop: 0, width: "100%", alignSelf: "center" }}>
         <ListItem
          title={"さんからリアクションが届きました。"}
          leftIcon={<Icon5 name={"heart"} size={20} color="pink" />}
        />
        <ListItem
          title={"さんからリアクションが届きました。"}
          leftIcon={<Icon5 name={"laugh"} size={20} color="pink" />}
        />
        <ListItem
          title={"さんから本のおすすめが届きました。"}
          leftIcon={<Icon5 name={"book"} size={20} color="skyblue" />}
        />
        <ListItem
          title={"さんから本のおすすめが届きました。"}
          leftIcon={<Icon5 name={"book"} size={20} color="skyblue" />}
        />
        <ListItem
          title={"さんからリアクションが届きました。"}
          leftIcon={<Icon5 name={"heart"} size={20} color="pink" />}
        /> */}
        <Button title="匿名解除を希望する" />
        <Button title="キャンセル" onPress={this.props.nav.toggleModal} />
      </View>
      //     </ScrollView>
      //   </SafeAreaView>
      // </ApplicationProvider>
    );
  }
}

{
  /* <View style={{ alignItems: "center" }}>
          <Text>{`
  1. はじめに
ここに
チュートリアル
を
いれていきます。
`}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button title="はじめに" />
          <Button title="キャンセル" onPress={this.props.nav.toggleModal} />
        </View>  */
}
{
  /* </View> */
}
