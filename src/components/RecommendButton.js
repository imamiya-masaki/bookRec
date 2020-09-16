import React from "react";
import {StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
import {
    ApplicationProvider,
    Layout,
    Button,
    Icon,
} from "@ui-kitten/components";

export default class RecommendButton extends React.Component {
    render() {

        const { onPress } = this.props

        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={styles.container}>
                    <Button style={styles.circleButton} onPress={onPress} />
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
    },
    circleButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
})