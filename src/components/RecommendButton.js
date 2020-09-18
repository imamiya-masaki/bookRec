import React from "react";
import {StyleSheet, TouchableHighlight } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as eva from "@eva-design/eva";
import {
    ApplicationProvider,
    Layout,
    Button,
} from "@ui-kitten/components";

export default class RecommendButton extends React.Component {
    render() {

        const { onPress } = this.props

        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={styles.container}>
                    <TouchableHighlight
                        style={styles.circleButton}
                        onPress={onPress}
                        underlayColor='transparent'
                    >
                        <Ionicons name='md-thumbs-up' size={24} color='white' />
                    </TouchableHighlight>
                    {/* <Button style={styles.circleButton} onPress={onPress}>
                        <Ionicons name='md-thumbs-up' size={24} />
                    </Button> */}
                </Layout>
            </ApplicationProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 36,
      right: 36,
      width: 48,
      height: 48,
      borderRadius: 24,
    },
    circleButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3366ff",
        shadowColor: "#000",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
})