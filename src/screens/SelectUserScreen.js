import React from "react";
import {StyleSheet, FlatList, View, Image } from "react-native";
import * as eva from "@eva-design/eva";
import {
    ApplicationProvider,
    Layout,
    Button,
    Text,
    Input,
} from "@ui-kitten/components";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class SelectBookScreen extends React.Component {
   
    render() {
        const { onPress } = this.props 
        return(
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout>
                    <Text>
                        SelectUser
                    </Text>
                </Layout>
            </ApplicationProvider>
        )

    }
}

