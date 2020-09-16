import React from "react";
import {StyleSheet, FlatList, View, Image, TouchableHighlight } from "react-native";
import * as eva from "@eva-design/eva";
import {
    ApplicationProvider,
    Layout,
    Button,
    Text,
    Input,
} from "@ui-kitten/components";

export default class RecommendBookList extends React.Component {

    renderBook({item}) {
        return (
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: 8}}>
                <Image 
                    style={{ width: 50, height: 80, resizeMode: 'contain' }}
                    source={{uri: "https://www.cmoa.jp/data/image/title/title_0000037770/VOLUME/100000377700001.jpg"}}
                />
                <Text>
                    {item.title}
                </Text>
            </Layout>
        )
    }

    render() {
        console.log(this.props.selectedBooks);
        return (
            <Layout>
                <FlatList
                    data={this.props.selectedBooks}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={this.renderBook.bind(this)}
                />
            </Layout>
        )
    }
}