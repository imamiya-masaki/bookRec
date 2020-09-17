import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";

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
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Text>
                {` Modal Content
               
              
              
              
              
              
              
              
              
              
              
              
              
              
              ここにチュートリアル書きます。
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
               `}
              </Text>
              <Button
                title="Close modal"
                onPress={() => this.props.navigation.navigate("Home")}
              />
            </View>
          </ScrollView>
        </Modal>
      </SafeAreaView>
    );
  }
}
