import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import BootstrapStyleSheet from "react-native-bootstrap-styles";
import AnonymousModal from "./AnonymousModal";
import TutorialModal from "./TutorialModal";
import Modal from "react-native-modal";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const { onPress } = this.props;
    let modal;
    let iconType;
    if (this.props.name === "ホーム") {
      (iconType = "question"),
        (modal = (
          <Modal isVisible={this.state.isModalVisible}>
            {/* <ScrollView> */}
            <View style={styles.modal}>
              <TutorialModal nav={this} />
            </View>
            {/* </ScrollView> */}
          </Modal>
          // <Modal
          //   animationType="fade"
          //   transparent
          //   // visible={this.state.open}
          //   onRequestClose={this.onClose}
          //   isVisible={this.state.isModalVisible}
          // >
          //   <TouchableOpacity style={styles.container} onPress={this.onClose}>
          //     <ScrollView>
          //       <TouchableWithoutFeedback>
          //         <View style={{ alignItems: "center" }}>
          //           <TutorialModal nav={this} />
          //         </View>
          //       </TouchableWithoutFeedback>
          //     </ScrollView>
          //   </TouchableOpacity>
          // </Modal>
        ));
    } else if (this.props.name === "おすすめ") {
      (iconType = "gear"),
        (modal = (
          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles.modal}>
              <AnonymousModal nav={this} />
            </View>
          </Modal>
        ));
    } else if (this.props.name === "本棚") {
      iconType = "gear";
      // (modal = (
      //   <Modal isVisible={this.state.isModalVisible}>
      //     <View style={styles.modal}>
      //       <AnonymousModal nav={this} />
      //     </View>
      //   </Modal>
      // ));
    } else if (this.props.name === "ストア") {
      iconType = "bell";
      // (modal = (
      //   // <Modal isVisible={this.state.isModalVisible}>
      //   //   <View style={styles.modal}>
      //   //     <AnonymousModal nav={this} />
      //   //   </View>
      //   // </Modal>
      // ));
    }
    return (
      <View style={styles.header}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.headerText}>{this.props.name}</Text>
          <Icon
            style={styles.rightIcon}
            name={iconType}
            size={30}
            color="gray"
            // onPress={onPress}
            onPress={this.toggleModal}
          />
        </View>
        {modal}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    height: 80,
    left: 0,
    right: 0,
    paddingTop: 40,
    backgroundColor: "lightblue",
  },
  rightIcon: {
    position: "absolute",
    right: 20,
    // paddingRight: 10,
  },
  headerText: {
    fontSize: 20,
    color: "gray",
    textAlign: "center",
  },
  modal: {
    position: "absolute",
    bottom: 80,
    height: 150,
  },
});
