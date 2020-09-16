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

export default class SelectUserScreen extends React.Component {
   
    render() {
        const { onPress } = this.props 
        return(
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={{flex: 1, alignItems: 'center'}}>
                    <Text>
                        SelectUser
                    </Text>
                    <Button onPress={() => this.props.navigation.navigate('Home')}/>
                </Layout>
            </ApplicationProvider>
        )
    }
}

